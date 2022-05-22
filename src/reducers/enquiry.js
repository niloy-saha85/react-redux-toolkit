import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enquiry: [],
  formSubmitted: false,
  status: {
    loading: false,
    error: false,
    errorMsg: null,
  },
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
      state.enquiry = action.payload;
    },
    setLoadingStatus: (state, action) => {
      return {
        ...state,
        status: {
          ...state.status,
          loading: action.payload,
        },
      };
    },
    setErrorStatus: (state, action) => {
      return {
        ...state,
        status: {
          ...state.status,
          error: true,
          errorMsg: action.payload,
        },
      };
    },
    setFormSubmitted: (state, action) => {
      return {
        ...state,
        formSubmitted: action.payload
      }
    }
  },
});

export const selectEnquiry = (state) => state.enquiry.enquiry;
export const selectEnquiryStatus = (state) => state.enquiry.status;
export const selectEnquiryFormSubmitted = (state) => state.enquiry.formSubmitted;

export const { addEnquiry, setEnquiry, setErrorStatus, setLoadingStatus, setFormSubmitted } = enquirySlice.actions;

export const getEnquiry = () => async (dispatch) => {
  const resp = await fetch("http://localhost:5000/enquiry");
  const data = await resp.json();
  dispatch(setEnquiry(data));
};

export default enquirySlice.reducer;
