import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0, //count by default is 0 here
}

export const counterSlice = createSlice({//the createSlice function taking in an object and the object takes in a bunch of properties
  name: 'counter',
  initialState, //this is calling the object in line 3, the count is 0
  reducers: {//this is an object which containes the functions that can change the sate
    //all of these functions in this reducer are called actions
    increment: (state/*state is basically the initialState*/) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions//.actions destructors the counterSlice which we called in line 7

export default counterSlice.reducer//we use .reducer so we can export our slice and pass it in our redux store so we can access the slice from our store