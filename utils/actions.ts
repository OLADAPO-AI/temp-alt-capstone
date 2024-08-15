import db from '@/utils/db'

export const fetchFeaturedHospitals = async () => {
  const hospital = await db.hospital.findMany({
    where: {
      Level: 'Primary',
    },
  })
  return hospital
}
export const fetchAllHospitals = ({ search = '' }: { search: string }) => {
  return db.hospital.findMany({
    where: {
      OR: [
        { Name: { contains: search, mode: 'insensitive' } },
        { State: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}
