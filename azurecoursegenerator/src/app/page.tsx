import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-600">
          Welcome to LearnSphere AI
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Revolutionizing education with AI-powered course generation and a
          modern Web3-inspired learning experience.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/generator">
            <button
              type="button"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Generating
            </button>
          </Link>
          <Link href="/lms">
            <button
              type="button"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
