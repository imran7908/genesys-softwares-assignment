import { montserrat, act_of_rejection } from "@/utils/fonts";
import Image from "next/image";
import { HeroCarousel } from "./HeroCarousel";
import Link from "next/link";

export function Hero() {
  return (
    <section className="max-h-[940px] w-full bg-[#EA2127] pt-[30px] xl:pt-[60px]">
      <div className="flex justify-between mx-[20px] md:mx-[36px] xl:ml-[60px] xl:mr-[120px] items-start mb-[100px]">
        <div className="flex items-center gap-2 xl:gap-[16px]">
          <Link
            href="/"
            className="relative w-[35px] h-[35px] md:w-[45px] md:h-[45px] xl:w-[75px] xl:h-[75px] 3xl:w-[115px] 3xl:h-[115px]"
          >
            <Image
              src="/assets/logos/valuetainment-white.svg"
              fill
              alt="Valuetainment"
            />
          </Link>

          <h1
            className={`${montserrat.className} font-extrabold text-white text-[35px] md:text-[44px] xl:text-[72px] 3xl:text-[116px] leading-none tracking-[0.05em]`}
          >
            VTMERCH
          </h1>
        </div>

        <button>
          <div className="relative w-[24px] h-[24px] md:w-[32px] md:h-[32px] xl:w-[40px] xl:h-[40px]">
            <Image src="/assets/icons/menu.svg" fill alt="Menu Icon" />
          </div>
        </button>
      </div>

      <h1
        className={`${act_of_rejection.className} text-white ml-6 text-[36px] md:text-[60px] lg:text-[70px] md:ml-[90px] xl:text-[80px] 3xl:text-[140px] xl:ml-[120px] opacity-[40%]`}
      >
        future looks brights!
      </h1>

      <HeroCarousel />
    </section>
  );
}
