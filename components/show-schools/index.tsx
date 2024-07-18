import { schools } from "@/app/schools/data";
import { SchoolCard } from "./school-card";

export function ShowSchools() {
  return (
    <div className="school-grid">
      {schools.map((school, index) => (
        <SchoolCard key={index} {...school} />
      ))}
    </div>
  );
}
