import Link from "next/link";

export function Links({ heading, links }) {
  return (
    <div className="flex flex-col gap-4 xl:justify-self-center">
      <h5 className="font-medium lg:text-[20px]">{heading}</h5>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.url}
            className="text-[#FFFFFFCC] text-[14px] lg:text-[16px]"
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
