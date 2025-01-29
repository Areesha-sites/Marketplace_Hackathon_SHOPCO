"use client";
import Footer from "../Components/Footer";
import Link from "next/link";
import KidCards from "../Components/kidsComp/KidsCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const Kids: React.FC = () => {
  return (
    <>
      <div       
      >
        <section>
          <div className="xl:w-[1100px] xxl:w-[1240px] absolute md:top-[100px] md:left-[20px] lg:left-[50px] xl:left-[100px] border-b-[1px] border-black/10 top-[98px] w-full left-0 mx-auto lg:w-[930px] md:w-[710px] lg:top-[120px]"></div>
          <div className="mt-[120px] ml-5 lg:ml-12 lg:mt-[140px] xl:ml-[100px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href="/" className="font-satoshi">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <Link href="/kids" className="font-satoshi">
                      Kids
                    </Link>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between items-center w-full px-2 mx-auto">
            <div className="flex justify-between w-full ml-2 items-center gap-x-[40px] lg:ml-11">
              <h1 className=" md:text-[32px] text-[24px] font-bold text-black font-satoshiBold lg:ml-[340px] xl:ml-[350px] xl:mt-[40px] lg:mt-[30px]">
                Kids
              </h1>
              <div className=""></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mx-auto px-6">
            <div className="absolute md:top-[236px] lg:top-[263px] xl:left-[400px] lg:left-[370px] top-[220px]">
              <KidCards />
            </div>
          </div>
          <div className="flex justify-center items-center w-full mx-auto mt-[1500px]">
            {/* <div className="lg:w-[600px] md:w-[700px] w-full mx-auto xxl:w-[925px] xl:w-[770px] border-b-[1px] border-black/10 "></div> */}
          </div>
        </section>
      </div>
      <div className="absolute md:top-[1830px] lg:top-[2700px] xxl:top-[1800px] xl:top-[1750px] top-[1800px] sm:top-[2000px] z-20">
        <Footer />
      </div>
    </>
  );
};

export default Kids;
