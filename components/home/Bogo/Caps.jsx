import { capsData } from "@/utils/data";
import { inter } from "@/utils/fonts";
import Image from "next/image";

export function Caps() {
  return (
    <div
      className={`${inter.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 place-content-center place-items-center max-w-[1618px] mx-auto`}
    >
      {capsData.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 font-medium p-2 bg-white rounded-xl"
          >
            <div className="relative w-full max-w-[354.5px] aspect-[354.5/333]">
              <Image
                src={item.imageSrc}
                fill
                alt={item.title}
                className="rounded-xl object-cover"
              />
            </div>

            <p className="text-black-1 font-semibold">{item.title}</p>
            <div className="flex gap-[16px] text-[1.25rem]">
              <p className="text-black-1 font-medium">$ {item.offerPrice}</p>
              <p className="text-black-2 line-through">
                $ {item.originalPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
