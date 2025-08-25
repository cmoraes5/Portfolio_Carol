import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <main>
      <h1>Sobre</h1>
      <p>Esta é a página sobre.</p>
    </main>
  );
}