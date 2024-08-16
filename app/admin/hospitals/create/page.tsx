import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const createProductAction = async (formData: FormData) => {
  'use server'
  const name = formData.get('name') as string
  console.log(name)
}
function CreateHospitalPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Add Hospital</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <div className="mb-2">
            <Label htmlFor="name">Hospital Name</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}

export default CreateHospitalPage
