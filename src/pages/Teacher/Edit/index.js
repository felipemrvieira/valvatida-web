import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira o nome da escola'),
});

function SchoolsEdit() {
  const [school, setSchool] = useState({});
  const {id} = useParams();
  const history = useHistory();

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

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.patch(`/schools/${id}`, data);

      toast.success('Edição realizada com sucesso!');
      console.tron.log(response);

      history.push('/schools');
    } catch (err) {
      const message = err.response.data.errors.full_messages[0];
      console.tron.log(message);

      toast.error(`Falha na edição: ${message}`);
    }
  }

  const initialData = school;

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
                      {/* <!-- Card Body --> */}
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
                          <Form
                            schema={schema}
                            onSubmit={handleSubmit}
                            initialData={initialData}>
                            <div className="form-group">
                              <label htmlFor="name">Nome</label>
                              <Input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Seu Nome"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Editar Escola
                            </button>
                          </Form>
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

export default SchoolsEdit;
