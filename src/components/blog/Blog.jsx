import React from "react";
import "./Blog.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'


const Blog = () => {
  const blogs = useSelector((state) => state.blogData.blogData)
  console.log("the blog data coming from redu: ", blogs)
  return (
    <section className="blogPage">

      <div className="blogContainer">

        {/* Header */}
        <div className="blogHeader">
          <div>
            <span className="blogTag">Our Blog</span>

            <h1>
              Knowledge for your
              <span> Quranic journey.</span>
            </h1>
          </div>

          <p>
            Explore articles, Islamic guidance, Quranic reflections,
            and useful resources to help you learn and grow.
          </p>

        </div>


        {/* Blog Grid */}
        <div className="blogGrid">

          {/* Blog Card */}
          {blogs.map((blog) =>(
          <article key={blog._id} className="blogCard">

            {/* <div className="blogImage">
              <img
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80"
                alt="Quran"
              />
            </div> */}

            <div className="blogContent">

              <div className="blogMeta">
                <span>{blog.catagory}</span>
                <small>{blog.date}</small>
              </div>

              <h2>
                {blog.tittle} <br />~{blog.author}
              </h2>

              <p className="bodyIncard">
                {blog.body}
              </p>

              <Link to={`/blog/${blog._id}`} className="readMore">
                Read Article <span>→</span>
              </Link>

            </div>

          </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Blog;