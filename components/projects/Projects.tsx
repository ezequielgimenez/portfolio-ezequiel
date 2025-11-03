"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Righteous } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function MyProjectsComp() {
  const t = useTranslations("");

  return (
    <div>
      {/* Título */}
      <div
        id="trabajos"
        className="flex justify-center sm:justify-start sm:pl-8 pt-10 sm:pt-5"
      >
        <h2 className="text-[28px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)]">
          {t("titulo-work")}
        </h2>
      </div>

      <div className="flex xs:flex-col sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://olympiasuplementos7.mitiendanube.com/"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out xs:w-[375px] sm:w-[600px]"
              src="/images/Mockup-1.png"
              alt="work 1"
              width={600}
              height={370}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-[15px] transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Olympia Suplementos - Página web
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center 
  xs:w-[360px] xs:px-6  
  sm:w-[640px] sm:h-auto  
  md:w-[740px] xl:h-full"
        >
          <p
            className="text-center 
    xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] 
    sm:w-[550px] sm:px-8 sm:text-[15px] 
    xl:w-full xl:text-[20px]"
          >
            {t("work-1")}
          </p>
        </div>
      </div>

      <div className="flex xs:flex-col sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://cueva-burger.onrender.com/"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out xs:w-[375px] sm:w-[600px]"
              src="/images/Mockup-2.png"
              alt="work 1"
              width={600}
              height={370}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-[15px] transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Cueva Burger - Página web
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center 
  xs:w-[360px] xs:px-6  
  sm:w-[640px] sm:h-auto  
  md:w-[740px] xl:h-full"
        >
          <p
            className="text-center 
    xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] 
    sm:w-[550px] sm:px-8 sm:text-[15px] 
    xl:w-full xl:text-[20px]"
          >
            {t("work-2")}
          </p>
        </div>
      </div>

      <div className="flex xs:flex-col sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://ecommerce-modakelar.vercel.app/"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden cursor-pointer"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out xs:w-[375px] sm:w-[600px]"
              src="/images/work1.png"
              alt="work 1"
              width={600}
              height={370}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-[15px] transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Ecommerce - FullStack
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center 
  xs:w-[360px] xs:px-6  
  sm:w-[640px] sm:h-auto  
  md:w-[740px] xl:h-full"
        >
          <p
            className="text-center 
    xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] 
    sm:w-[550px] sm:px-8 sm:text-[15px] 
    xl:w-full xl:text-[20px]"
          >
            {t("work-3")}
          </p>
        </div>
      </div>

      <div className="flex xs:flex-col xs:pt-10 sm:w-full sm:h-auto sm:container mx-auto px-4 lg:items-center xl:flex-row xl:items-start xl:w-[1250px] xl:h-[421px] xl:pt-[65px]">
        <div
          data-aos="fade-up"
          className="xs:pl-4 xs:pt-8 sm:pl-[100px] sm:pt-[50px] sm:pr-[30px] relative sm:w-[600px] sm:h-[370px]"
        >
          {/* Contenedor con límites de la imagen */}
          <a
            href="https://pet-finder-21a3b.web.app/"
            target="_blank"
            className="relative w-full h-full rounded-[20px] overflow-hidden"
          >
            <Image
              className="border-transparent transition-all duration-300 ease-in-out"
              src="/images/work3.png"
              alt="work 3"
              width={1000}
              height={370}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 rounded-[15px] hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
              <h3
                className={`${righteous.className} text-white text-xl font-semibold`}
              >
                Pet Finder - React
              </h3>
            </div>
          </a>
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center 
  xs:w-[360px] xs:px-6  
  sm:w-[640px] sm:h-auto  
  md:w-[740px] xl:h-full"
        >
          <p
            className="text-center 
    xs:text-[13px] text-[#BCB4B4] font-[500] pt-[27px] pb-[27px] 
    sm:w-[550px] sm:px-8 sm:text-[15px] 
    xl:w-full xl:text-[20px]"
          >
            {t("work-4")}
          </p>
        </div>
      </div>
    </div>
  );
}
