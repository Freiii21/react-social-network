import React, { useState } from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalItemssCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
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

    return (
        <div>
            <button onClick={() => { setPortionNumber(portionNumber -1)}}
                    disabled={portionNumber <= 1}
                    className={s.button}>PREV</button>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
                .map((p,index) => <span key={index}
                className={props.currentPage === p ? s.selectedPage : s.usual}
                onClick={(e) => props.onPageChanged(p)}
            >{p}</span>)}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber +1)}} className={s.button}>NEXT</button>}
        </div>
    )
}