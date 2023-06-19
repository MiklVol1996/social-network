import React, { useMemo } from 'react';
import classes from './pagination.module.css';

const Pagination = ({ currentPage, numOfPages, swithPage,
    getUsers, pageSize }) => {


    let pages = useMemo(() => {
        let arr = [];
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

    const getClassName = (p, curPage) => {
       const name = p === curPage ? classes.active : classes.usual;
       return name;
    }

    return (
        <div className={classes.pages}>
            <button className={classes.back} onClick={() => swithPage('-')}>
                Prev
            </button>
            {pages.map((p, i) => {
                return (
                    <span key={i} className={getClassName(+p, currentPage)}
                        onClick={() => getUsers(+p, pageSize)}>{p}</span>
                )
            })}
            <button className={classes.ahead} onClick={() => swithPage('+')}>
                Next
            </button>
        </div>
    )
}

export default Pagination;