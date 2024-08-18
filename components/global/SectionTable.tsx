'use client'
import React, { useState } from 'react'
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
    console.log('Selected Hospital:', hospital) // Debugging log
  }

  const handleCloseModal = () => {
    setSelectedHospital(null)
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleExportData = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [
        [
          'State',
          'LGA',
          'Ward',
          'Facility',
          'Name',
          'Email',
          'Address',
          'Phone',
          'Level',
          'Ownership',
        ].join(','),
        ...hospitals.map((hospital) =>
          [
            hospital.State,
            hospital.LGA,
            hospital.Ward,
            hospital.Facility,
            hospital.Name,
            hospital.Email,
            hospital.Address,
            hospital.Phone,
            hospital.Level,
            hospital.Ownership,
          ].join(',')
        ),
      ].join('\n')

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'hospitals_data.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const indexOfLastHospital = currentPage * hospitalsPerPage
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage
  const currentHospitals = hospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  )
  const totalPages = Math.ceil(hospitals.length / hospitalsPerPage)

  return (
    <div className="container px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-end mb-4">
          <Button
            onClick={handleExportData}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Export Data
          </Button>
        </div>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full leading-normal ">
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentHospitals.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="px-3 py-3 border border-gray-200 bg-white text-sm text-gray-900">
                    {hospital.State}
                  </td>
                  <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                    {hospital.LGA}
                  </td>
                  <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                    {hospital.Ward}
                  </td>
                  <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                    {hospital.Facility}
                  </td>
                  <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                    {hospital.Name}
                  </td>
                  <td className="px-5 py-5 border border-gray-200 bg-white text-sm text-gray-900">
                    <Button
                      onClick={() => handleViewDetails(hospital.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
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
