import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';

type NavbarContainerPropsType = {
    // store: NewStoreType
}

const NavbarContainer = (props: NavbarContainerPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().sidebar;
                    return (
                      <Navbar state={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;