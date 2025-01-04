import React from 'react'

const Header = () => {
  return (
<>
<header className>
  <div className="topbar stick">
    <div className="logo">
      <img alt src="images/logo.png" /><span>Socimo</span>
    </div>
    <div className="searches">
      <form method="post">
        <input type="text" placeholder="Search..." />
        <button type="submit"><i className="icofont-search" /></button>
      </form>
    </div>
    <ul className="web-elements">
      <li>
        <div className="user-dp">
          <a href="profile-page2.html" title>
            <img src="images/resources/user.jpg" alt />
            <div className="name">
              <h4>Danial Cardos</h4>
            </div>
          </a>
        </div>
      </li>
      <li>
        <a href="index-2.html" title="Home" data-toggle="tooltip">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" /></svg></i>
        </a>
      </li>
      <li>
        <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
        </a>
        <span />
      </li>
      <li>
        <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></i>
        </a>
        <span />
      </li>
      <li>
        <a className="create" href="#" title="Add New" data-toggle="tooltip">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} /></svg></i>
        </a>
      </li>
      <li>
        <a title href="#">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
              <rect x={3} y={3} width={7} height={7} />
              <rect x={14} y={3} width={7} height={7} />
              <rect x={14} y={14} width={7} height={7} />
              <rect x={3} y={14} width={7} height={7} />
            </svg>
          </i>
        </a>
        <ul className="dropdown">
          <li>
            <a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a>
          </li>
          <li>
            <a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a>
          </li>
          <li>
            <a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite Collegue</a>
          </li>
          <li>
            <a href="pay-out.html" title><i className="icofont-price" /> Payout</a>
          </li>
          <li>
            <a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a>
          </li>
          <li>
            <a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a>
          </li>
          <li>
            <a href="settings.html" title><i className="icofont-gear" /> Setting</a>
          </li>
          <li>
            <a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a>
          </li>
          <li>
            <a className="dark-mod" title href="#"><i className="icofont-moon" /> Dark Mode</a>
          </li>
          <li className="logout">
            <a href="sign-in.html" title><i className="icofont-power" /> Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</header>
</>
  )
}

export default Header
