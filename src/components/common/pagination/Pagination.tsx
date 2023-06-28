import React, { useMemo } from 'react';
import classes from './pagination.module.css';

type Props = {
    currentPage: number,
    numOfPages: number,
    pageSize: number,

    swithPage: (str: string) => void,
    getUsers: (pageNumber: number, pageSize: number) => void,
}

const Pagination: React.FC<Props> = ({ currentPage, numOfPages, swithPage,
    getUsers, pageSize }) => {


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
        return  p === curPage ? classes.active : classes.usual;
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