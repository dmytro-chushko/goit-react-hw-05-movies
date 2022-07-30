import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ResultsItem = styled.li``;

export const Link = styled(NavLink)`
  font-size: 14px;
  color: black;

  :hover {
    font-size: 16px;
    font-weight: 700;
  }
`;
