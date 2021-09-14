import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux-store/reducers';
import thunk from 'redux-thunk';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('Post Feature', () => {
  beforeEach(() => {
    const res = {
      currentUser: {
        userId: '1',
        userName: 'Nidhi',
        userImage: 'https://via.placeholder.com/300/09f/fff.png',
        friends: ['2', '3'],
      },
      posts: [
        {
          user: '1',
          postId: '11',
          text: 'hello',
        },
        {
          user: '3',
          postId: '31',
          text: 'post',
        },
      ],
    };
    axios.get.mockResolvedValue(res);
    const store = createStore(rootReducer, {}, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('Should display posts on load', () => {
    setTimeout(() => {
      expect(screen.getByText(/hello/gi)).toBeVisible();
    }, 1000);
  });

  test('Should add the post and display it when post is created', () => {
    const createPostArea = screen.getByTestId('new-post-area');
    const input = 'This is my post';
    userEvent.type(createPostArea, input);
    const addPostBtn = screen.getByTestId('add-post-btn');
    fireEvent.click(addPostBtn);
    setTimeout(() => {
      expect(screen.getByText(input)).toBeVisible();
    });
  });
});
