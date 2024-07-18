import { fetchAllSchools } from "@/lib/actions";
import { SchoolCard } from "./school-card";

export async function ShowSchools() {
  const data = await fetchAllSchools();

  console.log(data);

  return (
    <div className="school-grid">
      {data.map((school, index) => (
        <SchoolCard
          key={index}
          name={school.name}
          city={school.city}
          address={school.address}
          image={school.image}
        />
      ))}
    </div>
  );
}
