import { render, screen } from '@testing-library/react';
import AddPost from '../components/home-page/AddPost';

describe('AddPost:', () => {
  beforeEach(() => {
    render(<AddPost />);
  });
  afterEach(() => {
    clearTimeout();
  });
  it('should have user image and name along with drop down to select visibility', () => {
    setTimeout(() => {
      expect(screen.queryByTestId('user-visibility')).toBeVisible();
    }, 1000);
  });
  it('should have textarea to input the post', () => {
    expect(screen.queryByTestId('input-post')).toBeVisible();
  });
  it('should have button to input the post', () => {
    expect(screen.queryByTestId('submit-post')).toBeVisible();
  });
});
it('should have icons to add image, tag, location, feeling and more icon', () => {
  expect(screen.queryByTestId('add-to-post-area')).toBeVisible();
});
