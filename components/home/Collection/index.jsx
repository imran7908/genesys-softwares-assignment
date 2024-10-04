import { montserrat } from "@/utils/fonts";
import Image from "next/image";

export function Collection() {
  return (
    <section
      className={`${montserrat.className} flex flex-col space-y-[24px] md:space-y-0 items-center md:items-start md:flex-row-reverse bg-black-3 px-[16px] md:px-[32px] lg:px-[64px] xl:px-[120px] py-[32px] md:py-[48px] lg:py-[60px] xl:py-[72px] 2xl:py-[90px] leading-none`}
    >
      <div className="relative w-full max-w-[500px] lg:max-w-[798px] aspect-[798/588] md:w-1/2 md:-mt-[32px] xl:-mt-[48px]">
        <Image src="/assets/images/books.png" fill alt="Books" />
      </div>

      <div className="flex flex-col uppercase space-y-2 xl:space-y-3 2xl:space-y-6 w-[80%] md:w-1/2">
        <h3 className="text-white font-medium text-[20px] md:text-[28px] lg:text-[36px] 2xl:text-[49px]">
          Patrick Bet-David's
        </h3>
        <h2 className="text-[#DE2A2F] font-bold text-[26px] md:text-[36px] lg:text-[44px] xl:text-[56px] 2xl:text-[70px]">
          Signed
        </h2>
        <h2 className="text-[#DE2A2F] font-bold text-[26px] md:text-[36px] lg:text-[44px] xl:text-[56px] 2xl:text-[70px] pb-4">
          Collection
        </h2>
        <button className="rounded-xl flex items-center gap-2 uppercase px-[24px] py-[16px] bg-white  text-[12px] xl:text-[16px] w-fit font-medium">
          <span>Shop Now</span>
          <Image
            src="/assets/icons/right-arrow.svg"
            width={20}
            height={14}
            alt="Right Arrow"
          />
        </button>
        <div className="relative w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[754px] aspect-[754/223]">
          <Image src="/assets/images/pat-signature.png" fill alt="Books" />
        </div>
      </div>
    </section>
  );
}
