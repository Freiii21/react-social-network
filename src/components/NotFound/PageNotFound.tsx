import { AppStateType } from "../../redux/redux-store";
import s from "./PageNoteFound.module.css"
import {useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";

export const PageNotFound = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.parent}>
            <div>
                404 Page Not Found
            </div>
        </div>
    )
}