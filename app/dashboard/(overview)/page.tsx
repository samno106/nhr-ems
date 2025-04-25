import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex items-start min-h-screen h-auto px-10">
      <div>
        <h2 className="text-2xl font-bold mt-2">Dashborad</h2>
        <span className="text-sm text-gray-500 font-medium">Welcome back, Admin</span>
      </div>
    </div>
  );
}
