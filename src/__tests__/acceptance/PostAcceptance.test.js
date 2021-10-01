import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux-store/reducers';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { pageTypes } from '../../redux-store/actions/types';
import * as networkCalls from '../../network/api_calls';

const posts = [
  {
    user: '1',
    postId: '11',
    text: 'hello',
  },
];

const user = {
  userId: '1',
  userName: 'Nidhi',
  userImage: 'https://via.placeholder.com/300/09f/fff.png',
  friends: ['2', '3'],
};

describe('Post Feature', () => {
  beforeEach(() => {
    const initState = {
      posts: [],
      currentUser: {},
      currentPage: pageTypes.HOME,
    };

    const store = createStore(
      rootReducer,
      { initState },
      applyMiddleware(thunk)
    );

    const mockLoadUser = jest.spyOn(networkCalls, 'loadUser');
    mockLoadUser.mockImplementation(() => Promise.resolve(user));

    const mockLoadPosts = jest.spyOn(networkCalls, 'loadPosts');
    mockLoadPosts.mockImplementation(() => Promise.resolve(posts));

    const mockGetUser = jest.spyOn(networkCalls, 'getUser');
    mockGetUser.mockImplementation(() => Promise.resolve(user));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test('Should display posts on load', async () => {
    await waitFor(() =>
      expect(screen.queryAllByTestId('post-container').length).toBeGreaterThan(
        0
      )
    );
  });

  test('Should add the post and display it when post is created', () => {
    const createPostArea = screen.getByTestId('input-post');
    const input = 'This is my post';
    userEvent.type(createPostArea, input);
    const addPostBtn = screen.getByTestId('add-post-btn');
    fireEvent.click(addPostBtn);
    expect(screen.getByText(input)).toBeVisible();
  });

  test('should have edit and delete option when ellipsis icon is clicked of a post', async () => {
    await waitFor(() => {
      const postContainer = screen.getAllByTestId('post-container');
      expect(postContainer).toBeTruthy();
      const ellipses = screen.getAllByTestId('post-more-option');
      const more = ellipses[0];
      fireEvent.click(more);
      expect(screen.getByTestId('edit-post')).toBeVisible();
      expect(screen.getByTestId('delete-post')).toBeVisible();
    });
  });
});
