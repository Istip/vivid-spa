import styled from "styled-components"

export const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 12px 32px;
  margin: 8px 0 16px 0;
  font-size: 16px;
  font-weight: bold;
  color: #f1f1f1;
  background-color: transparent;
  border-bottom: 1px solid #f1f1f1;
  transition: 0.3s ease;

  &::placeholder {
    color: #111122;
  }

  &:focus {
    background-color: #111122;
  }
`
