import React, { useEffect } from "react";

// If Chartist is not global, import it like this:
// import Chartist from 'chartist';
// import 'chartist/dist/chartist.min.css';
// If md is not global, import or define it as needed.

export default function Profile() {
  // Handler for logout (if needed)
  const handleLogout = (e) => {
    e.preventDefault();
    // Implement logout logic here if needed
  };

  useEffect(() => {
    // Chart data and options
    var dataRevenueChart = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        // Profit series
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        // Loss series (example values, replace with your actual data)
        [120, 200, 150, 300, 180, 210, 160, 190, 220, 250, 300, 350],
      ],
    };
    var optionsRevenueChart = {
      axisX: {
        showGrid: false,
      },
      low: 0,
      high: 1000,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0,
      },
    };
    var responsiveOptions = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    // Make sure Chartist is available
    if (window.Chartist) {
      var revenueChart = new window.Chartist.Bar(
        "#revenueChart",
        dataRevenueChart,
        optionsRevenueChart,
        responsiveOptions
      );
      // If md.startAnimationForBarChart is available
      if (
        window.md &&
        typeof window.md.startAnimationForBarChart === "function"
      ) {
        window.md.startAnimationForBarChart(revenueChart);
      }
    }
  }, []);

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
            <a href="#" className="simple-text logo-normal">
              COFFEESSENTIALS
            </a>
          </div>
          <div
            className="sidebar-wrapper ps-container ps-theme-default"
            data-ps-id="b940a334-1de8-2f7b-825e-40f75203f623"
          >
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
                  href="#"
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
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Log out
                  </a>
                </div>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </a>
              </li>
              {/* <li className="nav-item  active">
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
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-table"></i>
                  <p>Inventory</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user"></i>
                  <p>Customers</p>
                </a>
              </li>
              {/* <li className="nav-item active-pro">
                <a className="nav-link text-white bg-danger" href="#">
                  <i className="material-icons text-white">unarchive</i>
                  <p>Upgrade to PRO</p>
                </a>
              </li> */}
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
                  Dashboard
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
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
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
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">content_copy</i>
                      </div>
                      <p className="card-category">Weekly Sales</p>
                      <h3 className="card-title">P20.4K</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-info">info</i>
                        <a href="#pablo">We have Sold 123 Items</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">store</i>
                      </div>
                      <p className="card-category">Todays Revenue</p>
                      <h3 className="card-title">P8.2 K</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i> Available
                        to Payout
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">info_outline</i>
                      </div>
                      <p className="card-category">Total Orders</p>
                      <h3 className="card-title">1300</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">local_offer</i> Available
                        to Payout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="card card-chart">
                    <div className="card-body">
                      <h4 className="card-title">Total Revenue</h4>
                      <h3 className="card-category">
                        P50.4K{" "}
                        <small>
                          <span className="text-success">
                            <i className="fa fa-long-arrow-up"></i> 55%{" "}
                          </span>{" "}
                          increase in today sales.
                        </small>
                      </h3>
                      <div className="ct-chart" id="revenueChart"></div>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> updated 4
                        minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-body">
                      <h4 className="card-title">Most Sold Items</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="card-category">Mocha Frappe</p>
                        </div>
                        <div className="col-md-6 text-right">
                          <p className="card-category ">80%</p>
                        </div>
                        <div className="col-md-12">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              80%
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <p className="card-category">Latte</p>
                        </div>
                        <div className="col-md-6 text-right">
                          <p className="card-category ">70%</p>
                        </div>
                        <div className="col-md-12">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              80%
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <p className="card-category">Mocha Latte</p>
                        </div>
                        <div className="col-md-6 text-right">
                          <p className="card-category ">60%</p>
                        </div>
                        <div className="col-md-12">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              80%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign
                        sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <div className="col-md-12">
                      <table
                        className="table table-hover"
                        id="tbl-latest-orders"
                      >
                        <thead>
                          <tr>
                            <th>Products</th>
                            <th>Order ID</th>
                            <th>Date Ordered</th>
                            <th>Customer Name</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Espresso Beans</td>
                            <td>#1001</td>
                            <td>2024-06-01</td>
                            <td>Jane Doe</td>
                            <td>
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                            <td>P1,200</td>
                            <td>
                              <button className="btn btn-sm btn-info">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>French Press</td>
                            <td>#1002</td>
                            <td>2024-06-02</td>
                            <td>John Smith</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>P850</td>
                            <td>
                              <button className="btn btn-sm btn-info">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Cold Brew Bottle</td>
                            <td>#1003</td>
                            <td>2024-06-03</td>
                            <td>Alice Lee</td>
                            <td>
                              <span className="badge badge-danger">
                                Cancelled
                              </span>
                            </td>
                            <td>P500</td>
                            <td>
                              <button className="btn btn-sm btn-info">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Drip Coffee Maker</td>
                            <td>#1004</td>
                            <td>2024-06-04</td>
                            <td>Michael Tan</td>
                            <td>
                              <span className="badge badge-success">
                                Completed
                              </span>
                            </td>
                            <td>P2,300</td>
                            <td>
                              <button className="btn btn-sm btn-info">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Mocha Syrup</td>
                            <td>#1005</td>
                            <td>2024-06-05</td>
                            <td>Maria Garcia</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>P350</td>
                            <td>
                              <button className="btn btn-sm btn-info">
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-tabs card-header-primary">
                      <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                          <span className="nav-tabs-title">Tasks:</span>
                          <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                href="#profile"
                                data-toggle="tab"
                              >
                                <i className="material-icons">bug_report</i>{" "}
                                Bugs
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#messages"
                                data-toggle="tab"
                              >
                                <i className="material-icons">code</i> Website
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="#settings"
                                data-toggle="tab"
                              >
                                <i className="material-icons">cloud</i> Server
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Create 4 Invisible User Experiences you Never
                                  Knew About
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="messages">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="settings">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Lines From Great Russian Literature? Or
                                  E-mails From My Boss?
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Flooded: One year later, assessing what was
                                  lost and what was found when a ravaging rain
                                  swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        checked
                                      />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  Sign contract for "What are conference
                                  organizers afraid of?"
                                </td>
                                <td className="td-actions text-right">
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Edit Task"
                                    className="btn btn-primary btn-link btn-sm"
                                  >
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    title="Remove"
                                    className="btn btn-danger btn-link btn-sm"
                                  >
                                    <i className="material-icons">close</i>
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
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-warning">
                      <h4 className="card-title">Employees Stats</h4>
                      <p className="card-category">
                        New employees on 15th September, 2016
                      </p>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-warning">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Country</th>
                          </tr>
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
              {/* <div className="row">
                <div className="col-md-12">
                  <form
                    method="post"
                    action="https://material-dashboard-laravel-bs4.creative-tim.com/profile"
                    autoComplete="off"
                    className="form-horizontal"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="tpwPF1vvPv8PyhY42wySMLJIWoRUbs7BRoHh3edX"
                      autoComplete="off"
                    />
                    <input type="hidden" name="_method" value="put" />
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title">Edit Profile</h4>
                        <p className="card-category">User information</p>
                      </div>
                      <div className="card-body ">
                        <div className="row">
                          <label className="col-sm-2 col-form-label">
                            Name
                          </label>
                          <div className="col-sm-7">
                            <div className="form-group bmd-form-group is-filled">
                              <input
                                className="form-control"
                                name="name"
                                id="input-name"
                                type="text"
                                placeholder="Name"
                                value="Admin Admin"
                                required={true}
                                aria-required="true"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label className="col-sm-2 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-7">
                            <div className="form-group bmd-form-group is-filled">
                              <input
                                className="form-control"
                                name="email"
                                id="input-email"
                                type="email"
                                placeholder="Email"
                                value="admin@material.com"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer ml-auto mr-auto">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <form
                    method="post"
                    action="https://material-dashboard-laravel-bs4.creative-tim.com/profile/password"
                    className="form-horizontal"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="tpwPF1vvPv8PyhY42wySMLJIWoRUbs7BRoHh3edX"
                      autoComplete="off"
                    />
                    <input type="hidden" name="_method" value="put" />
                    <div className="card">
                      <div className="card-header card-header-primary">
                        <h4 className="card-title">Change password</h4>
                        <p className="card-category">Password</p>
                      </div>
                      <div className="card-body ">
                        <div className="row">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="input-current-password"
                          >
                            Current Password
                          </label>
                          <div className="col-sm-7">
                            <div className="form-group bmd-form-group">
                              <input
                                className="form-control"
                                type="password"
                                name="old_password"
                                id="input-current-password"
                                placeholder="Current Password"
                                value=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="input-password"
                          >
                            New Password
                          </label>
                          <div className="col-sm-7">
                            <div className="form-group bmd-form-group">
                              <input
                                className="form-control"
                                name="password"
                                id="input-password"
                                type="password"
                                placeholder="New Password"
                                value=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="input-password-confirmation"
                          >
                            Confirm New Password
                          </label>
                          <div className="col-sm-7">
                            <div className="form-group bmd-form-group">
                              <input
                                className="form-control"
                                name="password_confirmation"
                                id="input-password-confirmation"
                                type="password"
                                placeholder="Confirm New Password"
                                value=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer ml-auto mr-auto">
                        <button type="submit" className="btn btn-primary">
                          Change password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
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
