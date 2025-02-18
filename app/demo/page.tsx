import Card from "@/components/ui/card";
import { initialCards } from "@/lib/cards";
import { CardShape } from "@/lib/types";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="flex items-center justify-center gap-5">
        {initialCards.map((card: CardShape) => (
          <Card
            key={card.src}
            src={card.src}
            shape={card.shape}
            color={card.color}
            quantity={card.quantity}
          />
        ))}
      </div>
    </div>
  );
}
