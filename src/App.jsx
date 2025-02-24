import { Navbar } from "@/components/layouts/navbar";
import Homepage from "@/pages/homepage";
import Footer from "@/components/layouts/footer";

const navigations = [
  {
    name: "Docs",
    to: "#",
  },
  {
    name: "Model",
    to: "#",
  },
  {
    name: "Resource",
    to: "#",
  },
  {
    name: "Installation",
    to: "#",
  },
];

function App() {
  return (
    <>
      <Navbar data={navigations} />
      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
