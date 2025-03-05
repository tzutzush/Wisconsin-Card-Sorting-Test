"use client";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import EmptyCard from "@/components/ui/empty-card";
import Modal from "@/components/ui/modal";
import { useGameLogic } from "@/hooks/useGameLogic";
import { initialCards } from "@/lib/cards";
import { CardShape } from "@/lib/types";
import React, { useState } from "react";

export default function Page() {
  const [demoStarted, setDemoStarted] = useState<boolean>(false);
  const { checkAnswer, currentCard, startGame } = useGameLogic();
  const modalOpen = false;

  function startDemo() {
    setDemoStarted(true);
    startGame();
  }

  return (
    <div
      id="modal-root"
      className="relative flex items-center justify-center h-full flex-col gap-8"
    >
      {modalOpen ? <Modal correct={false} /> : ""}
      <div className="flex items-center justify-center gap-5">
        {initialCards.map((card: CardShape) => (
          <Card
            onClick={() => {
              checkAnswer(card);
            }}
            key={card.src}
            card={card}
          />
        ))}
      </div>
      {currentCard ? (
        <Card card={currentCard} />
      ) : (
        <EmptyCard>Not started yet</EmptyCard>
      )}
      <Button disabled={demoStarted} onClick={startDemo}>
        Start demo
      </Button>
    </div>
  );
}
