import React from 'react';
import { useAuth } from "../../hooks/useAuth";

export const TestViewAuth = React.memo(() => {
    const { isAuthorized, onLogin, onLogout } = useAuth();
    console.log('TestViewAuth render', isAuthorized);
    return (
        <div className={'test-view-auth'}>
            <div className={'test-view-auth__header'}> <h1>Test View Auth</h1> </div>
            <div className={'test-view-auth__controls'}>
                <button className={'test-view-auth__login-btn'} onClick={() => onLogin()}>Login</button>
                <button className={'test-view-auth__logout-btn'} onClick={() => onLogout()}>Logout</button>
            </div>
            <div className={'test-view-auth__content'} test-id={'test-content'}>
                isAuthorized : {isAuthorized ? 'Вы авторизованы' : ' - '}
            </div>

        </div>
    );
});