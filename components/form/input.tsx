'use client'
import { Input } from '@/components/ui/input'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'

const DEBOUNCE_DELAY = 300

export function InputFacility() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  )

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`/hospitals?${params.toString()}`)
  }, DEBOUNCE_DELAY)

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('')
    }
  }, [searchParams.get('search')])

  return (
    <Input
      type="search"
      placeholder="Enter facility name"
      className="w-3/6 dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
      value={search}
    />
  )
}
