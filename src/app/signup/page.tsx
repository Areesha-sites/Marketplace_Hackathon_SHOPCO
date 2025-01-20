import React from "react";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";
const Signup = () => {
  return (
    <>
      <div className="">
        <div className="border-b-[1px] border-black/10 w-full top-[100px] xxl:w-[1300px] xl:w-[1170px] lg:left-[50px] md:mx-auto absolute lg:top-[130px] left-0 lg:w-[920px]"></div>
        <div className=" bg-white w-full flex justify-center items-center">
          <section className="bg-BannerBgColor dark:bg-gray-900 flex justify-center items-center lg:mt-48 md:py-4 mt-36 md:mt-40">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <h1 className="flex items-center mb-6 text-[25px] font-extrabold uppercase font-integralCf text-gray-900 dark:text-white ">
                {" "}
                Shop.Co
              </h1>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
                  <h1 className="text-xl font-bold font-satoshi leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-satoshi text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-BannerBgColor border-none outline-none font-satoshi border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block font-satoshi mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-BannerBgColor border-none outline-none font-satoshi border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 font-satoshi text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-BannerBgColor border-none outline-none font-satoshi border-gray-300 text-gray-900 text-sm rounded-[5px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-BannerBgColor focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light font-satoshi text-gray-500 dark:text-gray-300"
                        >
                          I accept the{" "}
                          <Link
                            className="font-medium font-satoshi text-black hover:underline dark:text-primary-500"
                            href="#"
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-black outline-none hover:bg-black/85 border-none text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 font-satoshi dark:focus:ring-primary-800"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light font-satoshi text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <a
                        href="#"
                        className="font-medium font-satoshi text-black hover:underline dark:text-primary-500"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="absolute top-[1000px] md:top-[1200px]">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default Signup;
