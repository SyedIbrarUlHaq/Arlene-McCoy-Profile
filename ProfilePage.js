import React from "react";

export default function ProfilePage() {
  return (
    <div className="page">
      {/* TOP BAR */}
      <header className="topbar">
        <div className="topbar__left">
          <button className="icon-chip" aria-label="Back">
            <i className="bi bi-arrow-left"></i>
          </button>
          <span className="crumbs">Settings / Manage Session Timings</span>
        </div>

        <div className="topbar__right">
          <button className="icon-chip" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>

          <div className="bell-wrap">
            <button className="icon-chip" aria-label="Notifications">
              <i className="bi bi-bell"></i>
            </button>
            <span className="pill">13 New</span>
          </div>

          <div className="flag-chip">
            <img src="/assests/images/pkFlag.jpg" alt="Pakistan" />
          </div>

          <img
            className="avatar avatar--sm"
            src="/assests/images/profileImage.png"
            alt="User"
          />
        </div>
      </header>

      {/* PAGE TITLE */}
      <h1 className="page-title">Arlene McCoy Profile</h1>

      {/* GRID */}
      <main className="grid">
        {/* LEFT: PROFILE CARD */}
        <section className="card profile">
          <div className="profile__cover"></div>

          <div className="profile__content">
            <img
              className="avatar avatar--lg"
              src="/assests/images/profileImage.png"
              alt="Arlene McCoy"
            />

            <div className="profile__toprow">
              <div className="profile__meta">
                <h2 className="profile__name">Arlene McCoy</h2>
                <p className="profile__location">Lahore, Pakistan</p>

                <div className="school">
                  <span className="school__dot"></span>
                  <span className="school__name">Furqan Group School</span>
                </div>
              </div>

              <div className="profile__actions">
                <button className="btn btn--outline">Message</button>
                <button className="btn btn--dark">Create New Assignment</button>
              </div>
            </div>

            <div className="profile__badges">
              <p className="section-label">All Badges</p>
              <div className="d-flex gap-2 mt-3">
                <img src="/assests/images/badgeDard.png" width="40" alt="" />
                <img src="/assests/images/badgeLight.png" width="40" alt="" />
                <img src="/assests/images/badgeLight.png" width="40" alt="" />
                <img src="/assests/images/badgeLight.png" width="40" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: INFO STACK */}
        <aside className="stack">
          {/* About */}
          <section className="card info">
            <h3 className="info__title">About</h3>
            <div className="note">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              ullamcorper quam vitae urna ultricies, efficitur condimentum
              leo gravida. Donec volutpat congue egestas. Vestibulum eget
              tortor tempor...
            </div>
          </section>

          {/* Statistics */}
          <section className="card info">
            <h3 className="info__title">Arlene’s Statistics</h3>

            <div className="stats">
              <div className="stat">
                <span className="stat__label">Latest Rank</span>
                <span className="stat__value">5</span>
              </div>

              <div className="stat">
                <span className="stat__label">Current Badge</span>
                <span className="stat__badge">
                  <img src="/assests/images/badgeDard.png" width="40" alt="" />
                </span>
              </div>

              <div className="stat stat--wide">
                <span className="stat__label">Recent Achievement</span>
                <div className="stat__headline">
                  Flawless<br />Finisher
                </div>
              </div>
            </div>
          </section>

          {/* Enrolled Class */}
          <section className="card info">
            <h3 className="info__title">Enrolled Class</h3>
            <div className="class-line">Daily Rose - 173</div>
          </section>
        </aside>
      </main>
    </div>
  );
}
