import React from "react";

type EmptyCardProps = {
  children: React.ReactNode;
};

export default function EmptyCard({ children }: EmptyCardProps) {
  return (
    <div className="w-44 h-60 bg-white shadow-lg rounded-lg flex items-center justify-center">
      {children}
    </div>
  );
}
