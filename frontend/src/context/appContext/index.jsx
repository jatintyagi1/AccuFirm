import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialState, contextReducer } from './reducer';
import contextActions from './actions';

const appContext = createContext();

function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(contextReducer, initialState);
    const value = useMemo(() => [state, dispatch], [state]);
    return <appContext.Provider value={value}>{children}</appContext.Provider>
}

function useAppContext() {
    const context = useContext(appContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    const [state, dispatch] = context;
    const appContextAction = contextActions(dispatch);
    // const appContextSelector = contextSelectors(state);
    return { state, appContextAction };
}


export { AppContextProvider, useAppContext };