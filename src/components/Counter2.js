import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { increment, decrement } from "../redux/counterSlice";

export default function Counter2() {

    const dispatch = useDispatch()

    return (
        <div>
        <h1>This is Counter2</h1>
        <button onClick={() => dispatch(increment())} >Increment</button>
        <button onClick={() => dispatch(decrement())} >Decrement</button>
        </div>
    );
}
