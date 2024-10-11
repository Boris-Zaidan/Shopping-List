import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 2rem;
  text-align: center;
  border-radius: 6px;
  flex-wrap: wrap;

  h1 {
    color: #1a99ff;
    padding-bottom: 1rem;
  }

  input {
    height: 33px;
    border-radius: 6px;
    border: solid 1px #1a99ff;
    outline: none;
    padding-left: 8px;
  }
`;

export const AddButton = styled.button`
  background: aqua;
  color: black;
  height: 33px;
  border-radius: 6px;
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    background: black;
    color: aqua;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  background: #ccc;
  border-radius: 6px;
  margin-top: 13px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: bolder;
  }
`;

export const TrashButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
`;
