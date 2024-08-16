'use client'
import { useState } from 'react'
import { Hospital } from '@prisma/client'
import Modal from './Modal'
import { Button } from '../ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const SectionTable = ({ hospitals }: { hospitals: Hospital[] }) => {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null
  )
  const [currentPage, setCurrentPage] = useState(1)
  const hospitalsPerPage = 5

  const handleViewDetails = (id: string) => {
    const hospital = hospitals.find((hospital) => hospital.id === id)
    setSelectedHospital(hospital || null)
  }

  const handleCloseModal = () => {
    setSelectedHospital(null)
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const indexOfLastHospital = currentPage * hospitalsPerPage
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage
  const currentHospitals = hospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  )
  const totalPages = Math.ceil(hospitals.length / hospitalsPerPage)

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  State
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  LGA
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Ward
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Facility
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Ownershipp
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentHospitals.map((hospital) => {
                const {
                  id,
                  State,
                  LGA,
                  Ward,
                  Facility,
                  Name,
                  Email,
                  Address,
                  Phone,
                  Level,
                  Ownership,
                } = hospital
                return (
                  <tr key={id}>
                    <td className="px-3 py-3 border border-gray-200 bg-white text-sm text-gray-900">
                      {State}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {LGA}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Ward}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Facility}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Name}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900 ">
                      {Email}
                    </td>
                    <td className="px-2 py-2 border border-gray-200 bg-white text-sm text-gray-900">
                      {Address}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Phone}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Level}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      {Ownership}
                    </td>
                    <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                      <Button
                        onClick={() => handleViewDetails(id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Modal to show hospital details */}
      <Modal
        hospital={selectedHospital}
        onClose={handleCloseModal}
        className=" transform transition-shadow duration-500"
      />
    </div>
  )
}

export default SectionTable
