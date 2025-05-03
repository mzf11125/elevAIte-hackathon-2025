import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GeneratorPage() {
  // Renamed function
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 shadow-xl shadow-purple-500/10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            AI Course Generator
          </CardTitle>
          <CardDescription className="text-gray-400">
            Enter a topic or description, and let Azure AI craft your course
            outline.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full items-center gap-2.5">
            <Label
              htmlFor="course-topic"
              className="text-lg font-semibold text-gray-300"
            >
              Course Topic / Description
            </Label>
            <Textarea
              id="course-topic"
              placeholder="e.g., Introduction to Quantum Computing, Advanced Web3 Development..."
              className="min-h-[150px] bg-gray-700 border-gray-600 placeholder-gray-500 text-white focus:ring-purple-500 focus:border-purple-500"
            />
            <p className="text-sm text-gray-500">
              Provide a clear topic or a detailed description for the best
              results.
            </p>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Generate Course Outline
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
