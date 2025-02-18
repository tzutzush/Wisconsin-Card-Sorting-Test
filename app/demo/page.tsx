"use client";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { initialCards } from "@/lib/cards";
import { CardShape } from "@/lib/types";
import React, { useState } from "react";

export default function Page() {
  const [demoStarted, setDemoStarted] = useState<boolean>(false);
  const [randomCard, setRandomCard] = useState<CardShape | null>(null);

  function startDemo() {
    setDemoStarted(true);
    setRandomCard({
      src: "/circles/blue_card_with_1_circles.png",
      shape: "circle",
      color: "blue",
      quantity: 1,
    });
  }

  return (
    <div className="flex items-center justify-center h-full flex-col gap-8">
      <div className="flex items-center justify-center gap-5">
        {initialCards.map((card: CardShape) => (
          <Card key={card.src} {...card} />
        ))}
      </div>
      {randomCard ? (
        <Card {...randomCard} />
      ) : (
        <div className="w-44 h-60 bg-white shadow-lg rounded-lg flex items-center justify-center">
          Not started yet
        </div>
      )}
      <Button disabled={demoStarted} onClick={startDemo}>
        Start demo
      </Button>
    </div>
  );
}
