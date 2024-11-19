import React from "react";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-black text-white text-sm py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-12 h-4"></div>
        <div className="flex items-center">
          {/* Left Section: Sale Text */}
          <p className="font-light mx-3 hidden md:block">{t("saleText")}</p>

          {/* Middle Section: Shop Now Link */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white underline hover:text-white transition font-bold"
            >
              {tr("shopNow")}
            </a>
          </div>
        </div>

        {/* Right Section: Language Selector */}
        <select
          className="bg-transparent rounded py-2 focus:outline-none"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en">{tr("en")}</option>
          <option value="ar">{tr("ar")}</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
