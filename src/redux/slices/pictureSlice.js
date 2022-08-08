import { createSlice } from "@reduxjs/toolkit";
import room from '../../image/room.jpg';
import park from '../../image/park.jpg';
import roomJson from './options.json';
import parkJson from './options2.json';

export const IMAGE_TYPE = {
    room: 'ROOM',
    park: 'PARK',
} 


const initialState = {
    start: false,
    notFoundItems: [],
    img: null,
    jsonOptions: null,
    choosenImgType: null,
}

export const pictureSlice = createSlice({
    name: 'pictureSlice',
    initialState,
    reducers: {
        found: (state, { payload: idFound }) => {
            state.notFoundItems = state.notFoundItems.filter(({ id }) => id !== idFound)
            if(state.notFoundItems.length===0){
                state.finish=true;
            };
        },
        start: (state) => {
            state.start = true;
        },
        stop: (state) => {
            state.start = false;
            state.choosenImgType = null;
        },
        chooseRoom: (state) => {
            state.notFoundItems = roomJson;
            state.jsonOptions = roomJson;
            state.img = room;
            state.choosenImgType = IMAGE_TYPE.room;
        },
        choosePark: (state) => {
            state.notFoundItems = parkJson;
            state.jsonOptions = parkJson;
            state.img = park;
            state.choosenImgType = IMAGE_TYPE.park;
        },
    },
})

export const { found, start, chooseRoom, choosePark, stop } = pictureSlice.actions;
export default pictureSlice.reducer;