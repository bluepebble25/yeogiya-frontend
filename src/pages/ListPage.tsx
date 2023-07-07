import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import PostList from '../components/blocks/PostList';
import { Post } from '../types/post';

function ListPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        category: '식당',
        title: `코엑스 근처 레스토랑 '오크우드 프리미어 코엑스 센터
      오크레스토랑' 모임 장소로 추천합니다!`,
        fullAddress:
          '서울 강남구 테헤란로87길 46 오크우드 호텔 5층 오크레스토랑',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: true,
      },
      {
        id: 2,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 3,
        category: '공원',
        title: `용산 가족공원 나들이~ 문화재와 예쁜 꽃들을 함께 볼 수 있어요`,
        fullAddress: '서울 용산구 서빙고로 137 국립중앙박물관',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 4,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 5,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 6,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: true,
      },
      {
        id: 7,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 8,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 9,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
      {
        id: 10,
        category: '카페',
        title: `디저트가 맛있는 서울 카페`,
        fullAddress: '서울 성동구 서울숲9길 3 B1~2F',
        thumbnail:
          'https://p0.pikist.com/photos/697/852/pool-swimming-pool-water-blue-turquoise-texture-clear-wet-ripples.jpg',
        isBookmarked: false,
      },
    ];
    setPosts(data);
  }, []);

  const handleBookmarkClick = (id: Number) => {
    setPosts(
      posts.map((post: Post) =>
        post.id === id ? { ...post, isBookmarked: !post.isBookmarked } : post
      )
    );
  };

  return (
    <Container maxWidth="xl">
      {posts.length !== 0 && (
        <PostList posts={posts} handleBookmarkClick={handleBookmarkClick} />
      )}
    </Container>
  );
}

export default ListPage;
