import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import Loader from "../loader/Loader";
import { useForm } from "react-hook-form"

const AdminDashboard = () => {
  const [authorData, setauthorData] = useState()
  const [loading, setloading] = useState()
  const [formLoading, setformLoading] = useState()
  const [formData, setFormData] = useState({
    blogimg: '',
    title: '',
    author: '',
    catagory: '',
    body: '',
  })
  const [allBlogs, setallBlogs] = useState()


  useEffect(() => {
    async function getauth() {
      setloading(false)
      const url = `${import.meta.env.VITE_SERVER_URL}/api/my_dashboard`;
      const response = await axios.get(url, { withCredentials: true })
      console.log(response.data)
      setauthorData(response.data)
      setloading(response.data.admin)

    }
    getauth()

    async function getAllBlogs() {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/blogs_to_author`, { withCredentials: true })
      setallBlogs(response.data)

    }
    getAllBlogs()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Updates only the modified field
    }));
  };


  // Handle form submission
  const handleSubmit = async (event) => {
    setformLoading(true)
    event.preventDefault();

    console.log('Submitted Data:', formData);
    const url = `${import.meta.env.VITE_SERVER_URL}/api/post_blog`
    const response = await axios.post(url, formData, {
      withCredentials: true
    })
    setformLoading(false)
    console.log("posted?: ", response.data)
  };

  if (!loading) {
    return <h1><Loader /></h1>
  }
  return (
    <div className="adminDashboard">

      {/* Sidebar */}
      <aside className="adminSidebar">

        <div className="adminLogo">
          <span>Q</span>

          <div>
            <h2>Spirit Education</h2>
            <p>Admin Panel</p>
          </div>
        </div>


        <nav className="adminNav">

          <a href="#" className="adminNavItem active">
            <span>▦</span>
            Dashboard
          </a>

          <a href="#" className="adminNavItem">
            <span>✎</span>
            Blogs
          </a>

          <a href="#" className="adminNavItem">
            <span>＋</span>
            New Blog
          </a>

          <a href="#" className="adminNavItem">
            <span>▤</span>
            Categories
          </a>

        </nav>


        <div className="adminSidebarBottom">

          <a href="#" className="adminNavItem">
            <span>⚙</span>
            Settings
          </a>

          <a href="#" className="adminNavItem logoutItem">
            <span>↪</span>
            Logout
          </a>

        </div>

      </aside>


      {/* Main */}
      <main className="adminMain">

        {/* Header */}
        <header className="adminHeader">

          <div>
            <p className="adminGreeting">
              Welcome back
            </p>

            <h1>
              Dashboard
            </h1>
          </div>


          <div className="adminProfile">

            <div className="adminAvatar">
              A
            </div>

            <div>
              <strong>{authorData.username}</strong>
              <span>Administrator</span>
            </div>

          </div>

        </header>


        {/* Statistics */}
        <section className="adminStats">

          <div className="statCard">
            <div className="statIcon">✎</div>

            <div>
              <span>Total Blogs</span>
              <strong>{allBlogs.length}</strong>
            </div>
          </div>


          {/* <div className="statCard">
            <div className="statIcon">◷</div>

            <div>
              <span>This Month</span>
              <strong>06</strong>
            </div>
          </div>


          <div className="statCard">
            <div className="statIcon">▤</div>

            <div>
              <span>Categories</span>
              <strong>08</strong>
            </div>
          </div> */}

        </section>


        {/* Blog Editor */}
        <section className="blogEditor">

          <div className="sectionTitle">

            <div>
              <span>Content Management</span>
              <h2>Create New Blog</h2>
            </div>



          </div>


          <form className="blogForm" onSubmit={handleSubmit}>
            <button
              type="submit"
              onClick={() => formData.publish = false}
              className="draftButton"
              encType="multipart/form-data">
              Save Draft
            </button>
            {/* <div className="formField fullField">
              
              <label htmlFor="image">
                Blog image
              </label>

              <div className="fileInputWrapper">
                <label className="fileInputButton" htmlFor="blogimg">
                  Choose file
                </label>

                <span className="fileInputText">
                  {formData.blogimg || "No file selected"}
                </span>

                <input
                  onChange={handleChange}
                  name="blogimg"
                  id="image"
                  type="file"
                  accept="image/*"

                />
              </div>
            </div> */}

            {/* Title */}
            <div className="formField fullField">

              <label htmlFor="title">
                Blog Title
              </label>

              <input
                onChange={handleChange}
                name="title"
                id="title"
                type="text"
                placeholder="Enter your blog title..."

              />

            </div>


            {/* Author */}
            <div className="formField">

              <label htmlFor="author">
                Author
              </label>

              <input
                onChange={handleChange}
                name="author"
                id="author"
                type="text"
                placeholder="Author name"
              />

            </div>


            {/* Category */}
            <div className="formField">

              <label htmlFor="category">
                Category
              </label>

              <select onChange={handleChange} name="catagory" id="category">

                <option value="">
                  Select category
                </option>

                <option value="tajweed">
                  Tajweed
                </option>

                <option value="quran">
                  Quran
                </option>

                <option value="islamic-studies">
                  Islamic Studies
                </option>

                <option value="learning">
                  Learning
                </option>

                <option value="general">
                  General
                </option>

              </select>

            </div>


            {/* Body */}
            <div className="formField fullField">

              <div className="bodyLabel">

                <label htmlFor="body">
                  Blog Content
                </label>

                <span>
                  Write your article below
                </span>

              </div>

              <textarea
                onChange={handleChange}
                name="body"
                id="body"
                rows="14"
                placeholder="Start writing your blog..."
              />

            </div>


            {/* Actions */}
            <div className="blogActions">

              {/* <button
                type="button"
                className="cancelButton"
              >
                Cancel
              </button> */}

              <button
                onClick={() => formData.publish = true}
                type="submit"
                className="publishButton"
              >
                {formLoading ? "Loading..." : "Publish Blog"}
              </button>

            </div>

          </form>

        </section>


        {/* Recent Blogs */}
        <section className="recentBlogs">

          <div className="sectionTitle">

            <div>
              <span>Content</span>
              <h2>Recent Blogs</h2>
            </div>

            <a href="#" className="viewAll">
              View All →
            </a>

          </div>


          <div className="blogTable">

            <div className="tableHeader">
              <span>Title</span>
              <span>Author</span>
              <span>Category</span>
              <span>Date</span>
              <span>Action</span>
            </div>

            {allBlogs ? (
              allBlogs.map((myBlog) => (
                <div className="tableRow" key={myBlog._id}>
                  <strong>{myBlog.tittle}</strong>
                  <span>{myBlog.author || "Admin"}</span>
                  <span className="categoryBadge">{myBlog.catagory}</span>
                  <span>{myBlog.createdAt}</span>

                  <div className="rowActions">
                    <button>Edit</button>
                    <button className="deleteAction">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}

          </div>

        </section>

      </main>

    </div>
  );
};

export default AdminDashboard;