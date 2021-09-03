import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/layout/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux-store/reducers';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');

describe('Post Feature', () => {
  beforeEach(() => {
    const res = {
      currentUser: {
        userId: '1',
        userName: {
          first: 'Nidhi',
          last: 'Sharma',
        },
        userimg: 'https://via.placeholder.com/300/09f/fff.png',
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
        <Home />
      </Provider>
    );
  });
  test('Should display posts on load', () => {
    setTimeout(() => {
      expect(screen.getByText(/hello/gi)).toBeVisible();
    }, 1000);
  });
});
