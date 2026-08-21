import React from "react";
import "./Blog.css";

const Blog = () => {
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
          <article className="blogCard">

            <div className="blogImage">
              <img
                src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80"
                alt="Quran"
              />
            </div>

            <div className="blogContent">

              <div className="blogMeta">
                <span>Quran</span>
                <small>August 18, 2026</small>
              </div>

              <h2>
                Why Learning the Quran Should Be a Part of Our Daily Life
              </h2>

              <p>
                Discover how regular Quranic learning can strengthen
                your connection with Allah and bring peace into your life.
              </p>

              <a href="#" className="readMore">
                Read Article <span>→</span>
              </a>

            </div>

          </article>


          {/* Blog Card */}
          <article className="blogCard">

            <div className="blogImage">
              <img
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80"
                alt="Islamic learning"
              />
            </div>

            <div className="blogContent">

              <div className="blogMeta">
                <span>Learning</span>
                <small>August 12, 2026</small>
              </div>

              <h2>
                How to Build a Consistent Quran Reading Habit
              </h2>

              <p>
                Simple and practical steps to help you create a
                consistent Quran reading routine.
              </p>

              <a href="#" className="readMore">
                Read Article <span>→</span>
              </a>

            </div>

          </article>


          {/* Blog Card */}
          <article className="blogCard">

            <div className="blogImage">
              <img
                src="https://images.unsplash.com/photo-1603866643283-3b6b3b5e0c1e?auto=format&fit=crop&w=900&q=80"
                alt="Quran study"
              />
            </div>

            <div className="blogContent">

              <div className="blogMeta">
                <span>Tajweed</span>
                <small>August 05, 2026</small>
              </div>

              <h2>
                Understanding the Importance of Tajweed
              </h2>

              <p>
                Learn why Tajweed matters and how correct pronunciation
                improves the beauty and accuracy of Quranic recitation.
              </p>

              <a href="#" className="readMore">
                Read Article <span>→</span>
              </a>

            </div>

          </article>


          {/* Blog Card */}
          <article className="blogCard">

            <div className="blogImage">
              <img
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80"
                alt="Islamic book"
              />
            </div>

            <div className="blogContent">

              <div className="blogMeta">
                <span>Islamic Studies</span>
                <small>July 29, 2026</small>
              </div>

              <h2>
                Teaching Children the Quran in a Simple Way
              </h2>

              <p>
                Helpful ideas for parents who want to make Quranic
                learning engaging and meaningful for their children.
              </p>

              <a href="#" className="readMore">
                Read Article <span>→</span>
              </a>

            </div>

          </article>

        </div>

      </div>

    </section>
  );
};

export default Blog;