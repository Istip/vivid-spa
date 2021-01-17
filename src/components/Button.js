import styled from "styled-components"

export const Button = styled.button`
  border: 2px solid #f1f1f1;
  color: #f1f1f1;
  background-color: transparent;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bolder;
  transition: 0.3s ease;
  margin: 32px 0 32px 0;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    color: ${(props) => props.hover};
  }
`
