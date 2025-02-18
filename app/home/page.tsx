import { homePageText } from "@/lib/homePageText";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div>{homePageText}</div>
    </div>
  );
}
