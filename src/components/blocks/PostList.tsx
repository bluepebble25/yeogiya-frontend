import React from 'react';
import PostCard from '../atoms/PostCard';
import { Grid } from '@mui/material';
import { Post } from '../../types/post';

interface PostListProps {
  posts: Post[];
  handleBookmarkClick: any;
}

function PostList({ posts, handleBookmarkClick }: PostListProps) {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post.id.toString()}>
          <PostCard post={post} handleBookmarkClick={handleBookmarkClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
