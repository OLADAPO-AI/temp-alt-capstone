import React from 'react'

function LocationPage() {
  return (
    <div className=" flex flex-col align-middle w-full items-center ">
      <div className=" w-full p-3 bg-lime-300 text-black h-auto  mb-5 rounded-md">
        <h3 role="alert">
          Thank you for your interest in Carefinder data, kindly sign our guest
          form to download the data
        </h3>
      </div>
      <form action="" className="flex flex-col mt-[30px] w-5/6 ">
        <hr className="border-t-2 border-gray-500" />
        {/* firstname field */}
        <div className="flex flex-row align-middle p-3 items-center w-5/6 h-[60px] gap-2">
          <label
            htmlFor="credit"
            className="font-[400] text-[14px] w-1/4 leading-[16.8px]"
          >
            First Name
          </label>
          <input
            type="text"
            name="first name"
            id="first name"
            placeholder="first Name"
            className="border-2  w-full p-2 font-[400] text-[14px] leading-[16.8px] rounded"
          />
        </div>
        {/* lastname field */}
        <div className="flex flex-row align-middle p-3 items-center w-5/6 h-[60px] gap-2">
          <label
            htmlFor="credit"
            className="font-[400] text-[14px] w-1/4 leading-[16.8px]"
          >
            Last Name
          </label>
          <input
            type="text"
            name="last name"
            id="first name"
            placeholder="first Name"
            className="border-2  w-full p-2 font-[400] text-[14px] leading-[16.8px] rounded"
          />
        </div>
        {/* Email address field */}
        <div className="flex flex-row align-middle p-3 items-center w-5/6 h-[60px] gap-2">
          <label
            htmlFor="credit"
            className="font-[400] text-[14px] w-1/4 leading-[16.8px]"
          >
            e-Mail Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border-2  w-full p-2 font-[400] text-[14px] leading-[16.8px] rounded"
          />
        </div>
        {/* Organisation field */}
        <div className="flex flex-row align-middle p-3 items-center w-5/6 h-[60px] gap-2">
          <label
            htmlFor="credit"
            className="font-[400] text-[14px] w-1/4 leading-[16.8px]"
          >
            Your Organisation
          </label>
          <input
            type="text"
            name="organisation"
            id="organisation"
            placeholder="Enter your organisation"
            className="border-2  w-full p-2 font-[400] text-[14px] leading-[16.8px] rounded"
          />
        </div>

        <div className="flex flex-row align-middle p-3 mt-4 items-center w-5/6 h-[60px] gap-2">
          <label
            htmlFor="organisation"
            className="font-[400] text-[14px] w-1/4 leading-[16.8px]"
          >
            Purpose
          </label>
          <textarea
            name="purpose"
            id="purpose"
            placeholder=""
            className="border-2 w-full p-2 font-[400] text-[14px] leading-[16.8px] rounded"
            rows={4}
          />
        </div>

        {/* Button */}
        <div className="mx-auto mt-[30px]">
          <button
            type="submit"
            className="w-[483px] h-[52px] bg-[#038E7D] text-neutral-100 rounded-md hover:bg-neutral-100 hover:text-[#038e7d] transition ease-in duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default LocationPage
