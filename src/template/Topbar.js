import React, {Component} from 'react';
// import api from '../services/api';
// import User from './images/user-icon.png';

const divStyle = {
  justifyContent: 'center',
  fontSize: '25px',
};

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agency: {
        title: '',
        logo: '',
        phones_attributes: [{}],
        addresses_attributes: [{}],
      },
    };
  }

  // componentDidMount() {
  //   this.loadInfos();
  // }

  render() {
    const {agency} = this.state;
    // const avatar = this.state.agency.logo || User;

    return (
      // {/* <!--  Topbar  --> */ }
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!--  Sidebar Toggle (Topbar)  --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          type="button">
          <i className="fa fa-bars" />
        </button>
        <div className="input-group" style={divStyle}>
          ITEC CMS
        </div>

        {/* <!--  Topbar Search  --> */}
        {/* < form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" >
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small"
                            placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form > */}

        {/* <!--  Topbar Navbar  --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!--  Nav Item - Search Dropdown (Visible Only XS)  --> */}
          {/* < li className="nav-item dropdown no-arrow d-sm-none" >
                        <div className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li > */}

          {/* <!--  Nav Item - Alerts  --> */}

          {/* < li className="nav-item dropdown no-arrow mx-1" >
                        <div className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i>
                            <span className="badge badge-danger badge-counter">3+</span>
                        </div>
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                            </h6>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </div>
                            <div className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</div>
                        </div>
                    </li > */}

          {/* <!--  Nav Item - Messages  --> */}

          {/* < li className="nav-item dropdown no-arrow mx-1" >
                        <div className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw"></i>
                            <span className="badge badge-danger badge-counter">7</span>
                        </div>

                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                            </h6>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle"
                                        src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle"
                                        src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="" />
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle"
                                        src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="" />
                                    <div className="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                    <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle"
                                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                    <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </div>
                            <div className="dropdown-item text-center small text-gray-500"
                                href="#">Read More Messages</div>
                        </div>
                    </li > */}

          <div className="topbar-divider d-none d-sm-block" />

          {/* <!--  Nav Item - User Information  --> */}
          <li className="nav-item dropdown no-arrow">
            <div
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {agency.title}
              </span>
              {/* <img
                className="img-profile rounded-circle"
                src={avatar}
                alt="Menu"
              /> */}
            </div>
            {/* <!--  Dropdown - User Information  --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown">
              {/* <div className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </div>
                            <div className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </div>
                            <div className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </div>
                            <div className="dropdown-divider"></div> */}
              <div
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Sair
              </div>
            </div>
          </li>
        </ul>
      </nav>
      // {/* <!--  End of Topbar  --> */ }
    );
  }
}

export default Topbar;
