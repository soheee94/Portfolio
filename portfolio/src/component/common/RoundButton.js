import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";

function RoundButton({ onClick, ...rest }) {
  return <Button onClick={onClick} {...rest} />;
}

const Button = styled.button`
  vertical-align: middle;
  background: none;
  border: 1.5px solid ${palette.point};
  outline: none;
  word-break: keep-all;
  cursor: pointer;
  color: ${palette.point};
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  font-weight: 700;
  padding: 0;
  transition: all 0.2s ease;
  &:first-of-type {
    margin-right: 0.5rem;
  }
  &:last-of-type {
    margin-left: 0.5rem;
  }
  &:hover {
    background: ${palette.point};
    color: white;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;

export default React.memo(RoundButton);
