
const tokenKey = 'access_token';

export const getToken = (): string | null => {
    return localStorage.getItem(tokenKey);
};

export const setToken = (token: string): void => {
    localStorage.setItem(tokenKey, token);
};

export const removeToken = (): void => {
    localStorage.removeItem(tokenKey);
};