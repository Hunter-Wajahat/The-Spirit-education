import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <main className="blogPage">

      {/* =========================
          Blog Header
      ========================= */}

      <section className="blogHeader">

        <div className="blogHeaderContent">
          <span className="blogTag">
            Quran & Islamic Learning
          </span>

          <h1>
            Knowledge that
            <span> inspires and guides.</span>
          </h1>

          <p>
            Explore articles, reflections, Quranic guidance, and useful
            resources to deepen your understanding of the Quran and Islam.
          </p>
        </div>

      </section>


      {/* =========================
          Blog Content
      ========================= */}

      <section className="blogContent">

        <div className="blogMain">

          {/* Featured Article */}

          <article className="featuredPost">

            <div className="featuredImage">
              <span>Featured Article</span>
            </div>

            <div className="featuredInfo">

              <div className="postMeta">
                <span>Quran</span>
                <span>•</span>
                <span>August 12, 2026</span>
              </div>

              <h2>
                How Understanding the Quran Can Transform Your Daily Life
              </h2>

              <p>
                The Quran is more than a book we recite. Understanding its
                message can help us build a stronger relationship with Allah
                and bring guidance into our everyday decisions.
              </p>

              <a href="#" className="readMore">
                Read Article
                <span>→</span>
              </a>

            </div>

          </article>


          {/* Blog Heading */}

          <div className="postsHeading">
            <div>
              <span>Latest Articles</span>
              <h2>From the Academy</h2>
            </div>

            <a href="#" className="viewAll">
              View All
              <span>→</span>
            </a>
          </div>


          {/* Blog Grid */}

          <div className="blogGrid">

            <article className="blogCard">

              <div className="blogCardImage imageOne">
                <span>Quran</span>
              </div>

              <div className="blogCardContent">

                <div className="postDate">
                  August 08, 2026
                </div>

                <h3>
                  Why Learning Quran With Meaning Matters
                </h3>

                <p>
                  Discover how understanding the meaning behind the verses
                  can strengthen your connection with the Quran.
                </p>

                <a href="#">
                  Read More <span>→</span>
                </a>

              </div>

            </article>


            <article className="blogCard">

              <div className="blogCardImage imageTwo">
                <span>Learning</span>
              </div>

              <div className="blogCardContent">

                <div className="postDate">
                  August 03, 2026
                </div>

                <h3>
                  Building a Consistent Quran Reading Habit
                </h3>

                <p>
                  Simple and practical ways to make Quran reading a meaningful
                  part of your daily routine.
                </p>

                <a href="#">
                  Read More <span>→</span>
                </a>

              </div>

            </article>


            <article className="blogCard">

              <div className="blogCardImage imageThree">
                <span>Tajweed</span>
              </div>

              <div className="blogCardContent">

                <div className="postDate">
                  July 28, 2026
                </div>

                <h3>
                  Understanding the Importance of Tajweed
                </h3>

                <p>
                  Learn why correct Quranic pronunciation matters and how
                  Tajweed improves your recitation.
                </p>

                <a href="#">
                  Read More <span>→</span>
                </a>

              </div>

            </article>


            <article className="blogCard">

              <div className="blogCardImage imageFour">
                <span>Islamic Studies</span>
              </div>

              <div className="blogCardContent">

                <div className="postDate">
                  July 22, 2026
                </div>

                <h3>
                  Teaching Children to Love the Quran
                </h3>

                <p>
                  Creating a positive environment that helps children develop
                  a lasting relationship with the Quran.
                </p>

                <a href="#">
                  Read More <span>→</span>
                </a>

              </div>

            </article>

          </div>

        </div>


        {/* =========================
            Sidebar
        ========================= */}

        <aside className="blogSidebar">

          {/* Categories */}

          <div className="sidebarBox">

            <h3>Categories</h3>

            <ul className="categoryList">
              <li>
                <span>Quran</span>
                <strong>12</strong>
              </li>

              <li>
                <span>Tajweed</span>
                <strong>8</strong>
              </li>

              <li>
                <span>Islamic Studies</span>
                <strong>15</strong>
              </li>

              <li>
                <span>Quran Learning</span>
                <strong>10</strong>
              </li>

              <li>
                <span>For Parents</span>
                <strong>6</strong>
              </li>
            </ul>

          </div>


          {/* Popular Articles */}

          <div className="sidebarBox">

            <h3>Popular Articles</h3>

            <div className="popularPost">

              <span className="popularNumber">
                01
              </span>

              <div>
                <h4>
                  5 Benefits of Learning the Quran Online
                </h4>

                <span>
                  Quran Learning
                </span>
              </div>

            </div>


            <div className="popularPost">

              <span className="popularNumber">
                02
              </span>

              <div>
                <h4>
                  How to Improve Your Quran Recitation
                </h4>

                <span>
                  Tajweed
                </span>
              </div>

            </div>


            <div className="popularPost">

              <span className="popularNumber">
                03
              </span>

              <div>
                <h4>
                  Making Time for Quran Every Day
                </h4>

                <span>
                  Lifestyle
                </span>
              </div>

            </div>

          </div>


          {/* Newsletter */}

          <div className="newsletterBox">

            <div className="newsletterIcon">
              ✦
            </div>

            <h3>
              Stay Connected
            </h3>

            <p>
              Receive new articles and Quranic learning resources directly
              in your inbox.
            </p>

            <input
              type="email"
              placeholder="Your email address"
            />

            <button>
              Subscribe
            </button>

          </div>

        </aside>

      </section>

    </main>
  );
};

export default Blog;