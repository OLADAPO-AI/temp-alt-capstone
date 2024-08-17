import Container from '@/components/global/Container'
import Logo from './Logo'
import Service from './Service'
import FindHospital from './FindHospital'
import About from './About'

import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'

function Navbar() {
  return (
    <nav className="border-2">
      <Container className="flex flex-row justify-between sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 ">
        <Logo />
        <div className="md:flex gap-6 items-center z-50 hidden">
          <FindHospital />
          <About />
          <Service />
        </div>
        <div className="flex gap-4 items-center">
          <DarkMode />

          <LinksDropdown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
