import React, {useState, useEffect} from "react";
import "./SingleBlog.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeBlogsById } from "../../Redux/features/public blog data/blogDataById";
import axios from "axios";
import Loader from "../loader/Loader";

const SingleBlog = () => {
    const { blogid } = useParams()
    const Dispatch = useDispatch();
    const theBlogData = useSelector((state)=> state.blogDataById.blogDataById
)
    
    useEffect(() => {
        async function getBlogById() {
            const url = `${import.meta.env.VITE_SERVER_URL}/api/single_blog`;
            const response = await axios.get(url,{
                params: {
                    blogId: blogid,
                }
            })
            Dispatch(storeBlogsById(response.data))
            
        }
        getBlogById()
    }, [blogid])

    if (!theBlogData[0]) {
        return <main className="singleBlog"><Loader/></main>;
    }

    const date = new Date(theBlogData[0].date);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months start at 0
    const year = date.getFullYear();

    return (
        <>
            

            {theBlogData.map(blogData => (  
                <main key={blogData._id} className="singleBlog">

                    <div className="singleBlogContainer">

                        {/* Article Header */}
                        <header className="singleBlogHeader">

                            <span className="singleBlogCategory">
                                
                            </span>

                            <h1>
                               {blogData.tittle}
                            </h1>

                            <p className="singleBlogIntro">
                                {blogData.body}
                            </p>

                            <div className="singleBlogMeta">

                                <div>
                                    <span>Written by</span>
                                    <strong>{blogData.author}</strong>
                                </div>

                                <div className="metaDivider"></div>

                                <div>
                                    <span>Published</span>
                                    <strong>{`${day}/${month}/${year}`}</strong>
                                </div>

                            </div>

                        </header>


                        {/* Article */}
                        <article className="singleBlogArticle">

                            <p>
                                Learn and grow.
                            </p>

                        </article>


                        {/* Bottom */}
                        <div className="singleBlogBottom">

                            <span>
                                Category: <strong>{blogData.catagory}</strong>
                            </span>

                            <span>
                                Written by <strong>{blogData.author}</strong>
                            </span>

                        </div>

                    </div>

                </main>
                ))}

        </>
    );
};

export default SingleBlog;