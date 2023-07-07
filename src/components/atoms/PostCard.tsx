import React from 'react';
import { css } from '@emotion/react';
import CopyButton from './CopyButton';
import { Post } from '../../types/post';

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import { BookmarkOutlined } from '@mui/icons-material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

interface AddressProps {
  fullAddress: string;
}
/**
 * Post카드 하단의 주소영역 컴포넌트
 */
function Address({ fullAddress }: AddressProps) {
  const getSimpleAddress = (fullAddress: string) => {
    if (fullAddress) {
      return fullAddress.split(' ').slice(1, 4).join(' ');
    } else {
      return '';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 0.5,
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          <RoomOutlinedIcon fontSize="small" />
        </Typography>
      </Box>
      <Box marginRight={0.5}>
        <Typography variant="body2" color="text.secondary">
          {getSimpleAddress(fullAddress)}
        </Typography>
      </Box>
      <Box>
        <CopyButton text={fullAddress} />
      </Box>
    </Box>
  );
}

interface PostCardProps {
  post: Post;
  handleBookmarkClick: any;
}

function PostCard({ post, handleBookmarkClick }: PostCardProps) {
  const { id, category, title, fullAddress, thumbnail, isBookmarked } = post;

  return (
    <Card sx={{ position: 'relative', borderRadius: '10px' }}>
      {/* 북마크 버튼 */}
      <IconButton
        aria-label="settings"
        sx={{ position: 'absolute', right: 0 }}
        onClick={() => handleBookmarkClick(id)}
      >
        {isBookmarked ? (
          <BookmarkIcon
            sx={{ stroke: '#ffffff', strokeWidth: 1, color: '#FEE500' }}
          />
        ) : (
          <BookmarkOutlined sx={{ stroke: '#ffffff', strokeWidth: 1 }} />
        )}
      </IconButton>
      <CardMedia sx={{ height: 160 }} image={thumbnail} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          css={textOverflowStyle('2')}
        >
          {`[${category}]`} {`${title}`}
        </Typography>
        <Address fullAddress={fullAddress} />
      </CardContent>
    </Card>
  );
}

export default PostCard;

/**
 *
 * @param line ${line}줄까지만 보여주고 그것을 넘는 문장은 말줄임표 처리를 해주는 스타일
 */
const textOverflowStyle = (line: string) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;
