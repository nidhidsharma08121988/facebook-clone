import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux-store/reducers';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

jest.mock('axios');

const getPosts = () => [
  {
    user: '1',
    postId: '11',
    text: 'hello',
  },
];

const getUser = () => ({
  userId: '1',
  userName: 'Nidhi',
  userImage: 'https://via.placeholder.com/300/09f/fff.png',
  friends: ['2', '3'],
});

describe('Post Feature', () => {
  beforeEach(() => {
    const store = createStore(rootReducer, {}, applyMiddleware(thunk));

    jest.spyOn(axios, 'get').mockImplementation(url => {
      const api = 'http://localhost:5000';
      if (url === `${api}/posts`) {
        return getPosts();
      } else {
        return getUser();
      }
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterEach(() => {
    clearTimeout();
  });

  test('Should display posts on load', async () => {
    await waitFor(() => {
      expect(screen.queryAllByTestId('post-container').length).toBe(1);
    });
  });

  test('Should add the post and display it when post is created', () => {
    const createPostArea = screen.getByTestId('input-post');
    const input = 'This is my post';
    userEvent.type(createPostArea, input);
    const addPostBtn = screen.getByTestId('add-post-btn');
    fireEvent.click(addPostBtn);
    expect(screen.getByText(input)).toBeVisible();
  });

  test('should have edit and delete option when ellipsis icon is clicked of a post', () => {
    const postContainers = screen.getAllByTestId('post-container');
    expect(postContainers.length).toBe(2);
    expect(screen.getByRole('list')).toContain('Edit');
    expect(screen.getAllByRole('list')).toContain('Delete');
  });
});
