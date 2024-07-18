import { fetchAllSchools } from "@/lib/actions";
import SchoolCard from "./school-card";

const ShowSchools = async () => {
  const data = await fetchAllSchools();

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
};

export default ShowSchools;
