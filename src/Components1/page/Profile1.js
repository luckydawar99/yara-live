import React from 'react'

const Profile1 = () => {
  return (
   <>
        <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel-content">
                  <h4 className="main-title">
                    User Profile <i className="icofont-pen-alt-1" />
                  </h4>
                  <div className="row merged20 mb-4">
                    <div className="col-lg-4">
                      <div className="d-widget text-center">
                        <div className="user-avatar-edit">
                          <figure>
                            <img src="images/resources/user-mockupbg.jpg" alt />
                          </figure>
                          <div className="fileupload">
                            <span className="btn-text">edit</span>
                            <input type="file" className="upload" />
                          </div>
                        </div>
                        <div className="user-dp-edit">
                          <figure>
                            <img src="images/resources/admin.jpg" alt />
                            <div className="fileupload">
                              <span className="btn-text">
                                <i className="icofont-camera" />
                              </span>
                              <input type="file" className="upload" />
                            </div>
                          </figure>
                          <div className="users-name">
                            <h5>Madalyn Rascon</h5>
                            <span>Developer Geek</span>
                          </div>
                        </div>
                        <ul className="folowerss">
                          <li>
                            <span>Posts</span> <i>345</i>
                          </li>
                          <li>
                            <span>Followers</span> <i>256</i>
                          </li>
                          <li>
                            <span>Follow</span> <i>123</i>
                          </li>
                        </ul>
                        <a className="button primary circle" href="#" title>
                          <i className="icofont-pen-alt-1" /> Edit
                        </a>
                        <a
                          className="button primary circle	danger"
                          href="#"
                          title>
                          <i className="icofont-ban" /> Block
                        </a>
                      </div>
                      <div className="d-widget mt-4">
                        <div className="d-widget-title">
                          <h5>Social Links</h5>
                        </div>
                        <div className="social-links">
                          <i className="icofont-facebook" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-instagram" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-twitter" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-pinterest" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <nav className="responsive-tab style1">
                        <ul
                          data-submenu-title="compounents"
                          uk-switcher="connect: #picturez ;animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
                          className="uk-grid"
                          uk-sticky="offset:50;media : @m">
                          <li>
                            <a href="#">Timeline</a>
                          </li>
                          <li>
                            <a href="#">Photos</a>
                          </li>
                          <li>
                            <a href="#">Videos</a>
                          </li>
                          <li>
                            <a href="#">followers</a>
                          </li>
                          <li>
                            <a href="#">Products</a>
                          </li>
                          <li>
                            <a href="#">Earnings</a>
                          </li>
                          <li>
                            <a href="#">Settings</a>
                          </li>
                        </ul>
                      </nav>
                      <ul className="uk-switcher" id="picturez">
                        <li>
                          <div className="streamline">
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic5.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Clay Masse
                                    </span>
                                    <span>
                                      invited to join the meeting in the
                                      conference room at 9.45 am
                                    </span>
                                  </p>
                                  <span className>3 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic4.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Evie Ono
                                    </span>
                                    <span>
                                      added three new photos in the library
                                    </span>
                                  </p>
                                  <div className="activity-thumbnail">
                                    <img
                                      alt="posted-image"
                                      src="images/resources/speak-11.jpg"
                                    />
                                    <img
                                      alt="posted-image"
                                      src="images/resources/speak-12.jpg"
                                    />
                                  </div>
                                  <span className>8 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic2.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      madalyn rascon
                                    </span>
                                    <span>assigned a new task</span>
                                  </p>
                                  <span className>28 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic3.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Ezequiel Merideth
                                    </span>
                                    <span>completed project wireframes</span>
                                  </p>
                                  <span className>yesterday</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic1.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      jonnie metoyer
                                    </span>
                                    <span>
                                      created a group 'Hencework' in the
                                      discussion forum
                                    </span>
                                  </p>
                                  <span className>18 feb</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="sp sp-bars" />
                          </div>
                        </li>
                        <li>
                          <div className="posted-photos">
                            <div
                              className="row merged-10"
                              uk-lightbox="animation: scale">
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album1.jpg"
                                    data-caption="Caption 1">
                                    <img
                                      src="images/resources/album1.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album2.jpg"
                                    data-caption="Caption 2">
                                    <img
                                      src="images/resources/album2.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album3.jpg"
                                    data-caption="Caption 3">
                                    <img
                                      src="images/resources/album3.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album4.jpg"
                                    data-caption="Caption 4">
                                    <img
                                      src="images/resources/album4.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album5.jpg"
                                    data-caption="Caption 5">
                                    <img
                                      src="images/resources/album5.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album6.jpg"
                                    data-caption="Caption 6">
                                    <img
                                      src="images/resources/album6.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album7.jpg"
                                    data-caption="Caption 7">
                                    <img
                                      src="images/resources/album7.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album8.jpg"
                                    data-caption="Caption 8">
                                    <img
                                      src="images/resources/album8.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album9.jpg"
                                    data-caption="Caption 8">
                                    <img
                                      src="images/resources/album9.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album5.jpg"
                                    data-caption="Caption 5">
                                    <img
                                      src="images/resources/album5.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album2.jpg"
                                    data-caption="Caption 2">
                                    <img
                                      src="images/resources/album2.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album4.jpg"
                                    data-caption="Caption 4">
                                    <img
                                      src="images/resources/album4.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="posted-photos">
                            <div
                              className="row merged-10"
                              uk-lightbox="animation: scale">
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-6.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Vu.Js Free Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-1.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Css3 2020 Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-3.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Advance Angular Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-4.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Css3 2020 Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-5.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Advance Wordress 2021</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-6.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>VU Js Best Video Course</span>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row col-xs-6 merged-10">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-1.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-2.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-3.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>Wb University, USA</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-4.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Rjapal
                                  </a>
                                </span>
                                <ins>Km University, India</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-5.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy watson
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-6.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Bob Frank
                                  </a>
                                </span>
                                <ins>WB University, Canada</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-7.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-8.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-9.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>WB University, USA</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="sp sp-bars" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <table className="table table-default uk-table-striped">
                            <thead>
                              <tr>
                                <th>Invoce#</th>
                                <th>Date</th>
                                <th>Item Name</th>
                                <th>Item Sales</th>
                                <th>Earning</th>
                                <th>Options</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>001</td>
                                <td>01 jan, 2020</td>
                                <td>
                                  <b>PHP Online Course</b>
                                </td>
                                <td>03</td>
                                <td>$199</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>002</td>
                                <td>02 Feb,2020</td>
                                <td>
                                  <b>Holly Bilble</b>
                                </td>
                                <td>02</td>
                                <td>$299</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>003</td>
                                <td>04 Feb,2020</td>
                                <td>
                                  <b>Advance Laravel Videos</b>
                                </td>
                                <td>06</td>
                                <td>$449</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>004</td>
                                <td>12 March,2020</td>
                                <td>
                                  <b>New Vu.js Bascis</b>
                                </td>
                                <td>20</td>
                                <td>$849</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>005</td>
                                <td>04 April,2020</td>
                                <td>
                                  <b>Advance HTML5 Scripts</b>
                                </td>
                                <td>06</td>
                                <td>$449</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li>
                          <div className="total-sales">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="earning-box">
                                  <span>
                                    Sales earnings this month (October), after
                                    associated author fees, &amp; before taxes:
                                  </span>
                                  <h5>$330.29</h5>
                                  <h6>Net Sales</h6>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="earning-box">
                                  <span>
                                    Total value of your sales, with associated
                                    author fees, before taxes:
                                  </span>
                                  <h5>$660.60</h5>
                                  <h6>Gross Sales</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-widget mt-4">
                            <div className="d-widget-title">
                              <h5>Your Sales By Countries</h5>
                            </div>
                            <table className="table top-countries table-default table-striped">
                              <thead>
                                <tr>
                                  <th>Countries</th>
                                  <th>Item Sales</th>
                                  <th>This Month</th>
                                  <th>Last Month</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/001-united-kingdom.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>England</span>
                                  </td>
                                  <td>$20</td>
                                  <td>$40</td>
                                  <td>$120</td>
                                  <td>$1220</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/002-united-states.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>United States</span>
                                  </td>
                                  <td>$40</td>
                                  <td>$40</td>
                                  <td>$120</td>
                                  <td>$1220</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/003-france.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>France</span>
                                  </td>
                                  <td>$40</td>
                                  <td>$60</td>
                                  <td>$30</td>
                                  <td>$120</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/004-germany.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Germany</span>
                                  </td>
                                  <td>$150</td>
                                  <td>$200</td>
                                  <td>$2770</td>
                                  <td>$8720</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/005-spain.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Spain</span>
                                  </td>
                                  <td>$130</td>
                                  <td>$640</td>
                                  <td>$820</td>
                                  <td>$2210</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/006-china.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>China</span>
                                  </td>
                                  <td>$12</td>
                                  <td>$654</td>
                                  <td>$7798</td>
                                  <td>$9920</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/007-italy.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Italy</span>
                                  </td>
                                  <td>$987</td>
                                  <td>$232</td>
                                  <td>$567</td>
                                  <td>$9862</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/008-japan.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Japan</span>
                                  </td>
                                  <td>$486</td>
                                  <td>$239</td>
                                  <td>$233</td>
                                  <td>$1520</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                        <li>
                          <div className="uk-width">
                            <div className="setting-card">
                              <h2>Notification</h2>
                              <p className="mb-4">
                                Notifications - Choose when and how to be
                                notified.
                              </p>
                              <h6>Choose when and how to be notified</h6>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch1"
                                />
                                <label className="switch" htmlFor="switch1" />
                                <i className="icofont-substitute" />{" "}
                                <span>Subscriptions</span>
                                <p>
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch2"
                                />
                                <label className="switch" htmlFor="switch2" />
                                <i className="icofont-at" />{" "}
                                <span>Recommended Researches </span>
                                <p>
                                  Notify me of courses I might like based on
                                  what I watch
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch3"
                                />
                                <label className="switch" htmlFor="switch3" />
                                <i className="icofont-comment" />{" "}
                                <span> Active Comments</span>
                                <p>
                                  Notify me about activity on my comments on
                                  others’ courses
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch4"
                                />
                                <label className="switch" htmlFor="switch4" />
                                <i className="icofont-reply" />{" "}
                                <span>Reply to My comments </span>
                                <p>Notify me about replies to my comments</p>
                              </div>
                              <h6>Email Notifications</h6>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch5"
                                />
                                <label className="switch" htmlFor="switch5" />
                                <i className="icofont-email" />{" "}
                                <span>
                                  Send me Emails about akedimc activity and
                                  updates
                                </span>
                                <p>
                                  If this setting is turned off, socimo may
                                  still send you messages regarding your
                                  account, required service announcements, legal
                                  notifications, and privacy matters
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch6"
                                />
                                <label className="switch" htmlFor="switch6" />
                                <i className="icofont-foot-print" />{" "}
                                <span>
                                  Promotional and helpful Recommendations
                                </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch7"
                                />
                                <label className="switch" htmlFor="switch7" />
                                <i className="icofont-search-stock" />{" "}
                                <span>Show your profile on search engine.</span>
                                <p>
                                  If this setting is turned off, socimo may
                                  still send you messages regarding your
                                  account, required service announcements, legal
                                  notifications, and privacy matters
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch8"
                                />
                                <label className="switch" htmlFor="switch8" />
                                <i className="icofont-users-social" />{" "}
                                <span>
                                  Show Your followers on your timeline.
                                </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch9"
                                />
                                <label className="switch" htmlFor="switch9" />
                                <i className="icofont-read-book-alt" />{" "}
                                <span>Show your courses and researches. </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <a href="#" title className="button primary circle mt-5">
                        Save Changes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content */}
   </>
  )
}

export default Profile1
