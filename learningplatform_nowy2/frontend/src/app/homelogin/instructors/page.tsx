"use client";
import Link from "next/link";
import Image from "next/image";

const instructors = [
  { name: "Anna Kowalska", expertise: "Programming", img: "/puzzleicon.png" },
  { name: "Piotr Nowak", expertise: "Digital Marketing", img: "/puzzleicon.png" },
  { name: "Maria Zielińska", expertise: "Mindfulness", img: "/puzzleicon.png" },
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <div className="flex items-center gap-2">
          <Image src="/puzzleicon.png" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold text-[#4067EC]">COGITO</span>
        </div>
        <Link href="/homelogin" className="bg-[#4067EC] text-white px-4 py-2 rounded-lg font-semibold">Dashboard</Link>
      </header>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-4">
              <Image src={instructor.img} alt={instructor.name} width={64} height={64} className="rounded-full border-2 border-[#4067EC]" />
              <div className="font-semibold text-lg text-gray-800">{instructor.name}</div>
              <div className="text-sm text-gray-500">{instructor.expertise}</div>
              <button className="mt-2 bg-[#4067EC] text-white px-4 py-2 rounded-lg font-semibold">View Profile</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 