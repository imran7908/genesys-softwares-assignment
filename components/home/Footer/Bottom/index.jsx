import Image from "next/image";

export function FooterBottm() {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between mt-8">
      <p className="text-[#FFFFFFCC] text-[12px] lg:text-[16px]">
        © 2024 Valuetainment Store. All rights reserved.
      </p>

      <Image
        src="/assets/images/payment-methods.png"
        width={268}
        height={21}
        alt="Payment Methods"
      />
    </div>
  );
}
