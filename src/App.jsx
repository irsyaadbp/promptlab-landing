import { Navbar } from "@/components/layouts/navbar";
import Homepage from "@/pages/homepage";

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
    </>
  );
}

export default App;
