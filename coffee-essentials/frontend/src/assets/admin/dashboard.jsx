import React from "react";

export default function Dashboard() {
  // Handler for logout (if needed)
  const handleLogout = (e) => {
    e.preventDefault();
    // Implement logout logic here, e.g., form submission or redirect
  };

  return (
    <>
      <div className="wrapper ">
        <div
          className="sidebar"
          data-color="orange"
          data-background-color="white"
          data-image="https://material-dashboard-laravel-bs4.creative-tim.com/material/img/sidebar-1.jpg"
        >
          <div className="logo">
            <a
              href="https://creative-tim.com/"
              className="simple-text logo-normal"
            >
              Creative Tim
            </a>
          </div>
          <div className="sidebar-wrapper ps-container ps-theme-default">
            <form className="navbar-form">
              <span className="bmd-form-group">
                <div className="input-group no-border">
                  <input
                    type="text"
                    value=""
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button
                    type="submit"
                    className="btn btn-white btn-round btn-just-icon"
                  >
                    <i className="material-icons">search</i>
                    <div className="ripple-container"></div>
                  </button>
                </div>
              </span>
            </form>
            <ul className="nav navbar-nav nav-mobile-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">Stats</p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">Some Actions</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Mike John responded to your email
                  </a>
                  <a className="dropdown-item" href="#">
                    You have 5 new tasks
                  </a>
                  <a className="dropdown-item" href="#">
                    You're now friend with Andrew
                  </a>
                  <a className="dropdown-item" href="#">
                    Another Notification
                  </a>
                  <a className="dropdown-item" href="#">
                    Another One
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#pablo"
                  id="navbarDropdownProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">Account</p>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <a
                    className="dropdown-item"
                    href="https://material-dashboard-laravel-bs4.creative-tim.com/profile"
                  >
                    Profile
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="https://material-dashboard-laravel-bs4.creative-tim.com/logout"
                    onClick={handleLogout}
                  >
                    Log out
                  </a>
                </div>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/home"
                >
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item  active">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#laravelExample"
                  aria-expanded="true"
                >
                  <i>
                    <img
                      style={{ width: "25px" }}
                      src="https://material-dashboard-laravel-bs4.creative-tim.com/material/img/laravel.svg"
                      alt="Laravel"
                    />
                  </i>
                  <p>
                    Laravel Examples
                    <b className="caret"></b>
                  </p>
                </a>
                <div className="collapse show" id="laravelExample">
                  <ul className="nav">
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        href="https://material-dashboard-laravel-bs4.creative-tim.com/profile"
                      >
                        <span className="sidebar-mini"> UP </span>
                        <span className="sidebar-normal">User profile </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://material-dashboard-laravel-bs4.creative-tim.com/user"
                      >
                        <span className="sidebar-mini"> UM </span>
                        <span className="sidebar-normal">
                          {" "}
                          User Management{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/table-list"
                >
                  <i className="material-icons">content_paste</i>
                  <p>Table List</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/typography"
                >
                  <i className="material-icons">library_books</i>
                  <p>Typography</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/icons"
                >
                  <i className="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/map"
                >
                  <i className="material-icons">location_ons</i>
                  <p>Maps</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/notifications"
                >
                  <i className="material-icons">notifications</i>
                  <p>Notifications</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/rtl-support"
                >
                  <i className="material-icons">language</i>
                  <p>RTL Support</p>
                </a>
              </li>
              <li className="nav-item active-pro">
                <a
                  className="nav-link text-white bg-danger"
                  href="https://material-dashboard-laravel-bs4.creative-tim.com/upgrade"
                >
                  <i className="material-icons text-white">unarchive</i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
            <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
              <div
                className="ps-scrollbar-x"
                tabIndex="0"
                style={{ left: 0, width: 0 }}
              ></div>
            </div>
            <div className="ps-scrollbar-y-rail" style={{ top: 0, right: 0 }}>
              <div
                className="ps-scrollbar-y"
                tabIndex="0"
                style={{ top: 0, height: 0 }}
              ></div>
            </div>
          </div>
          <div
            className="sidebar-background"
            style={{
              backgroundImage:
                "url(https://material-dashboard-laravel-bs4.creative-tim.com/material/img/sidebar-1.jpg)",
            }}
          ></div>
        </div>
        <div
          className="main-panel ps-container ps-theme-default"
          data-ps-id="b3d174be-9cde-e897-6f65-6caf953e6ba2"
        >
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <a className="navbar-brand" href="#">
                  User Profile
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
                <span className="navbar-toggler-icon icon-bar"></span>
              </button>
              <a
                className="btn btn-danger mr-4"
                target="_blank"
                href="https://www.creative-tim.com/product/material-dashboard-laravel-bs4?_ga=2.155843325.799530425.1606120735-1793253030.1606120735"
              >
                <i className="material-icons">archive</i>
                <span>Download Now</span>
                <div className="ripple-container"></div>
              </a>
              <a
                className="btn btn-success"
                target="_blank"
                href="https://material-dashboard-laravel-bs4.creative-tim.com/docs/getting-started/laravel-setup.html?_ga=2.155843325.799530425.1606120735-1793253030.1606120735"
              >
                <i className="material-icons">book</i>
                <span>Documentation</span>
              </a>
              <div className="collapse navbar-collapse justify-content-end">
                <form className="navbar-form">
                  <span className="bmd-form-group">
                    <div className="input-group no-border">
                      <input
                        type="text"
                        value=""
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button
                        type="submit"
                        className="btn btn-white btn-round btn-just-icon"
                      >
                        <i className="material-icons">search</i>
                        <div className="ripple-container"></div>
                      </button>
                    </div>
                  </span>
                </form>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://material-dashboard-laravel-bs4.creative-tim.com/home"
                    >
                      <i className="material-icons">dashboard</i>
                      <p className="d-lg-none d-md-block">Stats</p>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="http://example.com"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="material-icons">notifications</i>
                      <span className="notification">5</span>
                      <p className="d-lg-none d-md-block">Some Actions</p>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="#">
                        Mike John responded to your email
                      </a>
                      <a className="dropdown-item" href="#">
                        You have 5 new tasks
                      </a>
                      <a className="dropdown-item" href="#">
                        You're now friend with Andrew
                      </a>
                      <a className="dropdown-item" href="#">
                        Another Notification
                      </a>
                      <a className="dropdown-item" href="#">
                        Another One
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#pablo"
                      id="navbarDropdownProfile"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="material-icons">person</i>
                      <p className="d-lg-none d-md-block">Account</p>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdownProfile"
                    >
                      <a
                        className="dropdown-item"
                        href="https://material-dashboard-laravel-bs4.creative-tim.com/profile"
                      >
                        Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="https://material-dashboard-laravel-bs4.creative-tim.com/logout"
                        onClick={handleLogout}
                      >
                        Log out
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-warning card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">content_copy</i>
                      </div>
                      <p class="card-category">Used Space</p>
                      <h3 class="card-title">
                        49/50
                        <small>GB</small>
                      </h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons text-danger">warning</i>
                        <a href="#pablo">Get More Space...</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-success card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">store</i>
                      </div>
                      <p class="card-category">Revenue</p>
                      <h3 class="card-title">$34,245</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">date_range</i> Last 24 Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-danger card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">info_outline</i>
                      </div>
                      <p class="card-category">Fixed Issues</p>
                      <h3 class="card-title">75</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">local_offer</i> Tracked from
                        Github
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-info card-header-icon">
                      <div class="card-icon">
                        <i class="fa fa-twitter"></i>
                      </div>
                      <p class="card-category">Followers</p>
                      <h3 class="card-title">+245</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">update</i> Just Updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card card-chart">
                    <div class="card-header card-header-success">
                      <div class="ct-chart" id="dailySalesChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Daily Sales</h4>
                      <p class="card-category">
                        <span class="text-success">
                          <i class="fa fa-long-arrow-up"></i> 55%{" "}
                        </span>{" "}
                        increase in today sales.
                      </p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> updated 4
                        minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-chart">
                    <div class="card-header card-header-warning">
                      <div class="ct-chart" id="websiteViewsChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Email Subscriptions</h4>
                      <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> campaign sent
                        2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card card-chart">
                    <div class="card-header card-header-danger">
                      <div class="ct-chart" id="completedTasksChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Completed Tasks</h4>
                      <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> campaign sent
                        2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header card-header-tabs card-header-primary">
                      <div class="nav-tabs-navigation">
                        <div class="nav-tabs-wrapper">
                          <span class="nav-tabs-title">Tasks:</span>
                          <ul class="nav nav-tabs" data-tabs="tabs">
                            <li class="nav-item">
                              <a
                                class="nav-link active"
                                href="#profile"
                                data-toggle="tab"
                              >
                                <i class="material-icons">bug_report</i> Bugs
                                <div class="ripple-container"></div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="#messages"
                                data-toggle="tab"
                              >
                                <i class="material-icons">code</i> Website
                                <div class="ripple-container"></div>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                href="#settings"
                                data-toggle="tab"
                              >
                                <i class="material-icons">cloud</i> Server
                                <div class="ripple-container"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="tab-content">
                        <div class="tab-pane active" id="profile">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Create 4 Invisible User Experiences you Never
                                  Knew About
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="tab-pane" id="messages">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="tab-pane" id="settings">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="form-check">
                                    <label class="form-check-label">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span class="form-check-sign">
                                        <span class="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td class="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    class="btn btn-primary btn-link btn-sm"
                                  >
                                    <i class="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    class="btn btn-danger btn-link btn-sm"
                                  >
                                    <i class="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="card">
                    <div class="card-header card-header-warning">
                      <h4 class="card-title">Employees Stats</h4>
                      <p class="card-category">
                        New employees on 15th September, 2016
                      </p>
                    </div>
                    <div class="card-body table-responsive">
                      <table class="table table-hover">
                        <thead class="text-warning">
                          <th>ID</th>
                          <th>Name</th>
                          <th>Salary</th>
                          <th>Country</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="https://www.creative-tim.com">Creative Tim</a>
                  </li>
                  <li>
                    <a href="https://creative-tim.com/presentation">About Us</a>
                  </li>
                  <li>
                    <a href="http://blog.creative-tim.com">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.creative-tim.com/license">Licenses</a>
                  </li>
                </ul>
              </nav>
              <div className="copyright float-right">
                ©{new Date().getFullYear()} 2025, made with{" "}
                <i className="material-icons">favorite</i> by
                <a
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Creative Tim
                </a>{" "}
                and{" "}
                <a
                  href="https://www.updivision.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UPDIVISION
                </a>{" "}
                for a better web.
              </div>
            </div>
          </footer>
          <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}>
            <div
              className="ps-scrollbar-x"
              tabIndex="0"
              style={{ left: 0, width: 0 }}
            ></div>
          </div>
          <div className="ps-scrollbar-y-rail" style={{ top: 0, right: 0 }}>
            <div
              className="ps-scrollbar-y"
              tabIndex="0"
              style={{ top: 0, height: 0 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
