import { montserrat } from "@/utils/fonts";
import { Caps } from "./Caps";

export function Bogo() {
  return (
    <section className="bg-[#F6F5F5] px-[16px] md:px-[32px] lg:px-[64px] xl:px-[120px] py-[32px] md:py-[48px] lg:py-[60px] xl:py-[72px] 2xl:py-[90px] tracking-[0.05em]">
      <h2
        className={`${montserrat.className} font-semibold text-[#222222] text-[20px] md:text-[32px] lg:text-[44px] xl:text-[60px] 2xl:text-[70px] uppercase leading-[110%] mb-[32px]`}
      >
        Buy 1 get 1 Free <br />
        on &nbsp;
        <span className="text-transparent textBorder ">
          best selling products
        </span>
      </h2>

      <Caps />
    </section>
  );
}
