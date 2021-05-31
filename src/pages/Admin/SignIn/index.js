import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
// import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import api from '../../../services/api';
import {login} from '../../../services/auth';

import {Container} from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function AdminSignIn() {
  const history = useHistory();

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.post('admin_auth/sign_in', data);

      const {client, uid, expiry} = response.headers;
      const token = response.headers['access-token'];

      login(token, expiry, client, uid);
      toast.success('Bem vindo!');
      console.tron.log(response);

      history.push('/');
    } catch (err) {
      console.tron.log(err);
      toast.error(
        'Houve um problema com o login, verifique suas credenciais. T.T'
      );
    }
  }

  return (
    <Container>
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

                            <h1 className="h4 text-gray-900 mb-4">
                              Entrar como Administrador
                            </h1>
                          </div>
                          <Form
                            className="user"
                            schema={schema}
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                              <Input
                                className="form-control form-control-user"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Seu email"
                              />
                            </div>
                            <div className="form-group">
                              <Input
                                className="form-control form-control-user"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Sua senha"
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
                              className="btn btn-primary btn-user btn-block"
                              type="submit">
                              Entrar
                            </button>
                          </Form>
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
    </Container>
  );
}

export default AdminSignIn;

// AdminSignIn.propTypes = {};

// AdminSignIn.defaultProps = {};
