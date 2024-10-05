import { inter } from "@/utils/fonts";
import { FooterTop } from "./Top";
import { FooterMiddle } from "./Middle";
import { FooterBottm } from "./Bottom";

export function Footer() {
  return (
    <footer
      className={`${inter.className} px-[16px] md:px-[32px] lg:px-[64px] xl:px-[120px] py-[32px] md:py-[48px] lg:py-[60px] xl:py-[72px] 2xl:pt-[90px] 2xl:pb-[48px] bg-[#000000] text-white`}
    >
      <FooterTop />
      <FooterMiddle />
      <FooterBottm />
    </footer>
  );
}
