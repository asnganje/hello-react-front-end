import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/greetings')
      .then((resp) => resp.json())
      .then((result) => result);
    return response;
  },
);

const initialState = {
  message: '',
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload.message;
    });
  },
});

export default greetingsSlice.reducer;
