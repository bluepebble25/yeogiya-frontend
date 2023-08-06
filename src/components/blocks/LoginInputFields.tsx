import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface LoginInputFieldsProps {
  loginInfo: {
    id: string;
    password: string;
  };
  showPassword: boolean;
  handleOnChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  handleDeleteId: () => void;
  handleClickShowPassword: () => void;
}

function LoginInputFields({
  loginInfo,
  showPassword,
  handleOnChangeInput,
  handleDeleteId,
  handleClickShowPassword,
}: LoginInputFieldsProps) {
  return (
    <Grid container>
      <Grid item xs={12} marginBottom={2}>
        <TextField
          fullWidth
          id="id"
          name="id"
          label="아이디"
          value={loginInfo.id}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="delete id input"
                  onClick={handleDeleteId}
                  edge="end"
                >
                  {loginInfo.id !== '' && <HighlightOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete="id"
          autoFocus
          onChange={handleOnChangeInput}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="비밀번호"
          value={loginInfo.password}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {loginInfo.password !== '' &&
                    (showPassword ? <VisibilityOff /> : <Visibility />)}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete="new-password"
          onChange={handleOnChangeInput}
        />
      </Grid>
    </Grid>
  );
}

export default LoginInputFields;
