import React, { useMemo } from 'react';
import classes from './pagination.module.css';
import { UsersFilter } from '../../../types/types';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

type Props = {
    currentPage: number,
    numOfPages: number,
    pageSize: number,
    filter: UsersFilter,
    swithPage: (str: string) => void,
    getUsers: (pageNumber: number, pageSize: number, filter: UsersFilter) => void,
}

const Pagination: React.FC<Props> = React.memo(({ currentPage, numOfPages, swithPage,
    getUsers, pageSize, filter }) => {

    const dispatch = useDispatch();

    let pages = useMemo(() => {
        let arr = [] as Array<string>;
        let i = currentPage - 5 <= 0 ? 1 : currentPage - 5;
        let max = i + 10;
        for (; i <= max; i++) {
            if (i > numOfPages) {
                break;
            }
            arr.push(`${i} `);
        }
        return arr;
    }, [currentPage, numOfPages]);

    const getClassName = (p: number, curPage: number): string => {
        return p == curPage ? classes.active : classes.usual;
    }

    const onPageClick = (p: number) => {
        dispatch(getUsers(p, pageSize, filter) as unknown as Action)
    }

    return (
        <div className={classes.pages}>
            <button className={classes.back} onClick={() => swithPage('-')}>
                Prev
            </button>
            {pages.map((p, i) => {
                return (
                    <span key={i} className={getClassName(+p, currentPage)}
                        onClick={() => onPageClick(+p)}>{p}</span>
                )
            })}
            <button className={classes.ahead} onClick={() => swithPage('+')}>
                Next
            </button>
        </div>
    )
})

export default Pagination;

