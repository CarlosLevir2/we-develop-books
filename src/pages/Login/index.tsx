import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function Login() {
  const navigate = useNavigate();

  const handleSignIn = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <S.Container>
      <S.FormContainer>
        <S.LoginInput placeholder="Email" />
        <S.LoginInput placeholder="Password" />
        <S.LoginButton onClick={handleSignIn}>Login</S.LoginButton>
      </S.FormContainer>
    </S.Container>
  );
}
