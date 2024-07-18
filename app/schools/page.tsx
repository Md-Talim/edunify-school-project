import Navbar from "@/components/navbar";
import ShowSchools from "@/components/show-schools";
import "./page.css";

const SchoolsPage = () => {
  return (
    <main className="container">
      <Navbar link="/" linkTitle="+ New School" title="All Schools" />

      <ShowSchools />
    </main>
  );
};

export default SchoolsPage;
