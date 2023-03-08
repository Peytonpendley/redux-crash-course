import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostByIdQuery } from "../redux/postSlice";

export default function Counter() {

    const count = useSelector(state => state.counter.count)
    //counter is the object and then we are specifying the object to specifically the count

    const dispatch = useDispatch()

    const { data, isLoading, isError } = useGetPostByIdQuery(1)

  return (
    <div>
        {JSON.stringify(data)}
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment by amount</button>
    </div>
  );
}
