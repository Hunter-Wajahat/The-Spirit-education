import { configureStore } from '@reduxjs/toolkit'
import blogDataReducer from './features/public blog data/publicBlogData'
import  publicBlogDataByIdReducer  from './features/public blog data/blogDataById'

export default configureStore({
    reducer: {
        blogData: blogDataReducer,
        blogDataById: publicBlogDataByIdReducer,
    }
})