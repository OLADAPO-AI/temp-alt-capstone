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
import { statesInNigeria } from '@/utils/links'

const AllState: React.FC = ({}) => {
  return (
    <Select>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="--All State--" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>States in Nigeria</SelectLabel>
          {statesInNigeria.map((state) => (
            <SelectItem key={state} value={state}>
              {state}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default AllState
