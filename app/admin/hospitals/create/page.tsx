import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { faker } from '@faker-js/faker'
import FormInput from '@/components/form/FormInput'
const createHospitalAction = async (formData: FormData) => {
  'use server'
  const name = formData.get('name') as string
  console.log(name)
}
function CreateHospitalPage() {
  const State = faker.location.state()
  const LGA = faker.location.city()
  const Ward = faker.lorem.words()
  const Facility = faker.company.name()
  const Name = faker.company.name()
  const Email = faker.internet.email()
  const Address = faker.location.streetAddress()
  const Phone = faker.phone.number()
  const Level = faker.lorem.words()
  const Ownership = faker.lorem.text()
  const ClerkId = faker.number.binary()
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Add Hospital</h1>
      <div className="border p-8 rounded-md">
        <form action={createHospitalAction}>
          <FormInput type="text" Name="Name" label="Hospital name" />
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}

export default CreateHospitalPage
