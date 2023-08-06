import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface SocialLoginButtonProps {
  text: string;
  imgUrl: string;
  to: string;
  bgColor: string;
  hasBorder?: boolean;
}

function SocialLoginButton({
  text,
  imgUrl,
  to,
  bgColor,
  hasBorder,
}: SocialLoginButtonProps) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button css={socialLoginBtnStyle({ bgColor, hasBorder })}>
        <div css={{ width: '20px', height: '20px' }}>
          <img src={imgUrl} alt={text} width="100%" />
        </div>
        <Typography>{text}</Typography>
      </button>
    </Link>
  );
}

interface SocialLoginBtnStyleProps {
  bgColor: string;
  hasBorder?: boolean;
}

const socialLoginBtnStyle = ({
  bgColor,
  hasBorder,
}: SocialLoginBtnStyleProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 16px;
  background-color: ${bgColor};
  border: 1px;
  border-radius: 8px;
  ${hasBorder && 'border : 1px solid #e8e8e8;'}
  cursor: pointer;
`;

export default SocialLoginButton;
