import styled from 'styled-components';
import { HiStar } from 'react-icons/hi';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};

  & {
    margin-left: 20px;
  }
`;

export const CardTitle = styled.span`
  font-size: 14px;
  display: block;
  width: 162px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: auto;
  overflow: hidden;
  font-weight: bold;
`;

export const CardImage = styled.img`
  font-size: 14px;
  display: block;
  width: 192px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: auto;
  overflow: hidden;

  border-radius: 8px;
  object-fit: cover;
  object-position: center center;
  box-shadow: 0 1px 1px rgba(53, 71, 121, 0.11),
    0 2px 2px rgba(53, 71, 121, 0.11), 0 4px 4px rgba(53, 71, 121, 0.11),
    0 6px 8px rgba(53, 71, 121, 0.11), 0 8px 16px rgba(53, 71, 121, 0.11);
  width: 160px;
  height: 226px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Star = styled(HiStar)`
  cursor: pointer;
  > svg + svg {
    margin-left: 4px;
  }
`;

export const ShowDescriptionButton = styled.button`
  border: 0;
  width: 12rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.text.highlight};
  cursor: pointer;
`;

export const Description = styled.span`
  font-size: 14px;
  display: block;
  width: 162px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-top: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: auto;
  overflow: hidden;
  font-weight: bold;
`;
