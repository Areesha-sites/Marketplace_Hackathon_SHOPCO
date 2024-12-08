import React from 'react'
import Image from 'next/image'

const NewsLetter = () => {
  return (
    <div className='w-[1240px] h-[180px] absolute top-[3781px] left-[100px] rounded-[20px] flex justify-between pt-[36px] pr-[64px] pb-[36px] pl-[64px] bg-[#000000]'>
        <span className='w-[551px] h-[94px] font-integralcf font-bol text-[40px] leading-[45px] text-[#ffffff]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>

        <div className='w-[349px] h-[108px] flex flex-col gap-[14px]'>
            <div className='w-[349px] h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] flex gap-[12px] bg-[#ffffff]'>
                <Image src="/Frame.svg" alt="email.img" height={20} width={20} className="w-[24px] h-[24px]"/>
            <input type="text" placeholder='Enter your email address' className=' font-satoshi font-normal text-[16px] leading-[21.6px] text-[#000000] opacity-[40%] border-none outline-none' />
            </div>

            <div className='w-[349px] h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]  bg-[#ffffff]'>
                <span className=' font-satoshi font-medium text-[16px] leading-[21.6px] text-[#000000] text-center '>Subscribe to Newsletter</span>
                </div>


        </div>
    </div>
  )
}

export default NewsLetter