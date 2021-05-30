import React, {useState} from 'react';

import './Login.scss';
// import api from '../../services/api';
// import {login, TOKEN_KEY} from '../../services/auth';

function Login() {
  const [error] = useState('');

  return (
    <div className="login">
      <div id="bg-gradient-primary" className="bg-gradient-primary">
        <div className="container">
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          {process.env.NODE_ENV === 'development' ? (
                            <small>
                              You are running this application in{' '}
                              <b>{process.env.NODE_ENV}</b> mode.
                            </small>
                          ) : (
                            ''
                          )}

                          <h1 className="h4 text-gray-900 mb-4">Login</h1>
                        </div>
                        <div className="mb-2">{error}</div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="email"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              name="email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="password"
                              placeholder="Password"
                              name="password"
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck">
                                Remember Me
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                              </label>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block">
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
