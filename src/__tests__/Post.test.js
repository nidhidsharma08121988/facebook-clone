import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '../components/home-page/Post';

describe('Post', () => {
  beforeEach(() => {
    const post = {
      user: '1',
      postId: '11',
      text: 'The first post',
      imageSrc: ['https://via.placeholder.com/300/09f/fff.png'],
      videoSrc: [],
      comments: [
        {
          userId: '2',
          text: 'Great',
        },
        {
          userId: '3',
          text: 'Wow',
        },
      ],
      likes: [
        {
          user: '2',
          type: 'heart',
        },
        {
          user: '2',
          type: 'like',
        },
      ],
    };

    render(<Post post={post} />);
  });
  it('should display username of the author image and name', () => {
    expect(screen.queryByTestId('post-user-image')).toBeVisible();
    expect(screen.queryAllByTestId('username')).toBeVisible();
  });
  it('should display post', () => {
    expect(screen.queryByTestId('post-content')).toBeVisible();
  });
  it('should display number of likes if more than zero likes are there', () => {
    expect(screen.queryByTestId('likes-number')).toBeVisible();
  });

  it('should display number of comments if more than zero comments are there', () => {
    expect(screen.queryByTestId('comment-number')).toBeVisible();
  });

  it('should display like and comment bar', () => {
    expect(screen.queryByTestId('like-comment-share-bar')).toBeVisible();
  });
});
