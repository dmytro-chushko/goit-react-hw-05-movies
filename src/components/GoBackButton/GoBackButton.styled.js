import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: inline-block;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
`;
