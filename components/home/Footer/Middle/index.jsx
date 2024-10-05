import { montserrat } from "@/utils/fonts";
import { Links } from "./Links";
import Link from "next/link";
import Image from "next/image";
import { productLinks, serviceLinks } from "@/utils/data";

export function FooterMiddle() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 py-[48px] place-content-between gap-12">
      <div className="max-w-[517px] xl:col-span-2">
        <h5
          className={`${montserrat.className} mb-8 lg:text-[20px] xl:text-[24px] leading-[110%] tracking-[0.05em]`}
        >
          Subscribe and be the first to receive notifications about our upcoming
          releases and the latest news.
        </h5>
        <input
          type="text"
          placeholder="Enter your email"
          className="rounded-xl border border-[#FFFFFF80] bg-transparent w-full h-[43px] text-center mb-4"
        />
        <button className="rounded-xl border bg-white w-full h-[43px] text-center text-[#222222] font-medium">
          Subscribe
        </button>
      </div>

      <Links heading="Customer Services" links={serviceLinks} />

      <Links heading="Products" links={productLinks} />

      <div className="flex flex-col gap-4 text-[#FFFFFFCC]">
        <h5 className="font-medium text-[20px] text-white">Contact Us</h5>
        <p className="text-[#FFFFFFCC] text-[14px] lg:text-[16px]">
          Available between 8AM to 8PM. Ready to answer your questions.
        </p>
        <Link href="tel:013456789">
          <div className="flex cursor-pointer space-x-[0.5rem] text-[14px] lg:text-[16px]">
            <Image
              src="/assets/icons/phone.svg"
              width={19}
              height={18}
              alt="Phone"
            />
            <span>013456789</span>
          </div>
        </Link>
        <Link href="mailto:store@valuetainment.com">
          <div className="flex cursor-pointer space-x-[0.5rem] text-[14px] lg:text-[16px]">
            <Image
              src="/assets/icons/email.svg"
              width={19}
              height={18}
              alt="Email"
            />
            <span>store@valuetainment.com</span>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="#" target="_blank">
            <Image
              src="/assets/icons/facebook.svg"
              width={9}
              height={16}
              alt="Facebook"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/assets/icons/twitter.svg"
              width={17}
              height={14}
              alt="Twitter"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/assets/icons/linkedin.svg"
              width={17}
              height={16}
              alt="Linkedin"
            />
          </Link>
          <Link href="#" target="_blank">
            <Image
              src="/assets/icons/instagram.svg"
              width={19}
              height={18}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
