import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      maxWidth="500px"
    >
      {'Copyright © '}
      <Link to="/" css={LinkStyle}>
        여기야
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LinkStyle = css`
  color: inherit;
  margin-right: 4px;
`;

export default Copyright;
