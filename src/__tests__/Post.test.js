import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from '../components/home-page/Post';
import axios from 'axios';

jest.mock('axios');
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
    const user = {
      userId: '1',
      userName: 'Nidhi',
      userImg: 'https://via.placeholder.com/300/09f/fff.png',
      friends: ['2', '3'],
    };
    axios.get.mockResolvedValue(user);
    render(<Post post={post} />);
  });

  afterEach(() => {
    clearTimeout();
  });

  it('should display username of the author image and name', () => {
    setTimeout(() => {
      expect(screen.queryByTestId('post-user-image')).toBeVisible();
      expect(screen.queryByTestId('username')).toBeVisible();
    }, 1000);
  });

  it('should display post', () => {
    setTimeout(() => {
      expect(screen.queryByTestId('post-content')).toBeVisible();
    }, 1000);
  });
  it('should display number of likes', () => {
    setTimeout(() => {
      expect(screen.queryByTestId('likes-number')).toBeVisible();
    }, 1000);
  });

  it('should display number of comments', () => {
    setTimeout(() => {
      expect(screen.queryByTestId('comments-number')).toBeVisible();
    }, 1000);
  });

  it('should display like, comment, share bar', () => {
    expect(screen.queryByTestId('like-comment-share-bar')).toBeVisible();
  });
});
