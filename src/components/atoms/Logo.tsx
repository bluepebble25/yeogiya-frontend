import React from 'react';

interface LogoProps {
  width?: string;
  height?: string;
}

/**
 * width, height를 지정할 수 있음
 */
function Logo({ width, height }: LogoProps) {
  return (
    <span>
      <img
        src="img/yeogiya_logo.svg"
        alt="여기야 로고"
        width={width}
        height={height}
        style={{ display: 'block' }}
      />
    </span>
  );
}

export default Logo;
