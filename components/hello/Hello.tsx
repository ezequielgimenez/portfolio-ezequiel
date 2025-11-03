import { useTranslations } from "next-intl";

export default function HelloComp() {
  const t = useTranslations("");
  return (
    <div className="flex flex-col items-center justify-center my-10 xs:min-h-full xs:px-4 xs:py-10 sm:flex-row sm:pl-20 sm:h-[450px] gap-8">
      {/* Texto */}
      <div className="flex-1 flex items-center justify-center">
        <h1
          className="font-[600] text-center sm:text-left animate-bounce motion-safe:animate-[bounce_3s_infinite] 
          drop-shadow-[0px_0px_5px_rgba(148,137,143,1)] xs:text-[35px] sm:text-[60px] md:text-[65px]"
          style={{
            WebkitTextStroke: "1px #ff4bab",
            backgroundImage:
              "radial-gradient(circle farthest-corner at center center, #cfcfcf17 0%, #0000002d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("titulo-hello1")} <br />
          {t("titulo-hello2")}{" "}
          <span className="text-white">{t("titulo-hello3")}.</span>
        </h1>
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/me2.png"
          alt="Ezequiel Gimenez - Desarrollador Web"
          className="w-[200px] sm:w-[280px] md:w-[320px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
