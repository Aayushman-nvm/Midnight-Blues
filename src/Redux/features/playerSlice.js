import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTrack: null,
    isPlaying: false,
    position: 0,
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        playSong: (state, action) => {
            state.currentTrack = action.payload;
            state.isPlaying = true;
            state.position = 0;
        },
        stopSong: (state, action)=>{
            state.isPlaying = false;
            state.position = 0;
            state.currentTrack = null;
        }
    },
});

export const { playSong, stopSong }= playerSlice.actions;
export default playerSlice.reducer;