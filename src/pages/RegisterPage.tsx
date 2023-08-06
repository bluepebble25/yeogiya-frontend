import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import {
  Container,
  Box,
  Link,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../components/atoms/Logo';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink } from 'react-router-dom';
import Copyright from '../components/atoms/Copyright';
import PrimaryButton from '../components/atoms/PrimaryButton';
import SimpleSocialLoginButton from '../components/atoms/SimpleSocialLoginButton';
import { Controller, useForm } from 'react-hook-form';

interface SignUpFormValues {
  id: string;
  password: string;
  nickname: string;
  email: string;
}

type Agreements = {
  [key: string]: boolean;
};

export default function RegisterPage() {
  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm<SignUpFormValues>({
    mode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // id, nickname 검사 완료 및 사용가능 여부
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [idCheckCompleted, setIdCheckCompleted] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const [nicknameCheckCompleted, setNicknameCheckCompleted] = useState(false);
  // 약관 동의
  const [allCheck, setAllCheck] = useState(false);
  const [agreements, setAgreements] = useState<Agreements>({
    allowAge: false,
    allowPrivacy: false,
  });

  const onSubmit = (data: SignUpFormValues) => {
    //
  };

  const handleIdBlur = async () => {
    const value = getValues('id'); // 아이디 필드의 입력값 가져오기
    if (value) {
      try {
        // Axios를 사용하여 중복검사 API 호출
        // const response = await axios.post('/api/checkDuplicateId', { id: value });
        // const isValid = response.data.isAvailable; // API에서 중복검사 결과를 받아옴
        // setIsIdAvailable(isValid); // 유효성 검사 결과에 따라 상태 변경
        setIsIdAvailable(true);
        setIdCheckCompleted(true);
      } catch (error) {
        alert(`Error during id duplication check: ${error}`);
      }
    }
  };

  const handleNicknameBlur = async () => {
    const value = getValues('nickname');
    if (value) {
      try {
        // Axios를 사용하여 닉네임 중복검사 API 호출
        // const response = await axios.post('/api/checkDuplicateNickname', { nickname: value });
        // const isValid = response.data.isAvailable; // API에서 중복검사 결과를 받아옴
        // setIsNicknameAvailable(isValid);
        setIsNicknameAvailable(true);
        setNicknameCheckCompleted(true);
      } catch (error) {
        alert(`Error during nickname duplication check: ${error}`);
      }
    }
  };

  const handleUpdateAllAgree = () => {
    // agreements 돌며 각 property 변경
    const newAgreements: Agreements = {};
    for (const key in agreements) {
      newAgreements[key] = !allCheck;
    }
    setAllCheck((prevState) => !prevState);
    setAgreements(newAgreements);
  };

  const handleUpdateAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements({ ...agreements, [name]: checked });

    // 모든 동의사항이 체크되어있는지 확인해 체크되어 있다면 전체 항목도 체크
    const allAgreementsChecked = Object.values({
      ...agreements,
      [name]: checked,
    }).every((value) => value);

    setAllCheck(allAgreementsChecked);
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
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            pt: 2,
            pb: 5,
          }}
        >
          {/* id input */}
          <Controller
            name="id"
            control={control}
            defaultValue=""
            rules={{
              required: 'ID를 입력해주세요.',
              pattern: {
                value: /^[a-zA-Z0-9_-]{5,20}$/,
                message:
                  'ID는 5~20자의 영문 대소문자, 숫자, 특수문자(-, _)만 사용 가능합니다.',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="아이디"
                required
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 20 }}
                onBlur={handleIdBlur}
                onChange={(e) => {
                  field.onChange(e); // 필드의 값을 변경
                  trigger('id'); // 입력 값이 변경될 때마다 id 필드의 값을 검사
                  setIsIdAvailable(false);
                  setIdCheckCompleted(false);
                }}
                error={!!errors.id || (!isIdAvailable && idCheckCompleted)} // id 제한사항에 통과 못했거나 id 중복 검사 결과 사용불가일 때도 error
                helperText={
                  errors?.id
                    ? errors.id.message // ID 유효성 검사 에러 메시지 표시
                    : idCheckCompleted && isIdAvailable
                    ? '사용 가능한 아이디입니다.'
                    : idCheckCompleted && !isIdAvailable // 사용 가능한 경우 메시지 표시
                    ? '이미 사용중인 아이디입니다.' // 이미 사용중인 경우 메시지 표시
                    : ''
                }
              />
            )}
          />
          {/* password input */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.',
              },
              pattern: {
                value: /^[a-zA-Z\d!"#$%&'()*+,\-./:;<=>?@[₩[\]^_`{|}~]{8,20}$/,
                message:
                  '8~20자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                type={showPassword ? 'text' : 'password'}
                label="비밀번호"
                required
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 20 }}
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
                error={Boolean(errors?.password)}
                helperText={errors?.password?.message || ''}
              />
            )}
          />
          {/* 닉네임 input */}
          <Controller
            name="nickname"
            control={control}
            defaultValue=""
            rules={{
              required: '닉네임을 입력해주세요. (최대 20자)',
              maxLength: {
                value: 20,
                message: '닉네임은 20자 이하여야 합니다.',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="닉네임"
                required
                fullWidth
                variant="outlined"
                inputProps={{ maxLength: 20 }}
                onBlur={handleNicknameBlur}
                onChange={(e) => {
                  field.onChange(e);
                  setIsNicknameAvailable(false);
                  setNicknameCheckCompleted(false);
                }}
                error={
                  !!errors.nickname ||
                  (!isNicknameAvailable && nicknameCheckCompleted)
                }
                helperText={
                  errors?.nickname
                    ? errors.nickname.message
                    : nicknameCheckCompleted && isNicknameAvailable
                    ? '사용 가능한 닉네임입니다.'
                    : nicknameCheckCompleted && !isNicknameAvailable
                    ? '이미 사용중인 닉네임입니다.'
                    : ''
                }
              />
            )}
          />
          {/* 이메일 input */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message:
                  '유효한 이메일 주소를 입력해주세요. 예) example@email.com',
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="이메일"
                required
                fullWidth
                variant="outlined"
                placeholder="example@email.com"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
            )}
          />
          <Box display="flex" flexDirection="column" mt={2}>
            <Typography mb={1}>약관 동의</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={allCheck}
                  value="allowAll"
                  color="primary"
                  onChange={handleUpdateAllAgree}
                />
              }
              label="모두 동의합니다."
            />
            <Divider sx={{ width: '100%' }} />

            <FormControlLabel
              control={
                <Checkbox
                  name="allowAge"
                  checked={agreements.allowAge}
                  value="allowAge"
                  color="primary"
                  onChange={handleUpdateAgreement}
                />
              }
              label="만 14세 이상입니다. (필수)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="allowPrivacy"
                  checked={agreements.allowPrivacy}
                  value="allowPrivacy"
                  color="primary"
                  onChange={handleUpdateAgreement}
                />
              }
              label="개인정보 수집에 동의합니다. (필수)"
            />
          </Box>

          {/* 회원가입 버튼 */}
          <PrimaryButton
            isDisabled={
              !isValid ||
              !isIdAvailable ||
              !isNicknameAvailable ||
              !agreements.allowAge ||
              !agreements.allowPrivacy
            }
          >
            가입하기
          </PrimaryButton>

          {/* 소셜 로그인 버튼 영역 */}
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
