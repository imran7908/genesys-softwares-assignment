import { montserrat } from "@/utils/fonts";
import Image from "next/image";

export function Quote() {
  return (
    <section
      className={`${montserrat.className} lg:h-[577px] bg-gradient-to-r from-red-1 to-red-2 px-[16px] flex flex-col lg:flex-row overflow-visible`}
    >
      <div className="w-full lg:w-[70%] pl-[16px] pt-[16px] md:pl-[28px] md:pt-[28px] lg:pl-[40px] lg:pt-[40px] xl:pl-[60px] xl:pt-[60px] 2xl:pl-[72px] 2xl:pt-[72px]">
        <div className="flex gap-1 md:gap-2 lg:gap-4 xl:gap-6 ">
          <div className="relative w-[24px] md:w-[36px] lg:w-[56px] xl:w-[72px] 2xl:w-[94px] aspect-[94/159]">
            <Image src="/assets/icons/quote-left.svg" fill alt="Quote Left" />
          </div>
          <div className="relative w-[24px] md:w-[36px] lg:w-[56px] xl:w-[72px] 2xl:w-[94px] aspect-[94/159]">
            <Image src="/assets/icons/quote-left.svg" fill alt="Quote Left" />
          </div>
        </div>

        <h3 className="text-white font-bold text-[14px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] uppercase ml-[16px] -mt-[12px] md:ml-[20px] md:-mt-[20px] lg:ml-[32px] lg:-mt-[32px] xl:ml-[40px] xl:-mt-[40px] 2xl:ml-[56px] 2xl:-mt-[48px]">
          Our mission is to enlighten, entertain and empower current and future
          leaders around the world.
        </h3>
      </div>

      <div className="relative max-w-[569px] aspect-[569/761] lg:-mt-[200px] mr-[32px]">
        <Image src="/assets/images/quoter.png" fill alt="Quoter" />
      </div>
    </section>
  );
}
