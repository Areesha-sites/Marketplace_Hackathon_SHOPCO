import React from "react";

const Faqs = () => {
  return (
    <>
      <section className="text-black min-h-screen md:py-7 ">
        <div className="container flex flex-col md:gap-y-[40px] justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-[20px] font-bold text-center md sm:text-[25px] md:text-[37px] tracking-wider ">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none text-left cursor-pointer focus:underline font-satoshi text-[14px] md:text-[16px]">
                How can I order clothes on shop.co?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Ordering clothes on shop.co is easy! Here is a quick guide:
                  <br />
                  1. Browse our extensive collection of clothing by category,
                  brand, or style.
                  <br />
                  2. Once you find an item you love, click on it to view details
                  like size charts, materials, and care instructions.
                  <br />
                  3. Choose your desired size and color (if applicable) and add
                  the item to your cart.
                  <br />
                  4. When you are finished shopping, proceed to checkout. You can
                  create an account for faster future purchases or checkout as a
                  guest.
                  <br />
                  5. Enter your shipping and billing information.
                  <br />
                  6. Choose your preferred shipping method.
                  <br />
                  7. Review your order details and select your payment method
                  (we accept various options like credit cards, debit cards, and
                  net banking).
                  <br />
                  8. Place your order! You will receive a confirmation email with
                  tracking information once your order is shipped.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-left text-[14px] md:text-[16px] cursor-pointer focus:underline font-satoshi">
                What payment methods do you accept?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  We offer a variety of convenient payment options to make your
                  shopping experience smooth:
                  <br />
                  - Credit cards (Visa, Mastercard, etc.)
                  <br />
                  - Debit cards
                  <br />
                  - Net banking
                  <br />- Mobile wallet payments (depending on your region)
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                How long does shipping take?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Shipping times can vary depending on your location and the
                  shipping method you choose. Here is a general guideline:
                  <br />
                  - Standard shipping within India typically takes 3-7 business
                  days.
                  <br />
                  - Expedited shipping options may be available for faster
                  delivery (check at checkout).
                  <br />
                  You will receive a tracking number with your order confirmation
                  email so you can follow your packages progress.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                Can I return or exchange a clothing item?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Yes, we understand that sometimes clothes might not fit
                  perfectly or meet your expectations. Here is our return and
                  exchange policy:
                  <br />
                  - You can initiate a return or exchange within 30 days of
                  receiving your order.
                  <br />
                  - The item(s) must be unworn, unwashed, and with original tags
                  attached.
                  <br />- Please visit our Returns & Exchanges page (link to be
                  provided) for detailed instructions and to initiate the
                  process.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[14px] md:text-[16px] text-left font-satoshi outline-none cursor-pointer focus:underline">
                Do you offer international shipping?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Currently, we offer shipping within India. We are exploring
                  options to expand our shipping reach to international
                  locations in the future.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 text-[14px] md:text-[16px] text-left font-satoshi outline-none cursor-pointer focus:underline">
                What is your customer support contact?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  For any questions or assistance, you can contact our customer
                  support team:
                  <br />
                  - Phone: [Your Customer Support Phone Number] (available
                  during business hours)
                  <br />- Email:{" "}
                  <a href="mailto:support@shop.co" className="underline">
                    support@shop.co
                  </a>
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                What are your terms and conditions?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  You can find our detailed terms and conditions by visiting our
                  <a href="/terms-and-conditions" className="underline">
                    Terms of Service
                  </a>
                  page on our website. It includes information about our
                  policies, user guidelines, and more.
                </p>
              </div>
            </details>
          </div>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer text-left focus:underline font-satoshi text-[14px] md:text-[16px]">
                How can I order clothes on shop.co?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Ordering clothes on shop.co is easy! Here is a quick guide:
                  <br />
                  1. Browse our extensive collection of clothing by category,
                  brand, or style.
                  <br />
                  2. Once you find an item you love, click on it to view details
                  like size charts, materials, and care instructions.
                  <br />
                  3. Choose your desired size and color (if applicable) and add
                  the item to your cart.
                  <br />
                  4. When you are finished shopping, proceed to checkout. You can
                  create an account for faster future purchases or checkout as a
                  guest.
                  <br />
                  5. Enter your shipping and billing information.
                  <br />
                  6. Choose your preferred shipping method.
                  <br />
                  7. Review your order details and select your payment method
                  (we accept various options like credit cards, debit cards, and
                  net banking).
                  <br />
                  8. Place your order! You will receive a confirmation email with
                  tracking information once your order is shipped.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none text-left text-[14px] md:text-[16px] cursor-pointer focus:underline font-satoshi">
                What payment methods do you accept?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  We offer a variety of convenient payment options to make your
                  shopping experience smooth:
                  <br />
                  - Credit cards (Visa, Mastercard, etc.)
                  <br />
                  - Debit cards
                  <br />
                  - Net banking
                  <br />- Mobile wallet payments (depending on your region)
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                How long does shipping take?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Shipping times can vary depending on your location and the
                  shipping method you choose. Here is a general guideline:
                  <br />
                  - Standard shipping within India typically takes 3-7 business
                  days.
                  <br />
                  - Expedited shipping options may be available for faster
                  delivery (check at checkout).
                  <br />
                  You will receive a tracking number with your order confirmation
                  email so you can follow your packages progress.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                Can I return or exchange a clothing item?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Yes, we understand that sometimes clothes might not fit
                  perfectly or meet your expectations. Here is our return and
                  exchange policy:
                  <br />
                  - You can initiate a return or exchange within 30 days of
                  receiving your order.
                  <br />
                  - The item(s) must be unworn, unwashed, and with original tags
                  attached.
                  <br />- Please visit our Returns & Exchanges page (link to be
                  provided) for detailed instructions and to initiate the
                  process.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 text-[14px] md:text-[16px] text-left font-satoshi outline-none cursor-pointer focus:underline">
                Do you offer international shipping?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px]">
                  Currently, we offer shipping within India. We are exploring
                  options to expand our shipping reach to international
                  locations in the future.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 text-[14px] md:text-[16px] text-left font-satoshi outline-none cursor-pointer focus:underline">
                What is your customer support contact?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  For any questions or assistance, you can contact our customer
                  support team:
                  <br />
                  - Phone [Your Customer Support Phone Number] (available
                  during business hours)
                  <br />- Email:{" "}
                  <a href="mailto:support@shop.co" className="underline">
                    support@shop.co
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                What are your terms and conditions?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  You can find our detailed terms and conditions by visiting our
                  <a href="/terms-and-conditions" className="underline">
                    Terms of Service
                  </a>
                  page on our website. It includes information about our
                  policies, user guidelines, and more.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                What is your return policy for defective items?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  We understand that sometimes items may be defective. If you
                  receive a defective item, please contact our customer support
                  team within 30 days of receiving your order. We will be happy
                  to offer you a full refund or replacement.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                How can I track my order?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  You can track your order by logging into your account on our
                  website and visiting the My Orders section. You will also
                  receive a shipping confirmation email with a tracking number
                  once your order has shipped.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                What is your price match policy?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  We currently do not offer a price match policy. However, we
                  strive to offer competitive prices on all of our products.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                Do you offer gift cards?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  Yes, we do offer gift cards! You can purchase gift cards in
                  various denominations on our website.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 font-satoshi text-left text-[14px] md:text-[16px] outline-none cursor-pointer focus:underline">
                How can I care for my clothes?
              </summary>
              <div className="px-4 pb-4">
                <p className="font-satoshi text-[14px] md:text-[16px] text-left">
                  We recommend following the care instructions on the label of
                  each garment. You can also find general clothing care tips on
                  our website.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
