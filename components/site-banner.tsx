import { Sparkles } from "lucide-react";
import React from "react";

const SiteBanner = () => {
  return (
    <div
      className={`bg-blue-500 flex items-center justify-center gap-3 text-white text-center h-10`}
    >
      <Sparkles
        size={20}
        className="hidden md:block"
        color="yellow"
        fill="yellow"
      />
      <p className="text-sm font-medium">
        <span className="hidden md:inline-flex md:mr-1">
          Introducing Shiny UI -
        </span>
        UI components and templates to build eye-catching websites.
      </p>
    </div>
  );
};

export default SiteBanner;
