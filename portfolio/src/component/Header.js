import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useScroll } from "../ScrollContext";
import media from "../utils/media";

const ScrollAnimationStyles = css`
  visibility: visible;
  opacity: 1;
  transition: all 0.15s ease;
  transition-delay: 0.5s;
`;

const Block = styled.header`
  background: ${props => props.theme.main};
  color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.33%;
  transition: all 0.3s 0s ease;
  transition-delay: 0.15s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  & > * {
    padding: 60px;

    ${ScrollAnimationStyles}

    ${media.small} {
      padding: 25px 20px;
    }
  }

  /* scroll animation (not mobile) */
  @media (min-width: 1024px) {
    ${props => {
      if (props.scrollY > 3 && !props.openHeader) {
        return css`
            width: 176px;
            ${MenuButton}, ${HeaderContent},${Footer} {
              visibility: hidden;
              opacity: 0;
              transition-delay: 0s;
            }
          `;
      }
    }}
  }

  /* mobile */
  ${media.medium} {
    width: 100%;
    position: relative;
    padding: 0;
  }
`;
const FloatingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  ${media.medium} {
    position: fixed;
    background: inherit;
    z-index: 11;
  }

  /* hamburger menu test */
  body {
    background-color: #333;
  }
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  background: ${props => props.theme.point};
  cursor: pointer;
`;

const lineUp = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const MenuButton = styled.div`
  width: 26px;
  height: 17px;
  cursor: pointer;
  position: relative;
  &:before,
  &:after,
  span {
    background-color: #fff;
    content: "";
    display: block;
    height: 3px;
    transition: all 200ms ease-in-out;
  }
  &:before {
    margin-bottom: 11px;
    animation: ${lineUp} ease 1s infinite 1s alternate;
  }

  span {
    width: 100%;
    position: absolute;
    top: 7px;
    animation: ${lineUp} ease 1.4s infinite 0.6s alternate;
  }

  &:after {
    animation: ${lineUp} ease 1.8s infinite 0.2s alternate;
  }

  /* hover animation */
  &:hover {
    &:before,
    &:after,
    span {
      background-color: ${props => props.theme.point};
    }
  }

  /* close button */
  /* &:hover {
    &:before {
      transform: translateY(7px) rotate(45deg);
    }
    &:after {
      transform: translateY(-7px) rotate(-45deg);
    }
    span {
      background: none;
    }
  } */
`;

const HeaderContent = styled.div`
  padding: 0 30px;
  font-size: 25px;
  font-weight: 700;

  p {
    padding: 0 60px;
  }

  ${media.medium} {
    padding-top: 176px;
  }
  ${media.small} {
    padding-top: 130px;
    padding-bottom: 60px;
    p {
      padding: 0 20px;
    }
  }
`;

const Footer = styled.div`
  ${media.small} {
    display: none;
  }
`;

function Header() {
  const { scrollY } = useScroll();
  const [openHeader, setOpenHeader] = useState(false);

  return (
    <Block
      scrollY={scrollY}
      openHeader={openHeader}
      onMouseOver={() => {
        setOpenHeader(true);
      }}
      onMouseOut={() => {
        setOpenHeader(false);
      }}
    >
      <FloatingBlock>
        <Logo />
        <MenuButton>
          <span></span>
        </MenuButton>
      </FloatingBlock>
      <HeaderContent>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </HeaderContent>
      <Footer>© SORE, 2020</Footer>
    </Block>
  );
}

export default Header;
