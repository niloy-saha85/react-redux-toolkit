import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enquiry: [],
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    addEnquiry: (state, action) => {
      console.log(state.enquiry);
      console.log(action.payload);
      return {
        ...state,
        enquiry: [...state.enquiry, action.payload],
      };
    },
    setEnquiry: (state, action) => {
      if (!state.enquiry.length) state.enquiry = action.payload;
    },
  },
});

export const { addEnquiry, setEnquiry } = enquirySlice.actions;

export const getEnquiry = () => async (dispatch) => {
  const resp = await fetch('http://localhost:5000/enquiry');
  const data = await resp.json();
  dispatch(setEnquiry(data));
};

export default enquirySlice.reducer;
