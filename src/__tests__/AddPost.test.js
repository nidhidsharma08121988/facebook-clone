import { render, screen, fireEvent } from '@testing-library/react';
import AddPost from '../components/home-page/AddPost';
import { Provider } from 'react-redux';
import rootReducer from '../redux-store/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('AddPost:', () => {
  beforeEach(() => {
    const currentUser = {
      userId: '1',
      userName: 'Nidhi Sharma',
      userImg: 'https://via.placeholder.com/300',
      friends: ['2', '3'],
    };
    const store = createStore(
      rootReducer,
      { currentUser: currentUser },
      applyMiddleware(thunk)
    );

    render(
      <Provider store={store}>
        <AddPost />
      </Provider>
    );
  });

  it('should have user image and name along with drop down to select visibility', () => {
    expect(screen.queryByTestId('user-visibility')).toBeVisible();
  });

  it('should have textarea to input the post', () => {
    expect(screen.queryByTestId('input-post')).toBeVisible();
  });
  it('should have button to input the post', () => {
    expect(screen.queryByTestId('submit-post')).toBeVisible();
  });

  it('should have icons to add image, tag, location, feeling and more icon', () => {
    expect(screen.queryByTestId('add-to-post-area')).toBeVisible();
  });

  it('should cancel adding post if cancel', () => {
    const createPostArea = screen.getByTestId('input-post');
    const input = 'This is my post';
    userEvent.type(createPostArea, input);
    const deleteBtn = screen.getByTestId('cancel-post');
    fireEvent.click(deleteBtn);
    expect(createPostArea.target.value).toBe('');
  });
});
