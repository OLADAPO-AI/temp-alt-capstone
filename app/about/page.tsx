import React from 'react'
const AboutPage: React.FC = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        About Carefinder
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Access to healthcare in Nigeria can be challenging. Carefinder is a
        simple tool designed to help users find, export, and share information
        about hospitals within their region. Our goal is to make healthcare more
        accessible by providing a user-friendly platform that connects you with
        the healthcare services you need.
      </p>
    </section>
  )
}

export default AboutPage
