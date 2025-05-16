import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Flashcard App</h1>
      <p className="mt-4 text-lg">
        Spaced repetition flashcard engine with review stats
      </p>
    </main>
  );
}
