import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-6xl font-bold mb-6">
          MediMind AI
        </h1>

        <p className="text-slate-300 text-xl mb-10">
          AI-Native Healthcare Intelligence Platform
        </p>

        <Link
          href="/dashboard"
          className="rounded-2xl bg-blue-500 px-8 py-4 text-lg font-medium hover:bg-blue-400 transition"
        >
          Enter Platform
        </Link>

      </div>
    </main>
  );
}