import { AddSchoolForm } from "@/components/add-school-form";
import Navbar from "@/components/navbar";
import "./page.css";

export default function Home() {
  return (
    <main>
      <Navbar
        link="/schools"
        linkTitle="View all schools"
        title="Add a School"
      />

      <AddSchoolForm />
    </main>
  );
}
