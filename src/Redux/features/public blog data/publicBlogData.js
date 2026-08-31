import { createSlice } from '@reduxjs/toolkit'

export const publicBlogDataSlice = createSlice({
  name: 'PublicBlog',
  initialState: {
    blogData: []
  },
  reducers: {
    storeBlogs: (state, action) => {
        state.blogData.push(...action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { storeBlogs } = publicBlogDataSlice.actions

export default publicBlogDataSlice.reducer