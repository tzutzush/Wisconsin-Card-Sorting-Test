"use client";
import React from "react";
import Image from "next/image";
import { CardShape } from "@/lib/types";

export default function Card(card: CardShape) {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Image
        src={card.src}
        data-shape={card.shape}
        data-color={card.color}
        data-quantity={card.quantity}
        alt="Picture of the author"
        width={180}
        height={240}
      />
    </div>
  );
}
