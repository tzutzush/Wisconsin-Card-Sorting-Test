"use client";
import React from "react";
import Image from "next/image";
import { CardShape } from "@/lib/types";

type CardProps = {
  card: CardShape;
  onClick?: () => void;
};

export default function Card({ card, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`shadow-lg rounded-lg overflow-hidden ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
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
