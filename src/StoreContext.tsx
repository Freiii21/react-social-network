import React from 'react';
import {NewStoreType} from './App';

const StoreContext = React.createContext({} as NewStoreType);

export type ProviderPropsType = {
    store: NewStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;