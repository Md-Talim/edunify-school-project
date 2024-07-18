import Navbar from "@/components/navbar";
import { ShowSchools } from "@/components/show-schools";
import "./page.css";

export default function SchoolsPage() {
  return (
    <main className="container">
      <Navbar link="/" linkTitle="+ New School" title="All Schools" />

      <ShowSchools />
    </main>
  );
}
