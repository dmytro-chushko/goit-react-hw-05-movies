import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;
export const Navigation = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;

  &.active {
    color: orange;
  }
`;
