import { createSelector } from 'reselect';
import {AppStateType} from './redux-store';

export const getUsers = (state:AppStateType) => {
    return state.usersPage.users;
}
//Reselector Exapmple
//Where getUsers is a simple selector and users is a result of getUsers and at the same moment a Dependency.
//If the users has not change from the last run, then reselector will return the previous value.
//For using our getUsersSuperSelector we have to call it like getUsersSuperSelector(state), because the simple
//selector requires "state".
//
// const getUsersSuperSelector = createSelector(getUsers, (users) => {
//     return users.filter(u=>true);
// })

export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state:AppStateType) => {
    return state.usersPage.followingInProgress;
}