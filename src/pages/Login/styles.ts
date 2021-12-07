import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2% 6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  padding: 1rem;
  border: ${({ theme }) => `2px solid ${theme.colors.accent.primary}`};
  max-width: 80%;
  width: 35rem;
  height: 3.8rem;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;
`;

export const LoginButton = styled.button`
  border: 0;
  max-width: 80%;
  width: 35rem;
  height: 3.8rem;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.colors.text.highlight};
  cursor: pointer;
`;
