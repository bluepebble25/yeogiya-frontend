import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Container,
  Grid,
  Box,
  Button,
  TextField,
  Link,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Divider,
} from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import { Link as RouterLink } from 'react-router-dom';

import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Copyright from '../components/atoms/Copyright';
import Logo from '../components/atoms/Logo';
import PrimaryButton from '../components/atoms/PrimaryButton';
import SimpleSocialLoginButton from '../components/atoms/SimpleSocialLoginButton';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ maxWidth: '500px', mx: 'auto' }}>
        <div css={logoWrapperStyle}>
          <Link component={RouterLink} to="/">
            <Logo height="32px" />
          </Link>
        </div>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 2,
            pb: 5,
          }}
        >
          <TextField
            id="name"
            name="name"
            label="이름"
            inputProps={{ maxLength: 12 }}
            required
            autoComplete="name"
            fullWidth
          />
          <Grid container spacing={2}>
            <Grid item xs={8} sm={9}>
              <TextField
                id="id"
                name="id"
                label="아이디"
                inputProps={{ maxLength: 12 }}
                required
                autoComplete="id"
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sm={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: '14px',
                  px: '12px',
                  borderRadius: '8px',
                  my: 'auto',
                }}
                onClick={() => {}}
              >
                <Typography color={'white'}>중복확인</Typography>
              </Button>
            </Grid>
          </Grid>
          <TextField
            id="password"
            name="password"
            label="비밀번호"
            required
            fullWidth
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="new-password"
          />
          <TextField
            id="email"
            name="email"
            label="이메일"
            inputProps={{ maxLength: 320 }}
            required
            fullWidth
            autoComplete="email"
            placeholder="example@email.com"
          />
          <TextField
            id="mobile_no"
            name="mobile_no"
            label="전화번호"
            inputProps={{ maxLength: 12 }}
            required
            fullWidth
            autoComplete="mobile_no"
            placeholder="'-' 없이 입력"
          />
          <TextField
            id="nickname"
            name="nickname"
            label="닉네임"
            inputProps={{ maxLength: 12 }}
            autoComplete="nickname"
            required
            fullWidth
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="">광역시/도</InputLabel>
                <Select labelId="" id="" value="" label="" onChange={() => {}}>
                  <MenuItem value="서울특별시">
                    <em>서울</em>
                  </MenuItem>
                  <MenuItem value="인천광역시">인천</MenuItem>
                  <MenuItem value="경기도">경기</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={7}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="">시/구</InputLabel>
                <Select labelId="" id="" value="" label="" onChange={() => {}}>
                  <MenuItem value="강남구">
                    <em>강남구</em>
                  </MenuItem>
                  <MenuItem value="마포구">마포구</MenuItem>
                  <MenuItem value="용산구">용산구</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box display="flex" flexDirection="column" mt={2}>
            <Typography mb={1}>가입 약관</Typography>
            <FormControlLabel
              control={<Checkbox value="allowAll" color="primary" />}
              label="전체 동의"
            />
            <FormControlLabel
              control={<Checkbox value="allowAge" color="primary" />}
              label="만 14세 이상입니다. (필수)"
            />
            <FormControlLabel
              control={<Checkbox value="allowPersonalInfo" color="primary" />}
              label="개인정보 수집에 동의합니다. (필수)"
            />
          </Box>

          <PrimaryButton>가입하기</PrimaryButton>
          <div css={socialLoginContainerStyle}>
            <Divider sx={{ width: '100%' }}>
              <Typography variant="body2" color="#abb0b5">
                간편 회원가입
              </Typography>
            </Divider>

            <div css={socialLoginBtnWrapper}>
              <SimpleSocialLoginButton
                imgUrl="img/g_logo.png"
                alt="구글 계정으로 회원가입"
                bgColor="white"
                hasBorder
              />
              <SimpleSocialLoginButton
                imgUrl="img/kakao_logo.svg"
                alt="카카오 계정으로 회원가입"
                bgColor="#FEE500"
              />
            </div>
          </div>
        </Box>
      </Box>

      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

const logoWrapperStyle = css`
  display: flex;
  padding: 24px 0 24px 0;
`;

const socialLoginContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

const socialLoginBtnWrapper = css`
  display: flex;
  justifycontent: center;
  gap: 16px;
`;
