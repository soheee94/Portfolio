import React, { useState, useLayoutEffect } from "react";
import styled, { css } from "styled-components";

const HeaderBlock = styled.header`
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  padding: 60px 40px;
  z-index: 2;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;

  ${props =>
    props.scrollY !== 0 &&
    css`
      width: 140px;
    `}
`;

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return <HeaderBlock scrollY={scrollY}>Portfolio</HeaderBlock>;
}

export default Header;