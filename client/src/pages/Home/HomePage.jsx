import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from "../../redux/slides/counterSlides"

const HomePage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return(
        <div>
            <div>
                <div>
                    <button aria-label='Increment value' onClick={() => dispatch(increment())}>
                        Increment
                    </button>
                    <span>{count}</span>
                    <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
