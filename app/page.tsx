import { AddSchoolForm } from "@/components/add-school-form";
import "./page.css";

export default function Home() {
  return (
    <main>
      <h1 className="form-title">Add a School</h1>

      <AddSchoolForm />
    </main>
  );
}
