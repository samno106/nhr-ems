import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex items-start justify-center min-h-screen h-auto px-5">
      <div>
        <h2 className="text-2xl font-bold">Dashborad</h2>
        <ul className="mt-5 space-y-2">
          <li>
            <Link href="/dashboard/employees">Employees</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
