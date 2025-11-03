import Image from "next/image";
export default function SocialComp() {
  return (
    <div>
      <div className="flex items-end justify-center h-[70px]">
        <a
          href="https://www.linkedin.com/in/ezequielgimenez/"
          target="_blank"
          className="px-5 cursor-pointer"
        >
          <Image
            className="drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] hover:drop-shadow-[0px_0px_8px_#d1d1d1]"
            src="/images/linkedin.png"
            alt="linkedin"
            width={50}
            height={50}
          ></Image>
        </a>
        <a
          href="https://github.com/ezequielgimenez"
          target="_blank"
          className="px-5 cursor-pointer"
        >
          <Image
            className="drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] hover:drop-shadow-[0px_0px_8px_#d1d1d1]"
            src="/images/github.png"
            alt="github"
            width={50}
            height={50}
          ></Image>
        </a>

        <a
          href="https://wa.link/h6eti3"
          target="_blank"
          className="px-5 cursor-pointer"
        >
          <Image
            className="drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] hover:drop-shadow-[0px_0px_8px_#d1d1d1]"
            src="/images/whatsapp.png"
            alt="gmail"
            width={50}
            height={55}
          ></Image>
        </a>
      </div>
    </div>
  );
}
