import EmptyList from '@/components/global/EmptyList'
import SectionTable from '@/components/global/SectionTable'
import { fetchAllHospitals } from '@/utils/actions'

async function FeaturedHospitals({ search }: { search: string }) {
  const hospitals = await fetchAllHospitals({ search })
  const totalHospitals = hospitals.length
  const searchTerm = search ? `&search=${search}` : ''
  if (totalHospitals === 0) return <EmptyList />

  return (
    <section className=" pt-5">
      <SectionTable hospitals={hospitals} />
    </section>
  )
}
export default FeaturedHospitals
