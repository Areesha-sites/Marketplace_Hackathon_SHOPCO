"use client";
import Image from "next/image";
import Footer from "../Footer";
const Cart = () => {
  return (
    <>
      <section>
        <div className="md:w-[1240px] xxl:w-[1240px] xl:w-[1100px] w-[358px] absolute md:top-[134px] top-[98px] left-[16px] md:left-[100px] border-b-[1px] border-black/10"></div>
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="md:w-[106px] w-[89px] h-[22px] absolute md:top-[158px] md:left-[100px] left-[16px] flex gap-[12px] items-center top-[118px]"
        >
          <span className="font-satoshi text-[16px] font-normal text-black/60">
            Home
          </span>
          <Image
            src="/Frame (5).svg"
            alt="icon"
            height={16}
            width={16}
            className="h-[16px] w-[16px]"
          />
          <span className="font-satoshi text-[16px] font-normal text-black">
            Cart
          </span>
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="absolute md:top-[204px] left-[16px] md:left-[100px] text-black font-black uppercase md:text-[40px] text-[32px] top-[145px] font-integralCf"
        >
          Your cart
        </h1>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-[715px] xxl:w-[715px] xl:w-[617px] w-[358px] h-[389px] md:h-[508px] absolute md:left-[100px] left-[16px] md:top-[276px] top-[203px] md:py-[20px] md:px-[24px] p-[14px] rounded-[20px] border-[1px] border-black/10 flex flex-col md:gap-[24px] gap-[16px]"
        >
          <div className="md:w-[667px] w-[330px]  md:h-[124px] h-[99px] flex gap-[14px] md:gap-[16px] ">
            <div className="w-[124px] h-[124px] rounded-[8.66px] bg-bgLightGrayColor">
              <Image
                src="/image 8 (1).svg"
                alt="shirt"
                height={187}
                width={125}
                className="md:h-[124px] md:w-[124px] h-[99px] w-[99px] absolute rounded-[8.66px]"
              />
            </div>
            <div className="md:w-[527px] xxl:w-[527px] xl:w-[10px] md:h-[124px] flex justify-between">
              <div className="md:w-[227px] md:h-[118px] flex justify-between ">
                <div className="md:w-[227px] md:h-[71px] w-[217px] h-[57px] flex flex-col gap-[2px] relative left-[100px] md:static">
                  <h1 className="md:text-[20px] text-[16px] md:font-bold font-medium text-black font-satoshiBold whitespace-nowrap ">
                    Gradient Graphic T-shirt
                  </h1>
                  <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal ">
                      Size:{" "}
                      <span className="text-black opacity-50 font-satoshi">
                        {" "}
                        Large
                      </span>
                    </p>
                  </div>
                  <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal whitespace-nowrap">
                      Color:{" "}
                      <span className="text-black opacity-50 font-satoshi">
                        {" "}
                        White
                      </span>
                    </p>
                  </div>
                  <h2 className="md:text-[24px] text-[20px] font-satoshi font-bold text-black mt-2">
                    $145
                  </h2>
                </div>
                <Image
                  src="/Frame (4).svg"
                  alt="delete"
                  height={24}
                  width={24}
                  className="h-[16px] w-[16px] md:w-[24px] md:h-[24px] md:left-[280px] xxl:left-[280px] xl:left-[190px] relative left-[105px] top-[3px]"
                />
              </div>
              <div className="md:w-[225px] md:h-[124px] flex justify-between">
                <div className="md:w-[126px] md:h-[44px] md:py-[12px] md:px-[20px] rounded-[62px] bg-bgLightGrayColor relative md:left-[110px] xxl:left-[110px] xl:left-[85px] md:top-[83px] flex md:gap-[20px] h-[31px] w-[105px] py-[14px] px-[20px] top-[75px] justify-center items-center gap-[12px]">
                  <Image
                    src="/decrease.svg"
                    alt="decrease"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px] "
                  />
                  <span className="text-[14px] font-satoshi text-black font-bold">
                    1
                  </span>
                  <Image
                    src="/increase.svg"
                    alt="increase"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[667px] xxl:w-[667px] xl:w-[570px] w-[330px]  border-b-[1px] border-black/10"></div>
          <div className="md:w-[667px]  md:h-[124px] flex gap-[16px] ">
            <div className="md:w-[124px] md:h-[124px] rounded-[8.66px] bg-bgLightGrayColor">
              <Image
                src="/new-arrival3.svg"
                alt="shirt"
                height={187}
                width={125}
                className="md:h-[124px] md:w-[124px] h-[99px] w-[99px]  absolute rounded-[8.66px]"
              />
            </div>
            <div className="md:w-[527px] md:h-[124px] w-[330px] h-[99px] flex justify-between">
              <div className="md:w-[227px] md:h-[118px] flex justify-between ">
                <div className="md:w-[227px] md:h-[71px] flex flex-col gap-[2px] relative left-[100px] md:static">
                  <h1 className="md:text-[20px] text-[14px] md:font-bold font-medium text-black whitespace-nowrap font-satoshiBold">
                    CHECKERED SHIRT
                  </h1>
                  <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal whitespace-nowrap">
                      Size:{" "}
                      <span className="text-black opacity-50 font-satoshi">
                        {" "}
                        Medium
                      </span>
                    </p>
                  </div>
                  <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal whitespace-nowrap">
                      Color: <span className="text-black opacity-50"> red</span>
                    </p>
                  </div>
                  <h2 className="md:text-[24px] text-[20px] font-satoshi font-bold text-black mt-2">
                    $180
                  </h2>
                </div>
                <Image
                  src="/Frame (4).svg"
                  alt="delete"
                  height={24}
                  width={24}
                  className="h-[16px] w-[16px] md:w-[24px] md:h-[24px] md:left-[300px] xxl:left-[300px] xl:left-[214px] relative
                 top-[3px] left-[180px]"
                />
              </div>
              <div className="w-[225px] h-[124px] flex justify-between">
                <div className="md:w-[126px] md:h-[44px] md:py-[12px] md:px-[20px] rounded-[62px] bg-bgLightGrayColor relative md:left-[110px] xxl:left-[110px] xl:left-[10px] md:top-[83px] flex md:gap-[20px] h-[31px] w-[105px] py-[14px] px-[20px] top-[75px] justify-center items-center gap-[12px] left-[90px]">
                  <Image
                    src="/decrease.svg"
                    alt="decrease"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px] "
                  />
                  <span className="text-[14px] text-black font-bold font-satoshi">
                    1
                  </span>
                  <Image
                    src="/increase.svg"
                    alt="increase"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[667px] xxl:w-[667px] xl:w-[570px] w-[330px] border-b-[1px] border-black/10"></div>
          <div className="md:w-[667px]  md:h-[124px] flex gap-[16px] ">
            <div className="md:w-[124px] md:h-[124px] h-[99px] w-[99px] rounded-[8.66px] bg-bgLightGrayColor">
              <Image
                src="/new-arrival2.svg"
                alt="shirt"
                height={187}
                width={125}
                className="md:h-[124px] md:w-[124px] h-[99px] w-[99px] absolute rounded-[8.66px]"
              />
            </div>
            <div className="md:w-[527px] md:h-[124px] flex justify-between">
              <div className="md:w-[227px] md:h-[118px] flex justify-between ">
                <div className="md:w-[227px] md:h-[71px] flex flex-col gap-[2px] relative left-[100px]  md:left-[160px] md:absolute">
                  <h1 className="md:text-[20px] md:font-bold font-medium text-[14px] text-black font-satoshiBold   whitespace-nowrap">
                    SKINNY FIT JEANS
                  </h1>
                  <div className="md:w-[78px] md:h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal ">
                      Size:{" "}
                      <span className="text-black opacity-50 font-satoshi">
                        {" "}
                        Large
                      </span>
                    </p>
                  </div>
                  <div className="md:w-[78px] md:h-[42px] flex flex-col gap-[4px]">
                    <p className="md:text-[14px] text-[12px] font-satoshi text-black font-normal whitespace-nowrap">
                      Color:{" "}
                      <span className="text-black opacity-50 font-satoshi">
                        {" "}
                        blue
                      </span>
                    </p>
                  </div>
                  <h2 className="md:text-[24px] text-[20px] font-satoshi font-bold text-black mt-2">
                    $240
                  </h2>
                </div>
                <Image
                  src="/Frame (4).svg"
                  alt="delete"
                  height={24}
                  width={24}
                  className="h-[16px] w-[16px] md:w-[24px] md:h-[24px] md:left-[510px] xxl:left-[510px] xl:left-[415px] relative
                 top-[3px] left-[180px] "
                />
              </div>
              <div className="w-[225px] h-[124px] flex justify-between">
                <div className="md:w-[126px] md:h-[44px] md:py-[12px] md:px-[20px] rounded-[62px] bg-bgLightGrayColor relative md:left-[110px] xxl:left-[110px] xl:left-[10px] md:top-[80px] flex md:gap-[20px] h-[31px] w-[105px] py-[14px] px-[20px] top-[70px] justify-center items-center gap-[12px] left-[85px] ">
                  <Image
                    src="/decrease.svg"
                    alt="decrease"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px] "
                  />
                  <span className="text-[14px] text-black font-satoshi font-bold">
                    1
                  </span>
                  <Image
                    src="/increase.svg"
                    alt="increase"
                    height={20}
                    width={20}
                    className="md:h-[20px] md:w-[20px] h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-[505px] xxl:w-[505px] xl:w-[430px] md:h-[458px] absolute md:top-[276px] md:left-[835px] xxl:left-[835px] xl:left-[730px] md:py-[20px] md:px-[24px] rounded-[20px] border-[1px] border-black/10 flex flex-col md:gap-[24px] w-[358px] h-[390px] top-[612px] left-[16px] p-[20px] gap-[16px]"
        >
          <h2 className="font-satoshiBold md:text-[24px] text-[20px] font-bold text-black">
            Order Summary
          </h2>
          <div className="md:w-[457px] md:h-[193px] flex flex-col gap-[20px] w-[313px] h-[173px]  ">
            <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px] md:h-[27px] flex justify-between">
              <p className="md:text-[20px]  text-[16px] font-normal font-satoshi text-black/60">
                Subtotal
              </p>
              <p className="md:text-[20px] text-[16px] font-bold font-satoshi text-black">
                $565
              </p>
            </div>
            <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px]  md:h-[27px] flex justify-between">
              <p className="md:text-[20px]  text-[16px] font-normal font-satoshi text-black/60">
                Discount (-20%)
              </p>
              <p className="md:text-[20px] font-bold text-[16px] font-satoshi text-redTextOfferColor">
                -$113
              </p>
            </div>
            <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px]  md:h-[27px] flex justify-between">
              <p className="md:text-[20px] text-[16px] font-normal font-satoshi text-black/60">
                Delivery Fee
              </p>
              <p className="md:text-[20px] font-bold font-satoshi text-black">
                $15
              </p>
            </div>
            <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px] border-b-[1px] border-black/10"></div>
            <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px]  md:h-[27px] flex justify-between">
              <p className="md:text-[20px] font-normal font-satoshiBold text-black">
                Total
              </p>
              <p className="md:text-[24px] font-bold  text-[20px] font-satoshi text-black">
                $467
              </p>
            </div>
          </div>
          <div className="md:w-[457px]  md:h-[48px] flex gap-[12px]">
            <div className="md:w-[326px] xxl:w-[326px] xl:w-[248px] h-[48px] w-[218px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px]">
              <Image
                src="/tag-icon.svg"
                alt="tag-icon"
                height={24}
                width={24}
                className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]"
              />
              <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/40">
                Add promo code
              </p>
            </div>
            <button className="py-[12px] px-[16px] bg-black text-white rounded-[62px] font-satoshi md:text-[16px] text-[14px] font-medium md:w-[119px] h-[48px] w-[88px]">
              Apply
            </button>
          </div>
          <div className="md:w-[457px] xxl:w-[457px] xl:w-[380px] md:h-[60px] md:py-[16px] md:px-[56px] px-[54px] py-[14px] rounded-[62px] bg-black text-white flex items-center gap-[12px] justify-center">
            <span className="md:text-[16px] text-[14px] font-satoshi font-medium">
              Go to Checkout
            </span>
            <Image
              src="/arrow-down-bold 1.svg"
              alt="right-arrow"
              height={24}
              width={24}
              className="md:h-[24px] md:w-[24px] h-[20px] w-[20px]"
            />
          </div>
        </div>
      </section>

      <div className="absolute md:top-[954px] top-[1187px]">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
