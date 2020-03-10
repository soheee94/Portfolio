import React from "react";
import styled from "styled-components";
import media from "./utils/media";

const TypographyBlock = styled.div`
  h1 {
    font-size: 2rem;
    line-height: 2.91rem;
    letter-spacing: -0.065rem;
    margin: 0;
    margin-bottom: 1.125rem;

    ${media.medium} {
      font-size: 1.6875rem;
      line-height: 2.5rem;
    }
  }
  h2 {
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: -0.035rem;
    font-weight: 700;
  }
  h1 + p {
    font-size: 1rem;
    line-height: 1.6rem;
    letter-spacing: -0.055rem;
    /* padding-bottom: 30px;
    ${media.small} {
      padding-bottom: 0;
    } */
  }
  p {
    font-size: 0.875rem;
    line-height: 2.25rem;
    letter-spacing: -0.085rem;
  }
`;

function Typography({ children }) {
  return <TypographyBlock>{children}</TypographyBlock>;
}

export default Typography;
