import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 0,
    sort: {
        name: 'rating',
        sort: 'rating'
    },
    currentPage:1
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategotyId(state, action) {
            // console.log('action:',action)
            state.categoryId = action.payload
        },
        setSortId(state,action) {
            // console.log(action.payload.sort)
            state.sort = action.payload
        },
        setCurrentPage(state,action) {
            state.currentPage = action.payload
        }
    }
})

export const { setCategotyId, setSortId, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer