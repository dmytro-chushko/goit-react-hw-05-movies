import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AdditionalInfoContainer = styled.div`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const InfoList = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const InfoItem = styled.li`
  padding-left: 20px;
`;

export const Link = styled(NavLink)``;
