import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import Image from "next/image";
import { HiPencil } from "react-icons/hi2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ProductDetailsTable = () => {
  return (
    <>
      <div>
      <ScrollArea className="w-[240px] sm:w-[320px] whitespace-nowrap rounded-md border mx-auto">
          <div className="">
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                  <div>
                    <h5 className="block text-[14px] md:text-xl antialiased font-semibold leading-snug text-blue-gray-900 font-integralCf tracking-wider">
                      Recent Orders{" "}
                    </h5>
                    <p className="block mt-1 font-satoshi text-[12px] md:text-base antialiased font-normal leading-relaxed text-gray-700">
                      View your latest fashion purchases here.
                    </p>
                  </div>
                  <div className="flex w-full gap-2 shrink-0 md:w-max">
                    <div className="w-full md:w-72">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                          <IoIosSearch className="w-5 h-5 text-black/50" />
                        </div>
                        <input
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-black/20 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="before:content[' '] font-satoshi after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black/20 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black/20 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:!border-black/20 peer-focus:after:border-t-1 peer-focus:after:border-r-1 peer-focus:after:!border-black/20 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 border-black/20">
                          Search
                        </label>
                      </div>
                    </div>
                    <button
                      className="flex select-none items-center gap-3 rounded-lg bg-black py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <RiDownloadLine className="w-4 h-4 text-white" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 px-0 overflow-scroll">
                <table className="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Order ID
                        </p>
                      </th>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Order Date
                        </p>
                      </th>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Total Amount
                        </p>
                      </th>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Order Status
                        </p>
                      </th>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Shipping Address
                        </p>
                      </th>
                      <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          {/* <Image
                      height={48}
                      width={48}
                        src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                        alt="Spotify"
                        className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      /> */}
                          <p className="block font-satoshiBold text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Spotify
                          </p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $2,500
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 3:00pm
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span className="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <Image
                              height={100}
                              width={100}
                              src="/Visa (1).svg"
                              alt="visa"
                              className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              visa 1234
                            </p>
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <HiPencil className="h-4 w-4 text-black" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          {/* <img
                        src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
                        alt="Amazon"
                        className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      /> */}
                          <p className="block font-satoshiBold text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Amazon
                          </p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $5,000
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 1:00pm
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                          <div className="relative grid items-center px-2 py-1 font-satoshi text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span className="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <Image
                              width={100}
                              height={100}
                              src="/Mastercard.svg"
                              alt="master-card"
                              className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              master card 1234
                            </p>
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <HiPencil className="h-4 w-4 text-black" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          {/* <Image
                      height={48}
                      width={48}
                        src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
                        alt="Pinterest"
                        className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      /> */}
                          <p className="block font-satoshiBold text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Pinterest
                          </p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $3,400
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Mon 7:40pm
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                          <div className="relative grid items-center px-2 py-1 font-satoshi text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-amber-500/20 text-amber-900">
                            <span className="">pending</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <Image
                              height={100}
                              width={100}
                              src="/Paypal (1).svg"
                              alt="master-card"
                              className="relative inline-block h-full w-full !rounded-none object-contain object-center p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              Paypal card 1234
                            </p>
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <HiPencil className="h-4 w-4 text-black" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          {/* <img
                        src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
                        alt="Google"
                        className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      /> */}
                          <p className="block font-satoshiBold text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Google
                          </p>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $1,000
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 5:00pm
                        </p>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                          <div className="relative grid items-center px-2 py-1 font-satoshi text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                            <span className="">paid</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <Image
                              height={100}
                              width={100}
                              src="/ Pay (1).svg"
                              alt="visa"
                              className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              Pay 1234
                            </p>
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-satoshi text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <HiPencil className="h-4 w-4 text-black" />
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {/* <img
                        src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
                        alt="netflix"
                        className="relative inline-block h-12 w-12 !rounded-full  border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                      /> */}
                          <p className="block font-satoshi text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            netflix
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          $14,000
                        </p>
                      </td>
                      <td className="p-4">
                        <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Wed 3:30am
                        </p>
                      </td>
                      <td className="p-4">
                        <div className="w-max">
                          <div className="relative grid items-center px-2 py-1 font-satoshi text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20">
                            <span className="">cancelled</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                            <Image
                              height={100}
                              width={100}
                              src="/G Pay.svg"
                              alt="visa"
                              className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                              Pay 1234
                            </p>
                            <p className="block font-satoshi text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                              06/2026
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <HiPencil className="h-4 w-4 text-black" />
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
                <button
                  className="select-none rounded-lg hover:bg-white bg-black text-white hover:text-black font-satoshi transition-all duration-300 ease-linear border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase  "
                  type="button"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      1
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      2
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      3
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      ...
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      8
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      9
                    </span>
                  </button>
                  <button
                    className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 hover:bg-black transition-all duration-300 hover:text-white cursor-pointer"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      10
                    </span>
                  </button>
                </div>
                <button
                  className="select-none rounded-lg hover:bg-white bg-black text-white hover:text-black font-satoshi transition-all duration-300 ease-linear border border-gray-900 py-2 px-4 text-center align-middle text-xs font-bold uppercase  "
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>

            {/* {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))} */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default ProductDetailsTable;
