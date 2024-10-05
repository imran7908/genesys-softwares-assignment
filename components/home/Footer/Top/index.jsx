import { montserrat } from "@/utils/fonts";
import Image from "next/image";

export function FooterTop() {
  return (
    <div>
      <div className="flex items-center gap-2 xl:gap-[16px] mb-[24px] lg:mb-[32px]">
        <div className="relative w-[35px] h-[35px] md:w-[45px] md:h-[45px] xl:w-[75px] xl:h-[75px] 3xl:w-[115px] 3xl:h-[115px]">
          <Image
            src="/assets/logos/valuetainment-red.svg"
            fill
            alt="Valuetainment"
          />
        </div>

        <h1
          className={`${montserrat.className} font-extrabold text-white text-[35px] md:text-[44px] xl:text-[72px] 3xl:text-[116px] leading-none tracking-[0.05em]`}
        >
          VTMERCH
        </h1>
      </div>

      <div className="w-full h-[1px] bg-[#A6A5A380]"></div>
    </div>
  );
}
