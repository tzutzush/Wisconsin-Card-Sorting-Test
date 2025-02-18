export type Shape = "circle" | "cross" | "star" | "triangle";
export type Color = "blue" | "green" | "red" | "yellow";

export type CardShape = {
  src: string;
  shape: Shape;
  color: Color;
  quantity: number;
};
