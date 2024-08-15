import React from 'react'
import { Hospital } from '@prisma/client'

interface ModalProps {
  hospital: Hospital | null
  onClose: () => void
  className?: string
}

const Modal: React.FC<ModalProps> = ({ hospital, onClose, className }) => {
  if (!hospital) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="bg-white text-slate-900 rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2">
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
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
