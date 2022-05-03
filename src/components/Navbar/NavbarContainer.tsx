import { connect } from 'react-redux';
import Navbar from './Navbar';
import {AppStateType} from '../../redux/redux-store';
import {InitialStateSidebarType} from '../../redux/sidebar-reducer';

type MapStateToPropsType = {
    state: InitialStateSidebarType
}
type MapDispatchToPropsType = {}
export type NavbarPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        state: state.sidebar
    }
}
// const mapDispatchToProps = () => {};

export const NavbarContainer = connect(mapStateToProps)(Navbar);