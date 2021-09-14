import { getUser } from '../../network/api_calls';

export const getUserAction = id => async dispatch => {
  const user = await getUser();
  return user;
};
