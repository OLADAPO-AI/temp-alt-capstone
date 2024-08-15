// function NavSearch() {
//   return <div>NavSearch</div>
// }

// export default NavSearch
'use client'

import React, { useState } from 'react'

const Service: React.FC = () => {
  return (
    <div className="service-container">
      <h2 className="relative inline-block text-primary text-base font-bold cursor-pointer">
        DATA DOWNLOAD
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100"></span>
      </h2>
    </div>
  )
}

export default Service
