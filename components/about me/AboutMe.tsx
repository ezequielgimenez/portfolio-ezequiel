import Image from "next/image";
import { useTranslations } from "next-intl";
export default function AboutMeComp() {
  const t = useTranslations("");
  return (
    <div>
      <div className="py-40 xs:pl-4 sm:pl-8 ">
        <div className="flex xs:justify-center sm:justify-normal">
          <h2
            id="about"
            className="text-[28px] font-[500] drop-shadow-[0px_0px_5px_rgba(197,75,140,1)] sm:pb-2 xl:pb-20"
          >
            {t("titulo-about")}
          </h2>
        </div>

        <div className=" flex items-center justify-center xs:flex-col  h-[500px] sm:w-[640px]  sm:items-center lg:w-[1024px] xl:w-[1192px] xl:flex-row">
          <div
            data-aos="fade-up-left"
            className="flex flex-col justify-around  xs:px-8 sm:w-[500px] sm:h-auto sm:justify-center lg:w-[600px]  xl:w-[690px] xl:h-[350px]"
          >
            <h3 className="font-normal xs:pb-8  text-[#F0F0F0] sm:text-[15px]  xl:text-[20px]">
              {t("titulo-hello2")}{" "}
              <span className="text-[#858585]">{t("name")}</span>,
              {t("description")}
              <span className="text-[#858585]">{t("stacks")}</span>
              <br />
              <br />
              {t("about-me")}
            </h3>
            <h3 className="text-xl font-semibold text-white mb-2">Formación</h3>
            <p className="text-gray-400">
              Desarrollador Web Full Stack –{" "}
              <a
                href="https://apx.school/profiles/7a532976-d527-4d60-9ac0-ecb55496b2c2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4bab] underline hover:text-white transition-colors"
              >
                APX School
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
