import React from 'react';
import { css } from '@emotion/react';

interface SimpleSocialLoginBtnProps {
  imgUrl: string;
  alt: string;
  to?: string;
  bgColor?: string;
  hasBorder?: boolean;
  onClick?: () => {};
}

function SimpleSocialLoginButton({
  imgUrl,
  alt,
  bgColor,
  hasBorder,
  onClick,
}: SimpleSocialLoginBtnProps) {
  return (
    <button css={buttonStyle({ bgColor, hasBorder })} onClick={onClick}>
      <img src={imgUrl} alt={alt} width="18px" />
    </button>
  );
}

interface SocialLoginBtnStyleProps {
  bgColor?: string;
  hasBorder?: boolean;
}

const buttonStyle = ({ bgColor, hasBorder }: SocialLoginBtnStyleProps) => css`
  width: 44px;
  height: 44px;
  background-color: ${bgColor};
  border: none;
  border-radius: 8px;
  ${hasBorder && 'border : 1px solid #e8e8e8;'}
  cursor: pointer;
`;

export default SimpleSocialLoginButton;
