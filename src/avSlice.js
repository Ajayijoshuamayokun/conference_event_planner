    import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://pixabay.com/photos/projector-audiovisual-auditorium-6760352/",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/photos/isolated-pa-speaker-speaker-3737329/",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/photos/microphone-sound-audio-music-micro-4328055/",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/photos/mockup-whiteboard-hand-write-4070709/",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/photos/signpost-waypoint-board-sign-2570250/",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;