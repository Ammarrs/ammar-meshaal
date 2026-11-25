import React from "react";
import cv from "../../../public/cv/Ammar_Elsaeid_Frontend_Main.pdf"

const Button = ({ accent, children }) => {
  return (
    <button
      className={`py-2 px-4 border border-border rounded-lg tracking-wide transition-all duration-200 ease-out active:scale-[0.97] ${accent ? "bg-accent text-background hover:bg-accent/95" : "bg-button hover:bg-button/75"}`}
    >
      <a href={cv} download={"Ammar-Meshaal-CV.pdf"} className="flex gap-2 items-center">{children}</a>
    </button>
  );
};

export default Button;
