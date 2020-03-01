import React, { useLayoutEffect } from "react";
import Header from "./component/Header";
import ProjectGrid from "./component/ProjectGrid";
import { ThemeProvider } from "styled-components";
import { useScroll } from "./ScrollContext";

const theme = {
  main: "#333",
  point: "orange",
  white: "#fff"
};

function App() {
  const { setScrollY } = useScroll();
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <ProjectGrid /> */}
    </ThemeProvider>
  );
}

export default App;
