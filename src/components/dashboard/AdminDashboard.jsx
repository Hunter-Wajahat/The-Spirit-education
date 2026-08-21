import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import Loader from "../loader/Loader";
import { useForm } from "react-hook-form"

const AdminDashboard = () => {
  const [authorData, setauthorData] = useState()
  const [loading, setloading] = useState()
  const [formLoading, setformLoading] = useState()
  const [formData, setformData] = useState()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

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
  }, [])



  // Handle form submission
  const onSubmit = async (data) => {
    setformLoading(true)
    console.log('Submitted Data:', data);
    const url = `${import.meta.env.VITE_SERVER_URL}/api/post_blog`
    const payload = data;
    const response = await axios.post(url, payload, {
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
              <strong>24</strong>
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


          <form className="blogForm" onSubmit={handleSubmit(onSubmit)}>
            <button
            name="draft"
              type="submit"
              className="draftButton"
              encType="multipart/form-data">
              Save Draft
            </button>
            <div className="formField fullField">
              {/* blog image */}
              <label htmlFor="image">
                Blog image
              </label>

              <div className="fileInputWrapper">
                <label className="fileInputButton" htmlFor="blogimg">
                  Choose file
                </label>

                <span className="fileInputText">
                  {'No file selected'}
                </span>

                <input
                  {...register("blogimg")}
                  name="blogimg"
                  id="image"
                  type="file"
                  accept="image/*"

                />
              </div>
            </div>

            {/* Title */}
            <div className="formField fullField">

              <label htmlFor="title">
                Blog Title
              </label>

              <input
                {...register("title")}
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
                {...register("author")}
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

              <select {...register("catagory")} name="catagory" id="category">

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
                {...register("body")}
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
                // onClick={() => formData.publish = true}
                type="submit"
                className="publishButton"
              >
                {formLoading ? "Loading" : "Publish Blog"}
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


            <div className="tableRow">

              <strong>
                Understanding the Importance of Tajweed
              </strong>

              <span>Admin</span>

              <span className="categoryBadge">
                Tajweed
              </span>

              <span>20 Aug 2026</span>

              <div className="rowActions">
                <button>Edit</button>
                <button className="deleteAction">
                  Delete
                </button>
              </div>

            </div>


            <div className="tableRow">

              <strong>
                How to Build a Relationship with the Quran
              </strong>

              <span>Admin</span>

              <span className="categoryBadge">
                Quran
              </span>

              <span>17 Aug 2026</span>

              <div className="rowActions">
                <button>Edit</button>
                <button className="deleteAction">
                  Delete
                </button>
              </div>

            </div>


            <div className="tableRow">

              <strong>
                Benefits of Learning Quran Online
              </strong>

              <span>Admin</span>

              <span className="categoryBadge">
                Learning
              </span>

              <span>12 Aug 2026</span>

              <div className="rowActions">
                <button>Edit</button>
                <button className="deleteAction">
                  Delete
                </button>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default AdminDashboard;