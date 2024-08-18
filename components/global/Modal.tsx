import React from 'react'
import { Hospital } from '@prisma/client'
import { Button } from '../ui/button'

interface ModalProps {
  hospital: Hospital | null
  onClose: () => void
  className?: string
}

const generateTwitterShareUrl = (hospital: Hospital) => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`Check out this hospital: ${hospital.Name}`)
  return `https://twitter.com/intent/tweet?url=${url}&text=${text}`
}

const generateFacebookShareUrl = (hospital: Hospital) => {
  const url = encodeURIComponent(window.location.href)
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`
}

const generateLinkedInShareUrl = (hospital: Hospital) => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(hospital.Name)
  const summary = encodeURIComponent(
    `Check out this hospital: ${hospital.Name}`
  )
  return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`
}

const Modal: React.FC<ModalProps> = ({ hospital, onClose, className }) => {
  if (!hospital) return null

  const handleShareClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string | null
  ) => {
    if (!url) {
      e.preventDefault()
      alert('No hospital selected for sharing.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div
        className={`bg-white text-slate-900 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 ${className}`}
      >
        <h2 className="text-2xl font-semibold mb-4">{hospital.Name}</h2>
        <div className="space-y-2">
          <p>
            <strong>State:</strong> {hospital.State}
          </p>
          <p>
            <strong>LGA:</strong> {hospital.LGA}
          </p>
          <p>
            <strong>Ward:</strong> {hospital.Ward}
          </p>
          <p>
            <strong>Facility:</strong> {hospital.Facility}
          </p>
          <p>
            <strong>Email:</strong> {hospital.Email}
          </p>
          <p>
            <strong>Address:</strong> {hospital.Address}
          </p>
          <p>
            <strong>Phone:</strong> {hospital.Phone}
          </p>
          <p>
            <strong>Level:</strong> {hospital.Level}
          </p>
          <p>
            <strong>Ownership:</strong> {hospital.Ownership}
          </p>
        </div>

        {/* Social Media Share Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-x-2 space-y-2 sm:space-y-0 mt-4">
          <a
            href={generateTwitterShareUrl(hospital)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleShareClick(e, generateTwitterShareUrl(hospital))
            }
          >
            <Button className="bg-blue-400 text-white px-4 py-2 rounded w-full sm:w-auto">
              Share on Twitter
            </Button>
          </a>
          <a
            href={generateFacebookShareUrl(hospital)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleShareClick(e, generateFacebookShareUrl(hospital))
            }
          >
            <Button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
              Share on Facebook
            </Button>
          </a>
          <a
            href={generateLinkedInShareUrl(hospital)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              handleShareClick(e, generateLinkedInShareUrl(hospital))
            }
          >
            <Button className="bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto">
              Share on LinkedIn
            </Button>
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
