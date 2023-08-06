import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import {
  Container,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import Logo from '../components/atoms/Logo';
import LoginInputFields from '../components/blocks/LoginInputFields';
import SubLinks from '../components/blocks/SubLinks';
import PrimaryButton from '../components/atoms/PrimaryButton';
import SocialLoginButton from '../components/atoms/SocialLoginButton';
import Copyright from '../components/atoms/Copyright';

export default function SignIn() {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleDeleteId = () => {
    setLoginInfo({ ...loginInfo, id: '' });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      id: data.get('id'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box css={loginWrapperStyle}>
        <Link to="/">
          <Logo height="50px" />
        </Link>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', mt: 4, gap: 2 }}
        >
          <LoginInputFields
            loginInfo={loginInfo}
            showPassword={showPassword}
            handleOnChangeInput={handleOnChangeInput}
            handleDeleteId={handleDeleteId}
            handleClickShowPassword={handleClickShowPassword}
          />
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  value="remember"
                  color="primary"
                  sx={{ padding: '0 9px' }}
                />
              }
              label="아이디 저장"
              sx={{ mt: -1 }}
            />
          </Grid>
          <PrimaryButton>로그인</PrimaryButton>
          <SubLinks
            data={[
              { title: '아이디 찾기', link: '/login#' },
              { title: '비밀번호 찾기', link: '/login#' },
              { title: '회원가입 하기', link: '/register' },
            ]}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <SocialLoginButton
              text="구글로 로그인"
              imgUrl="img/g_logo.png"
              to="/login#"
              bgColor="white"
              hasBorder
            />
            <SocialLoginButton
              text="카카오 로그인"
              imgUrl="img/kakao_logo.svg"
              to="/login#"
              bgColor="#FEE500"
            />
          </Box>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

const loginWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  padding: 50px;
  margin-top: 64px;
  border: solid 1px #dcdcdc;
  border-radius: 24px;
}
`;
