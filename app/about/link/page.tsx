import Link from 'next/link'
import { Button } from '@/components/ui/button'

import React from 'react'

const Linked = () => {
  return (
    <div>
      <Button asChild size="lg" className="mt-10">
        <Link href="/products">Find Hospitals</Link>
      </Button>
    </div>
  )
}

export default Linked
