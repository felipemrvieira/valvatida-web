import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import './pages.scss';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';
import api from '../../../services/api';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';

// import { Container } from './styles';
const schema = Yup.object().shape({
  name: Yup.string().required('Insira o nome do usuário'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'sua senha precisa ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirme sua senha'),
});

function AdminRegister() {
  const history = useHistory();

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.post('admin_auth/', data);

      toast.success('Cadastro realizado com sucesso!');
      console.tron.log(response);

      history.push('/');
    } catch (err) {
      const message = err.response.data.errors.full_messages[0];
      console.tron.log(message);

      toast.error(`Falha no cadastro: ${message}`);
    }
  }

  return (
    <>
      <div className="App">
        <div id="page-top">
          {/* <!-- Page Wrapper  --> */}
          <div id="wrapper">
            <Sidebar />
            {/* <!--  Content Wrapper  --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* <!--  Main Content  --> */}
              <div id="content">
                <Topbar />
                {/* <!--  Begin Page Content  --> */}
                <div className="container-fluid">
                  {/* <!--  Page Heading  --> */}
                  <h1 className="h3 mb-4 text-gray-800">Novo Administrador</h1>

                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        {/* <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Informações di Item de SIC</h6>
                            <div className="dropdown no-arrow">
                                <div className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </div>
                                <div id="dropdown-photo-new" className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink" x-placement="bottom-end">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <div className="dropdown-item" href="#">Action</div>
                                    <div className="dropdown-item" href="#">Another action</div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item" href="#">Something else here</div>
                                </div>
                            </div>
                        </div> */}

                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                          <Form schema={schema} onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="name">Nome</label>
                              <Input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Seu Nome"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <Input
                                className="form-control"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Seu email"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="titulo">Senha</label>
                              <Input
                                className="form-control"
                                name="password"
                                type="password"
                                placeholder="Sua senha"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="titulo">
                                Confirmação de Senha
                              </label>
                              <Input
                                className="form-control"
                                name="password_confirmation"
                                type="password"
                                placeholder="Confirme sua senha"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Cadastrar Administrador
                            </button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  /.container-fluid  */}
              </div>
              {/* End of Main Content */}

              <Footer />
            </div>
            {/* <!--  End of Content Wrapper  --> */}
          </div>
          {/* <!--  End of Page Wrapper  --> */}

          {/* <!--  Scroll to Top Button --> */}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>

          <LogoutModal />
        </div>
      </div>
    </>
  );
}

export default AdminRegister;
