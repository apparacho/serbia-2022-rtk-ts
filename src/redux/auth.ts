import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from "../app/store";
import { setToken, removeToken } from '../utils/authToken'

const sliceName = 'auth';

type InitialStateType = {
    isAuthorized: boolean;
    isLoading: boolean;
}


const initialState: InitialStateType = {
    isAuthorized: false,
    isLoading: false,
};

export const loginAsync = createAsyncThunk(
    `${sliceName}/login`,
    async ()  => {
        const response = await loginRequest();
        return response.data;
    }
);


export const authSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthorized = false;
            removeToken();
        },
        loginSuccess: (state) => {
            state.isAuthorized = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload === 'ok') {
                    state.isAuthorized = true;
                    setToken(payload);
                }
            })
            .addCase(loginAsync.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state[sliceName];
export const selectIsAuthorized = (state: RootState) => selectAuth(state).isAuthorized;

// A mock function to mimic making an async request for data
export function loginRequest() {
    return new Promise<{ data: string }>((resolve) =>
        setTimeout(() => resolve({ data: 'ok' }), 500)
    );
}

export default authSlice.reducer;

