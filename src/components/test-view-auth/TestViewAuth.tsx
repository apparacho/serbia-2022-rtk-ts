import React from 'react';
import { useAuth } from "../../app/hooks/useAuth";

export const TestViewAuth = () => {
    const { isAuthorized, onLogin, onLogout } = useAuth();
    console.log(isAuthorized);
    return (
        <div>
            <div> <h1>Test View Auth</h1> </div>
            <div>
                <button onClick={() => onLogin()}>Login</button>
                <button onClick={() => onLogout()}>Logout</button>
            </div>
            <div>
                isAuthorized : {isAuthorized ? 'Вы авторизованы' : ' - '}
            </div>

        </div>
    );
}