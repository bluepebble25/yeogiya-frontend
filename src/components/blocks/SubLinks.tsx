import React from 'react';
import { css } from '@emotion/react';
import { Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface SubLinksProps {
  data: {
    title: string;
    link: string;
  }[];
}

function SubLinks({ data }: SubLinksProps) {
  return (
    <div css={linkContainerStyle}>
      {data.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div css={linkDivStyle}>
              <Link
                component={RouterLink}
                to={item.link}
                variant="body2"
                underline="hover"
                color="text.secondary"
              >
                {item.title}
              </Link>
            </div>
            {data.length !== i + 1 && (
              <Divider orientation="vertical" flexItem css={dividerStyle} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SubLinks;

const linkContainerStyle = css`
  display: flex;
`;

const dividerStyle = css`
  margin: 0 2px;
`;

const linkDivStyle = css`
  flex-grow: 1;
  text-align: center;
`;
