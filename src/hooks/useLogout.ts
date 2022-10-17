import { useDispatch } from 'react-redux';
import { authenticationAction } from 'stores/reducers/authentication';

export function useLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authenticationAction.logout());
  };

  return { handleLogout };
}
