import { createSlice } from '@reduxjs/toolkit'

export const publicBlogDataByIdSlice = createSlice({
  name: 'PublicBlogById',
  initialState: {
    blogDataById: []
  },
  reducers: {
    storeBlogsById: (state, action) => {
        state.blogDataById.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeBlogsById } = publicBlogDataByIdSlice.actions

export default publicBlogDataByIdSlice.reducer