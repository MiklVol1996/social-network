import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import Users from './Users';
import { getUsersFirstTime } from "../../redux/usersPageReducer";
import { giveCurrentPage, givePageSize, giveFilter } from "../../redux/selectors";
import { useEffect } from "react";
import { Action } from "redux";
import { useNavigate } from "react-router-dom";


const UsersContainer: React.FC = React.memo(() => {

    const currentPage = useSelector(giveCurrentPage);
    const  pageSize = useSelector(givePageSize);
    const  filter = useSelector(giveFilter);
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        let term = filter.filter? filter.filter : '';
        const path = new URLSearchParams( window.location.search.substring(1));
        let finalCurrentPage = path.get('page') ? path.get('page') : currentPage;
        let finalTerm = path.get('term') ? path.get('term') : term;
        let finalSelectValue = path.get('friend') ? path.get('friend') : filter.selectValue;
        dispatch(getUsersFirstTime(Number(finalCurrentPage), pageSize, 
        {filter: finalTerm as string, selectValue: finalSelectValue as boolean | null}) as unknown as Action);
    }, []);

    useEffect(() => {
        history(`/users?term=${filter.filter}&friend=${filter.selectValue}&page=${currentPage}`)
    }, [filter, currentPage]);
    

    return (
        <Users currentPage={currentPage} pageSize={pageSize}  filter={filter}/>
    )

})

export default UsersContainer;