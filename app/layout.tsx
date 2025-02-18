import type { Metadata } from "next";
import "./globals.css";
import MainSidebar from "@/components/ui/app-sidebar";

export const metadata: Metadata = {
  title: "Wisconsin Card Sorting Test",
  description: "Neuropsychology test to assess executive functions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <MainSidebar />
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
