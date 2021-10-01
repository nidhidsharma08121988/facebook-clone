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

  it('should display username of the author image and name', () => {
    expect(screen.queryByTestId('post-user-image')).toBeVisible();
    expect(screen.queryByTestId('username')).toBeVisible();
  });

  it('should display post', () => {
    expect(screen.queryByTestId('post-content')).toBeVisible();
  });
  it('should display number of likes', () => {
    expect(screen.queryByTestId('likes-number')).toBeVisible();
  });

  it('should display number of comments', () => {
    expect(screen.queryByTestId('comments-number')).toBeVisible();
  });

  it('should display share option', () => {
    expect(screen.queryByTestId('share')).toBeVisible();
  });
});
