import { ShowSchools } from "@/components/show-schools";
import Link from "next/link";
import "./page.css";

export default function SchoolsPage() {
  return (
    <main className="container">
      <div className="top-bar">
        <h1>All Schools</h1>
        <Link href="/" className="btn-navigation">
          Add School
        </Link>
      </div>

      <ShowSchools />
    </main>
  );
}
