import React from 'react';
import { SerializedStyles } from '@emotion/react';

interface LogoProps {
  width?: string;
  height?: string;
  styles?: SerializedStyles;
}

/**
 * width, height를 지정할 수 있으며, styles을 통해 emotion의 css`` 형태로 스타일을 전달할 수 있음
 */
function Logo({ width, height, styles }: LogoProps) {
  return (
    <div css={styles}>
      <img
        src="img/yeogiya_logo.svg"
        alt="여기야 로고"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Logo;
