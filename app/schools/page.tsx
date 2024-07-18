import { ShowSchools } from "@/components/show-schools";
import "./page.css";

export default function SchoolsPage() {
  return (
    <main className="container">
      <h1>All Schools</h1>

      <ShowSchools />
    </main>
  );
}
