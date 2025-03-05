import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ correct }: { correct: boolean }) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="absolute flex justify-center items-center h-screen backdrop-blur-lg z-40 inset-0">
      <div
        className={`${
          correct ? "text-green-900" : "text-red-800"
        } text-4xl font-extrabold`}
      >
        {correct ? "Correct!" : "Wrong!"}
      </div>
    </div>,
    modalRoot
  );
}
