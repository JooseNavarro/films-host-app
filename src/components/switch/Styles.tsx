import styled from "styled-components";

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 12px;
`;

export const SwitchInput = styled.input.attrs({type: "checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span<{checked: boolean}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#2196F3" : "#ccc")};
  border-radius: 34px;
  transition: background-color 0.4s;

  &::before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transform: translateX(${(props) => (props.checked ? "26px" : "0")});
    transition: transform 0.4s;
  }
`;

export const Title = styled.h4`
  font-size: 1em;
  line-height: 1.1;
  color: #ffffff;
`;
