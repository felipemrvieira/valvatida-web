import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';

import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

function School() {
  const [school, setSchool] = useState({});
  const {id} = useParams();

  async function loadSchool() {
    try {
      const response = await api.get(`/schools/${id}`);
      setSchool(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadSchool();
  }, []);

  return (
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
                <h1 className="h3 mb-4 text-gray-800">Escola {id}</h1>

                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Card */}
                      <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Informações da Escola
                          </h6>
                          <div className="dropdown no-arrow">
                            <div
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                            </div>
                            <div
                              id="dropdown-photo-new"
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                              x-placement="bottom-end">
                              <div className="dropdown-header">
                                Ações do item:
                              </div>
                              <Link
                                className="dropdown-item"
                                to={`/schools/edit/${school.id}`}>
                                Editar
                              </Link>
                              <div className="dropdown-divider" />
                              <div
                                className="dropdown-item"
                                href="#"
                                // onClick={() => this.deleteUser(user)}
                              >
                                Excluir
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                          <p>
                            <strong>ID: </strong>
                            {school.id}
                          </p>
                          <p>
                            <strong>Nome: </strong>
                            {school.name}
                          </p>
                          <p>
                            <strong>Data de Criação: </strong>
                            {school.created_at}
                          </p>
                        </div>
                      </div>

                      <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Endereço
                          </h6>
                          <div className="dropdown no-arrow">
                            <div
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                            </div>
                            <div
                              id="dropdown-photo-new"
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                              x-placement="bottom-end">
                              <div className="dropdown-header">
                                Ações do item:
                              </div>
                              <Link
                                className="dropdown-item"
                                to={`/schools/edit/${school.id}`}>
                                Editar
                              </Link>
                              <div className="dropdown-divider" />
                              <div
                                className="dropdown-item"
                                href="#"
                                // onClick={() => this.deleteUser(user)}
                              >
                                Excluir
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                          <p>
                            <strong>ID: </strong>
                            {school.address && school.address.id}
                          </p>
                          <p>
                            <strong>Rua: </strong>
                            {school.address && school.address.street}
                          </p>
                          <p>
                            <strong>Número: </strong>
                            {school.address && school.address.number}
                          </p>
                          <p>
                            <strong>Latitude: </strong>
                            {school.address && school.address.lat}
                          </p>
                          <p>
                            <strong>Longitude: </strong>
                            {school.address && school.address.long}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div />
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
  );
}

export default School;
