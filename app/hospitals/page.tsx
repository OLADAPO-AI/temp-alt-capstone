import * as React from 'react'
import AllState from '@/components/form/allState'
import SelectLga from '@/components/form/selectLga'
import { InputFacility } from '@/components/form/input'
import SearchButton from '@/components/form/searchButton'
import FeaturedHospitals from './FeaturedHospital'

function HospitalPage({ searchParams }: { searchParams: { search?: string } }) {
  const search = searchParams.search || ''
  return (
    <section>
      <h2 className="font-bold text-2xl">Find Hospitals</h2>
      <hr className="border-t-2 border-gray-500" />
      <div className="mt-3 flex flex-col">
        <div className="flex flex-row justify-between space-x-2 md:space-x-0">
          {/* <AllState />
          <SelectLga />
          <SearchButton /> */}
        </div>
        <div className="flex flex-row justify-around mt-3">
          <InputFacility />
        </div>
      </div>
      <div>
        <FeaturedHospitals search={search} />
      </div>
    </section>
  )
}

export default HospitalPage
