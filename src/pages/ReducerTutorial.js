import React, { useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { myNumber: state.myNumber+1, showText: state.showText }
        case "toggleShowText":
            return { myNumber: state.myNumber, showText: !state.showText }
        default:
            return state;
    }

};

const ReducerTutorial = () => {

    const [state, dispatch] = useReducer(reducer, { myNumber: 0, showtext: true });

    
    return (
        <div className="container">
            <div className="py-3">
                <h1>useReducer Page</h1>
                <div>{state.myNumber}</div>
                <div><button onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" });
                }}>click me</button></div>
                <div>{state.showText && <p>Hey!!</p>}</div>
            </div>
        </div>
    );
};

export default ReducerTutorial;