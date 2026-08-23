import React, {useState, useEffect} from "react";
import "./SingleBlog.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const SingleBlog = () => {
    const [blogData, setblogData] = useState([])
    const { blogid } = useParams()
    
    useEffect(() => {
        async function getBlogById() {
            
            const url = `${import.meta.env.VITE_SERVER_URL}/api/single_blog`;
            const payload = blogid;
            const response = await axios.get(url, payload)
            setblogData(response.data)
            console.log(response.data)
        }
        getBlogById()
    }, [blogid])
    


    const date = new Date(blogData.date);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months start at 0
    const year = date.getFullYear();
    console.log(`${day} ${month} ${year}`)

    return (
        <>
            


                <main className="singleBlog">

                    <div className="singleBlogContainer">

                        {/* Article Header */}
                        <header className="singleBlogHeader">

                            <span className="singleBlogCategory">
                                {blogData.catagory}
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
                                Category: <strong>General</strong>
                            </span>

                            <span>
                                Written by <strong>Saqib Syed</strong>
                            </span>

                        </div>

                    </div>

                </main>

        </>
    );
};

export default SingleBlog;