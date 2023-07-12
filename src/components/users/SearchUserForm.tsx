import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../common/button/Button";
import classes from './searchForm.module.css';
import { UsersFilter } from "../../types/types";
import { useDispatch } from "react-redux";
import { Action } from "redux";

type SearchUsersForm = {
    searchUsers: string,
    select: string,
}

type Props = {
    getUsers: (currentPage: number, pageSize: number, filter: UsersFilter) => void,
    filter: UsersFilter,
    pageSize: number,
}

const SearchUsersForm: React.FC<Props> = React.memo(({ getUsers, filter, pageSize }) => {
    const { register, handleSubmit } = useForm<SearchUsersForm>({ defaultValues: { 
        searchUsers: filter.filter,
        select: String(filter.selectValue),
    } });

    const dispatch = useDispatch();

    const onFilterChange: SubmitHandler<SearchUsersForm> = (data) => {
        const value = data.select === 'true' ? true : data.select === 'false' ? false : null;
        const obj = {filter: data.searchUsers, selectValue: value};
        dispatch(getUsers(1, pageSize, obj) as unknown as Action);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFilterChange)} className={classes.wrap}>
                <input {...register('searchUsers')} placeholder='Enter name for searching...' />
                <select {...register('select')}>
                    <option value="null">All</option>
                    <option value="true">Only friends</option>
                    <option value="false">Only not friends</option>
                </select>
                <Button>Find</Button>
            </form>
        </div>
    )
})

export default SearchUsersForm;
