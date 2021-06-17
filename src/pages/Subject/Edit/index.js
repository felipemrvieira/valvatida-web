import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Select from 'react-select';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira o nome do usuário'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
});

function TeachersNew() {
  const [teacher, setTeacher] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState({});

  const {id} = useParams();
  const history = useHistory();

  async function loadTeacher() {
    try {
      const response = await api.get(`/teachers/${id}`);
      setTeacher(response.data);
      console.tron.log(response.data);
      setSelectedSchool({
        value: response.data.school.id,
        label: response.data.school.name,
      });
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadSchools() {
    try {
      const response = await api.get(`/schools/`);
      setSchools(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadTeacher();
    loadSchools();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.patch(`/teachers/${id}`, {
        ...data,
        school_id: selectedSchool.value,
      });

      toast.success('Professor editado com sucesso!');
      history.push('/teachers');

      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);

      toast.error(`Falha na edição: ${err}`);
    }
  }

  const schoolOptions = schools.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const initialData = teacher;

  function handleSchoolChange(newValue, actionMeta) {
    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        console.tron.log(newValue);
        setSelectedSchool(newValue);

        break;

      default:
        break;
    }
  }

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
                <h1 className="h3 mb-4 text-gray-800">Editar Professor</h1>

                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      {/* <!-- Card Body --> */}
                      <div className="card shadow mb-4">
                        <div className="card-body">
                          <Form
                            schema={schema}
                            initialData={initialData}
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="name">Nome</label>
                              <Select
                                name="school_id"
                                options={schoolOptions}
                                onChange={handleSchoolChange}
                                value={selectedSchool}
                              />
                            </div>
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
                                placeholder="Senha"
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
                                placeholder="Confirme a senha"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Editar Professor
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

export default TeachersNew;
