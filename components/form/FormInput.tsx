import { Label } from '../ui/label'
import { Input } from '../ui/input'

type FormInputProps = {
  Name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

function FormInput({
  label,
  Name,
  type,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={Name} className="capitalize">
        {label || Name}
      </Label>
      <Input
        id={Name}
        name={Name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default FormInput
