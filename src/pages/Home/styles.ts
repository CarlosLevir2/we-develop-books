import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2% 6%;
`;

export const MangasList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  border: none;
  border-radius: 4px;
  color: #fff;
  margin: 5px;
  margin-top: 20px;
  cursor: pointer;
  margin: 2% 0;

  :hover {
    transform: scale(1.01);
  }

  :active {
    transform: scale(0.99);
  }
`;
