import React, { useState } from 'react';
import App from '../App';
import CardFlip from './CardFlip';


// Just like with Redux, you need to set an initial state
const initalState = {
    state: 'flipped'
};

//With Redux we used createStore(), with contect use React.CreateContext()
export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initalState);

    return (
        <Context.Provider value={[state, setState]}>{ children }</Context.Provider>
    )
}

export default Store;