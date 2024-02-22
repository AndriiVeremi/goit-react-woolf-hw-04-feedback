import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li``;

export const Button = styled.button`
  padding: 8px 25px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #b1b1b1;
    color: #fff;
  }

  &:active {
    scale: 0.9;
  }
`;

