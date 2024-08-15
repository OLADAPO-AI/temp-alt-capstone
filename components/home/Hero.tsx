import Link from 'next/link'
import { Button } from '../ui/button'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-3xl tracking-tight sm:text-5xl ">
          Find and Share Hospitals Near You
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Carefinder helps you easily find, export, and share information about
          hospitals in Nigeria. Simplify your search for healthcare and ensure
          access to the best options for you and others.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/hospitals">Find Hospitals</Link>
        </Button>
      </div>
      <div className="z-[-100px]">
        <HeroCarousel />
      </div>
    </section>
  )
}

export default Hero
