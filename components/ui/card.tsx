"use client";
import React from "react";
import Image from "next/image";
import { CardShape } from "@/lib/types";

export default function Card({ src, shape, color, quantity }: CardShape) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Image
        src={src}
        data-shape={shape}
        data-color={color}
        data-quantity={quantity}
        alt="Picture of the author"
        width={180}
        height={240}
      />
    </div>
  );
}
