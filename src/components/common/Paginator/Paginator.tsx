import React, {useEffect, useState} from 'react';
import s from './Paginator.module.css';
import {ReactComponent as First} from './../../../assets/paginator/first.svg';
import {ReactComponent as Last} from './../../../assets/paginator/last.svg';
import {ReactComponent as Prev} from './../../../assets/paginator/prev.svg';
import {ReactComponent as Next} from './../../../assets/paginator/next.svg';
import {ReactComponent as PrevArray} from './../../../assets/paginator/prevArray.svg';
import {ReactComponent as NextArray} from './../../../assets/paginator/nextArray.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPortionNumber} from '../../../redux/users-reducer';
import {AppStateType} from '../../../redux/redux-store';

type PaginatorPropsType = {
    totalItemssCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    const dispatch = useDispatch();
    const portionNumberFromState = useSelector<AppStateType, number>(state => state.usersPage.currentPortionNumber)

    const portionSize = 15;

    const pagesCount = Math.ceil(props.totalItemssCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount > props.totalItemssCount ? props.totalItemssCount : pagesCount); i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const displayedPages = pages
        .filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
        .map((p,index) => <span key={index}
                                className={props.currentPage === p ? s.selectedPage : s.usual}
                                onClick={(e) => props.onPageChanged(p)}
        >{p}</span>)

    const onFirstPage = () => {
        setPortionNumber(1);
        // dispatch(setCurrentPortionNumber(1))
        props.onPageChanged(1);
    }
    const onLastPage = () => {
        setPortionNumber(portionCount);
        // dispatch(setCurrentPortionNumber(portionCount))
        props.onPageChanged(pagesCount);
    }
    const onPreviousPage = () => {
        props.onPageChanged(props.currentPage - 1)
        if(props.currentPage - 1 < leftPortionPageNumber){
            setPortionNumber(portionNumber - 1)
            // dispatch(setCurrentPortionNumber(portionNumber - 1))
        }
    }
    const onNextPage = () => {
        props.onPageChanged(props.currentPage + 1);
        if(props.currentPage+1 > rightPortionPageNumber){
            setPortionNumber(portionNumber + 1)
            // dispatch(setCurrentPortionNumber(portionNumber + 1))
        }
    }
    const onPreviousArray = () => {
        setPortionNumber(portionNumber - 1)
        // dispatch(setCurrentPortionNumber(portionNumber - 1))
        props.onPageChanged(rightPortionPageNumber - portionSize);
    }
    const onNextArray = () => {
        setPortionNumber(portionNumber + 1)
        // dispatch(setCurrentPortionNumber(portionNumber + 1))
        props.onPageChanged(leftPortionPageNumber + portionSize);
    }

    useEffect(()=>{
        setPortionNumber(portionNumberFromState)
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        dispatch(setCurrentPortionNumber(portionNumber))
        // eslint-disable-next-line
    },[portionNumber])

    return (
        <div className={s.paginatorField}>
            <button onClick={onFirstPage} disabled={props.currentPage <= 1} className={s.button}>
                <First/>
            </button>
            <button onClick={onPreviousArray} disabled={portionNumber <= 1} className={s.button}>
                <PrevArray/>
            </button>
            <button onClick={onPreviousPage} disabled={props.currentPage <= 1} className={s.button}>
                <Prev/>
            </button>
            <div className={s.numbers}>{displayedPages}</div>
            <button onClick={onNextPage} disabled={props.currentPage >= pagesCount} className={s.button}>
                <Next/>
            </button>
            <button onClick={onNextArray} disabled={portionNumber >= portionCount} className={s.button}>
                <NextArray/>
            </button>
            <button onClick={onLastPage} disabled={props.currentPage >= pagesCount} className={s.button}>
                <Last/>
            </button>
        </div>
    )
}