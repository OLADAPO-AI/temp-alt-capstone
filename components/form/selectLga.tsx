import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectLga() {
  return (
    <Select>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="--Select Ownership--" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="grapes">Private</SelectItem>
          <SelectItem value="pineapple">Public</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SelectLga
