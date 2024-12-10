import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from '../utils/http';
import { RootState } from "./store";

const sliceName = 'clients';

type InitialStateType = {
    data: Array<any>;
    isLoading: boolean;
}


const initialState: InitialStateType = {
    data: [],
    isLoading: false,
};


export const loadDataAsync = createAsyncThunk(
    `${sliceName}/loadData`,
    async ()  => {
        const response = await api.get('clients');
        console.log(response);
        return response.data;
    }
);

export const clientsSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadDataAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadDataAsync.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                console.log('fulfilled', payload);
                state.data = payload;
            })
            .addCase(loadDataAsync.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export const selectClients = (state: RootState) => state[sliceName];
export const selectClientsData = (state: RootState) => selectClients(state).data;


export default clientsSlice.reducer;