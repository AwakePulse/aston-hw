import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {User} from "../User.types.ts";
import {RootState} from "../../../../app/providers/store";

const usersAdapter = createEntityAdapter<User>({
    selectId: (user: User) => user.id,
    sortComparer: (a, b) => b.id - a.id,
})

const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        addUser: usersAdapter.addOne,
        setUsers: usersAdapter.setAll,
        updateUser: usersAdapter.updateOne,
        removeUser: usersAdapter.removeOne
    }
})

export const {
    addUser,
    setUsers,
    updateUser,
    removeUser
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
export const usersSelectors = usersAdapter.getSelectors((state: RootState) => state.users);