import React, { createContext, useContext, useReducer } from 'react';

// creating the data layer
export const StateContext = createContext();

// wrapping the app with data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// function for pulling from datalayer
export const useStateValue = () => useContext(StateContext); 