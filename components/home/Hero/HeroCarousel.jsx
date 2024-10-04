import { carouselData } from "@/utils/data";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4.5,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 3.5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1.5,
    slidesToSlide: 1,
  },
};

export function HeroCarousel() {
  return (
    <div
      className={`ml-[24px] md:ml-[90px] xl:ml-[130px] 3xl:ml-[150px] -mt-[20px] md:-mt-[32px] lg:-mt-[40px] xl:-mt-[45px] 3xl:-mt-[85px] pb-[48px] xl:pb-[80px] text-white ${inter.className}`}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        showDots={false}
        containerClass="carousel-container rounded-tl-xl"
      >
        {carouselData.map((item, index) => {
          return (
            <div
              key={index}
              className="ml-[1rem] flex flex-col gap-4 font-medium"
            >
              <div className="relative w-full max-w-[357px] aspect-[357/397]">
                <Image
                  src={item.imageSrc}
                  fill
                  alt={item.title}
                  className="rounded-xl object-cover"
                />
              </div>

              <p>{item.title}</p>
              <div className="flex gap-[1.5rem] text-[1.25rem]">
                <p>$ {item.offerPrice}</p>
                <p className="line-through">$ {item.originalPrice}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
