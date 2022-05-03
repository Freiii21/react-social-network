import React from 'react';
import s from './Paginator.module.css';


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount > 15 ? 15 : pagesCount); i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => <span
                className={props.currentPage === p ? s.selectedPage : s.usual}
                onClick={(e) => props.onPageChanged(p)}
            >{p}</span>)}
            {pagesCount > 15 ? <span> ... {pagesCount}</span> : null}
        </div>
    )
}