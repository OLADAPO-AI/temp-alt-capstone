'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

type FlyoutLinkProps = {
  children: React.ReactNode
  href: string
  FlyoutContent: React.ComponentType
}

const FindHospital: React.FC = () => {
  return (
    <div className="">
      <FlyoutLink href="/hospitals" FlyoutContent={PricingContent}>
        <h2 className=" text-primary text-base font-bold">Find an Hospital</h2>
      </FlyoutLink>
    </div>
  )
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const showFlyout = FlyoutContent && open

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PricingContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Doctors':
        return (
          <div>
            <form action="">
              <input
                type="text"
                name="doctors"
                placeholder="Search Doctors"
                className=" bg-slate-200 p-2 rounded-md w-full"
              />
              <Button asChild size="lg" className="mt-2 w-full">
                <Link href="/products">Find Doctors</Link>
              </Button>
            </form>
          </div>
        )
      case 'Hospitals':
        return (
          <div>
            <form action="">
              <input
                type="text"
                name="hospitals"
                placeholder="Search Hospitals"
                className=" bg-slate-200 p-2 rounded-md w-full"
              />
              <Button asChild size="lg" className="mt-2 w-full">
                <Link href="/products">Find Hospitals</Link>
              </Button>
            </form>
          </div>
        )
      case 'All':
      default:
        return (
          <div>
            <form action="">
              <input
                type="text"
                name="all"
                placeholder=" Search all"
                className=" bg-slate-200 p-2 rounded-md w-full"
              />
              <Button asChild size="lg" className="mt-2 w-full">
                <Link href="/products">All</Link>
              </Button>
            </form>
          </div>
        )
    }
  }
  return (
    <div className="w-64 bg-white p-6 shadow-xl ">
      <div className="mb-3 space-y-3 ">
        <h3 className="font-semibold">I want to search</h3>
        <div className="flex flex-row w-5/6 justify-between ">
          <a
            href="#"
            className={`block text-sm hover:underline ${
              selectedCategory === 'All' ? 'font-bold text-primary' : ''
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </a>
          <a
            href="#"
            className={`block text-sm hover:underline ${
              selectedCategory === 'Doctors' ? 'font-bold text-primary' : ''
            }`}
            onClick={() => setSelectedCategory('Doctors')}
          >
            Doctors
          </a>
          <a
            href="#"
            className={`block text-sm hover:underline ${
              selectedCategory === 'Hospitals' ? 'font-bold text-primary' : ''
            }`}
            onClick={() => setSelectedCategory('Hospitals')}
          >
            Hospitals
          </a>
        </div>

        <div>{renderContent()}</div>
      </div>
    </div>
  )
}

export default FindHospital
