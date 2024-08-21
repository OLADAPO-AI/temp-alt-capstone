import { render, screen } from '@testing-library/react'
import Navbar from '@/components/ui/navbar/Navbar'

// Mocking child components
jest.mock(
  '@/components/global/Container',
  () =>
    ({ children, className }: any) =>
      <div className={className}>{children}</div>
)
jest.mock('@/components/ui/navbar/Logo', () => () => <div>Mocked Logo</div>)
jest.mock('@/components/ui/navbar/Service', () => () => (
  <div>Mocked Service</div>
))
jest.mock('@/components/ui/navbar/FindHospital', () => () => (
  <div>Mocked FindHospital</div>
))
jest.mock('@/components/ui/navbar/About', () => () => <div>Mocked About</div>)
jest.mock('@/components/ui/navbar/LinksDropdown', () => () => (
  <div>Mocked LinksDropdown</div>
))
jest.mock('@/components/ui/navbar/DarkMode', () => () => (
  <div>Mocked DarkMode</div>
))

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />)

    // Check if all the mocked components are rendered
    expect(screen.getByText('Mocked Logo')).toBeInTheDocument()
    expect(screen.getByText('Mocked FindHospital')).toBeInTheDocument()
    expect(screen.getByText('Mocked About')).toBeInTheDocument()
    expect(screen.getByText('Mocked Service')).toBeInTheDocument()
    expect(screen.getByText('Mocked LinksDropdown')).toBeInTheDocument()
    expect(screen.getByText('Mocked DarkMode')).toBeInTheDocument()
  })

  it('has the correct structure', () => {
    const { container } = render(<Navbar />)

    // Check if the navbar has a border and rounded corners
    expect(container.firstChild).toHaveClass('border-2')
    expect(container.firstChild).toHaveClass('rounded-lg')

    // Check if the container has the correct classes
    const containerDiv = screen.getByRole('navigation').firstChild
    expect(containerDiv).toHaveClass(
      'flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'
    )
  })
})
