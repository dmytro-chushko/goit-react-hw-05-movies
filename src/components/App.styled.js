import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(div)`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;
export const Navigation = styled(ul)`
  display: flex;
  gap: 10px;
`;
export const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;
