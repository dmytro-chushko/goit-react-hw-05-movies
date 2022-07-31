import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const DescriptionContainer = styled.div``;

export const AdditionalInformatin = styled.div`
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

export const MoviePoster = styled.img`
  display: block;
  max-width: 300px;
  height: auto;
`;

export const MovieTitle = styled.h1``;

export const OverviewLabel = styled.h2``;

export const GenresLabel = styled.h3``;

export const Text = styled.p``;
