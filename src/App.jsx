import { useState } from "react";

import { Navbar } from "@/components/layouts/Navbar";
import application from "@/constants/application";
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
