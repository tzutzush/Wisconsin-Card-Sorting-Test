import { cards } from "@/lib/cards";
import { CardShape, GameRule } from "@/lib/types";
import { getRandomItem, isDivisibleBy } from "@/lib/utils";
import { useState } from "react";

export function useGameLogic() {
  const [currentRule, setCurrentRule] = useState<GameRule | null>(null);
  const [currentCard, setCurrentCard] = useState<CardShape | null>(null);
  const [turn, setTurn] = useState<number>(0);
  const ruleChangedEveryXTurn = 5;

  const createRule = () => {
    const possibleRules: GameRule[] = ["color", "quantity", "shape"];
    let newRule;

    do {
      newRule = getRandomItem(possibleRules);
    } while (newRule === currentRule);

    setCurrentRule(newRule);
  };

  const drawNewCard = () => {
    const possibleCards: CardShape[] = cards;
    let newCard;

    do {
      newCard = getRandomItem(possibleCards);
    } while (newCard === currentCard);

    setCurrentCard(newCard);
  };

  const endTurn = () => {
    setTurn(turn + 1);
    if (turn === 61) return;
    const changeRule: boolean = isDivisibleBy(ruleChangedEveryXTurn, turn);
    if (changeRule) createRule();
    drawNewCard();
  };

  const checkAnswer = (target: CardShape): boolean => {
    if (target[currentRule!] === currentCard![currentRule!]) {
      endTurn();
      return true;
    } else {
      endTurn();
      return false;
    }
  };

  const startGame = () => {
    setTurn(turn + 1);
    createRule();
    drawNewCard();
  };

  return { checkAnswer, currentCard, startGame };
}
