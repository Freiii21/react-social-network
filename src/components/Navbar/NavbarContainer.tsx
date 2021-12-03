import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import {AppStateType} from '../../redux/redux-store';

// type NavbarContainerPropsType = {
//     // store: NewStoreType
// }
//
// const NavbarContainer = (props: NavbarContainerPropsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().sidebar;
//                     return (
//                       <Navbar state={state}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state:AppStateType) => {
    return {
        state: state.sidebar
    }
}
const mapDispatchToProps = () => {};


export const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);