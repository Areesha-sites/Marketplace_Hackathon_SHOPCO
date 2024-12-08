"use client";
import Image from "next/image";
const Cart = () => {
  return (
    <section>
      <h1 className="absolute top-[204px] left-[100px] text-black font-bold font-integral  text-[40px]">
        Your cart
      </h1>
      <div className="w-[715px] h-[508px] absolute left-[100px] top-[276px] py-[20px] px-[24px] rounded-[20px] border-[1px] border-black/10 flex flex-col gap-[24px]">
        <div className="w-[667px]  h-[124px] flex gap-[16px] ">
          <div className="w-[124px] h-[124px] rounded-[8.66px] bg-bgLightGrayColor">
            <Image
              src="/image 8 (1).svg"
              alt="shirt"
              height={187}
              width={125}
              className="h-[124px] w-[124px] absolute rounded-[8.66px]"
            />
          </div>
          <div className="w-[527px] h-[124px] flex justify-between">
            <div className="w-[227px] h-[118px] flex justify-between ">
              <div className="w-[227px] h-[71px] flex flex-col gap-[2px]">
                <h1 className="text-[20px] font-bold text-black font-satoshi whitespace-nowrap">
                  Gradient Graphic T-shirt
                </h1>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal ">
                    Size: <span className="text-black opacity-50"> Large</span>
                  </p>
                </div>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal whitespace-nowrap">
                    Color: <span className="text-black opacity-50"> White</span>
                  </p>
                </div>
                <h2 className="text-[24px] font-satoshi font-bold text-black mt-2">
                  $145
                </h2>
              </div>
            </div>
            <div className="w-[225px] h-[124px] flex justify-between">
              <div className="w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-bgLightGrayColor relative left-[145px] top-[83px] flex gap-[20px]">
                <Image
                  src="/decrease.svg"
                  alt="decrease"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
                <span className="text-[14px] text-black font-bold">1</span>
                <Image
                  src="/increase.svg"
                  alt="increase"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
              </div>
            </div>
            <Image
              src="/Frame (4).svg"
              alt="delete"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <div className="w-[667px] border-b-[1px] border-black/10"></div>
        <div className="w-[667px]  h-[124px] flex gap-[16px] ">
          <div className="w-[124px] h-[124px] rounded-[8.66px] bg-bgLightGrayColor">
            <Image
              src="/new-arrival3.svg"
              alt="shirt"
              height={187}
              width={125}
              className="h-[124px] w-[124px] absolute rounded-[8.66px]"
            />
          </div>
          <div className="w-[527px] h-[124px] flex justify-between">
            <div className="w-[227px] h-[118px] flex justify-between ">
              <div className="w-[227px] h-[71px] flex flex-col gap-[2px]">
                <h1 className="text-[20px] font-bold text-black font-satoshi whitespace-nowrap">
                  CHECKERED SHIRT
                </h1>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal ">
                    Size: <span className="text-black opacity-50"> Medium</span>
                  </p>
                </div>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal whitespace-nowrap">
                    Color: <span className="text-black opacity-50"> red</span>
                  </p>
                </div>
                <h2 className="text-[24px] font-satoshi font-bold text-black mt-2">
                  $180
                </h2>
              </div>
            </div>
            <div className="w-[225px] h-[124px] flex justify-between">
              <div className="w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-bgLightGrayColor relative left-[145px] top-[83px] flex gap-[20px]">
                <Image
                  src="/decrease.svg"
                  alt="decrease"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
                <span className="text-[14px] text-black font-bold">1</span>
                <Image
                  src="/increase.svg"
                  alt="increase"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
              </div>
            </div>

            <Image
              src="/Frame (4).svg"
              alt="delete"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <div className="w-[667px] border-b-[1px] border-black/10"></div>
        <div className="w-[667px]  h-[124px] flex gap-[16px] ">
          <div className="w-[124px] h-[124px] rounded-[8.66px] bg-bgLightGrayColor">
            <Image
              src="/new-arrival2.svg"
              alt="shirt"
              height={187}
              width={125}
              className="h-[124px] w-[124px] absolute rounded-[8.66px]"
            />
          </div>

          <div className="w-[527px] h-[124px] flex justify-between">
            <div className="w-[227px] h-[118px] flex justify-between ">
              <div className="w-[227px] h-[71px] flex flex-col gap-[2px]">
                <h1 className="text-[20px] font-bold text-black font-satoshi whitespace-nowrap">
                  SKINNY FIT JEANS
                </h1>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal ">
                    Size: <span className="text-black opacity-50"> Large</span>
                  </p>
                </div>
                <div className="w-[78px] h-[42px] flex flex-col gap-[4px]">
                  <p className="text-[14px] font-satoshi text-black font-normal whitespace-nowrap">
                    Color: <span className="text-black opacity-50"> blue</span>
                  </p>
                </div>
                <h2 className="text-[24px] font-satoshi font-bold text-black mt-2">
                  $240
                </h2>
              </div>
            </div>
            <div className="w-[225px] h-[124px] flex justify-between">
              <div className="w-[126px] h-[44px] py-[12px] px-[20px] rounded-[62px] bg-bgLightGrayColor relative left-[145px] top-[83px] flex gap-[20px]">
                <Image
                  src="/decrease.svg"
                  alt="decrease"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
                <span className="text-[14px] text-black font-bold">1</span>
                <Image
                  src="/increase.svg"
                  alt="increase"
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px] "
                />
              </div>
            </div>

            <Image
              src="/Frame (4).svg"
              alt="delete"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>

      <div className="w-[505px] h-[458px] absolute top-[276px] left-[835px] py-[20px] px-[24px] rounded-[20px] border-[1px] border-black/10 flex flex-col gap-[24px]">
        <h2 className="font-satoshi text-[24px] font-bold text-black">
          Order Summary{" "}
        </h2>

        <div className="w-[457px] h-[193px] flex flex-col gap-[20px] ">
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
              Subtotal
            </p>
            <p className="text-[20px] font-bold font-satoshi text-black">
              $565
            </p>
          </div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
              Discount (-20%)
            </p>
            <p className="text-[20px] font-bold font-satoshi text-redTextOfferColor">
              -$113
            </p>
          </div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
              Delivery Fee
            </p>
            <p className="text-[20px] font-bold font-satoshi text-black">$15</p>
          </div>
          <div className="w-[457px] border-b-[1px] border-black/10"></div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black">
              Total
            </p>
            <p className="text-[24px] font-bold font-satoshi text-black">
              $467
            </p>
          </div>
        </div>

        <div className="w-[457px] h-[48px] flex gap-[12px]">
          <div className="w-[326px] h-[48px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px]">
            <Image
              src="/tag-icon.svg"
              alt="tag-icon"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <p className="text-[16px] font-satoshi font-normal text-black/40">
              Add promo code
            </p>
          </div>

          <button className="py-[12px] px-[16px] bg-black text-white rounded-[62px] font-satoshi text-[16px] font-medium w-[119px] h-[48px]">
            Apply
          </button>
        </div>

        <div className="w-[457px] h-[60px] py-[16px] px-[56px] rounded-[62px] bg-black text-white flex items-center gap-[12px] justify-center">
          <span className="text-[16px] font-satoshi font-medium">
            Go to Checkout
          </span>
          <Image
            src="/arrow-down-bold 1.svg"
            alt="right-arrow"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
