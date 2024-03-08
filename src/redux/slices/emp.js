
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dispatch } from "../store";
const initialState = {
  isLoading: false,
  error: null,
  postData: [],
  empData: [],
  deletePostData: [],
};

const slice = createSlice({
  name: "emp",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.postData.push(action.payload);
    },

    getEmpSuccess(state, action) {
              state.isLoading = false;
              state.empData = action.payload;
            },
            getEditData(state, action) {
                state.userData = action.payload;
              },
              getDeleteData(state, action) {
                state.deletePostData = action.payload;
              },
  },
});

export default slice.reducer;

export function getPostData(data) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts", // Use a valid POST endpoint
        data
      );
      console.log(response.data,"fhkdfgkdg"); // Log response data
      dispatch(slice.actions.getPostSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}



export function getEmp() {
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(slice.actions.getEmpSuccess(response.data));
        console.log(response.data,"iuryei")
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    
    };
  }

  export function deleteUsers(id) {
    console.log("id", id);
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(slice.actions.getDeleteData(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }

  export function EditUsers(id) {
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(slice.actions.getEditData(response.data.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  