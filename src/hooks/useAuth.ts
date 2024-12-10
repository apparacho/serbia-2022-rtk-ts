import { useAppSelector, useAppDispatch } from './index';
import { selectIsAuthorized, logout, loginAsync } from '../redux/auth';

export const useAuth = () => {
    const isAuthorized = useAppSelector(selectIsAuthorized);
    const dispatch = useAppDispatch();
    const onLogout = () => dispatch(logout());
    const onLogin = () => dispatch(loginAsync());

    return { isAuthorized, onLogout, onLogin };
}

