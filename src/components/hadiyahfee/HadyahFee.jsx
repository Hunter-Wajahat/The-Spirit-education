import React from "react";
import "./HadiyahFee.css";

const HadiyahFee = () => {
  return (
    <section className="feeSection">

      <div className="feeContainer">

        {/* Header */}
        <div className="feeHeader">

          <span className="feeTag">
            Hadiyah / Fee
          </span>

          <h1>
            Choose a learning plan
            <span> that suits you.</span>
          </h1>

          <p>
            Select a plan according to your learning needs. Our goal is to
            make quality Quranic education accessible to everyone.
          </p>

        </div>


        {/* Plans */}
        <div className="feePlans">

          {/* Basic */}
          <div className="feePlan">

            <div className="planTop">
              <span className="planName">
                Basic
              </span>

              <p>
                For beginners starting their Quran journey.
              </p>
            </div>

            <div className="planPrice">
              <strong>$30</strong>
              <span>/ month</span>
            </div>

            <div className="planDivider"></div>

            <ul>
              <li>✓ 2 Classes per week</li>
              <li>✓ 30 Minutes per class</li>
              <li>✓ One-to-one learning</li>
              <li>✓ Basic Quran Reading</li>
              <li>✓ Flexible schedule</li>
            </ul>
          <a target="_blank" href="https://wa.me/923446364513?text=Hi%20Sir,%20i%20want%20to%20buy%20this%20Basic%20plan">
            <button className="planButton">
              Choose Plan
            </button>
          </a>

          </div>


          {/* Standard */}
          <div className="feePlan featuredPlan">

            <div className="popularBadge">
              Most Popular
            </div>

            <div className="planTop">
              <span className="planName">
                Standard
              </span>

              <p>
                A balanced plan for consistent Quran learning.
              </p>
            </div>

            <div className="planPrice">
              <strong>$50</strong>
              <span>/ month</span>
            </div>

            <div className="planDivider"></div>

            <ul>
              <li>✓ 4 Classes per week</li>
              <li>✓ 30 Minutes per class</li>
              <li>✓ One-to-one learning</li>
              <li>✓ Quran with Tajweed</li>
              <li>✓ Progress guidance</li>
              <li>✓ Flexible schedule</li>
            </ul>
          <a target="_blank" href="https://wa.me/923446364513?text=Hi%20Sir,%20i%20want%20to%20buy%20this%20Standard%20plan">
            <button className="planButton">
              Choose Plan
            </button>
          </a>

          </div>


          {/* Premium */}
          <div className="feePlan">

            <div className="planTop">
              <span className="planName">
                Premium
              </span>

              <p>
                For students looking for more dedicated learning.
              </p>
            </div>

            <div className="planPrice">
              <strong>$75</strong>
              <span>/ month</span>
            </div>

            <div className="planDivider"></div>

            <ul>
              <li>✓ 5 Classes per week</li>
              <li>✓ 45 Minutes per class</li>
              <li>✓ One-to-one learning</li>
              <li>✓ Quran with Tajweed</li>
              <li>✓ Quran Translation</li>
              <li>✓ Personal progress guidance</li>
            </ul>

            <a target="_blank" href="https://wa.me/923446364513?text=Hi%20Sir,%20i%20want%20to%20buy%20this%20Premium%20plan">
            <button className="planButton">
              Choose Plan
            </button>
          </a>

          </div>

        </div>


        {/* Bottom Note */}

        <div className="feeNote">
          <span>✦</span>

          <p>
            Need a different schedule or have questions about the fee?
            <a href="#"> Contact us</a> and we'll be happy to help.
          </p>
        </div>

      </div>

    </section>
  );
};

export default HadiyahFee;