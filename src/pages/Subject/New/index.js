import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
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
  title: Yup.string().required('Insira o nome do curso'),
});

function SubjectsNew() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});

  const history = useHistory();

  async function loadCourses() {
    try {
      const response = await api.get(`/courses/`);
      setCourses(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.post(`/subjects`, {
        ...data,
        course_id: selectedCourse.value,
      });

      toast.success('Assunto crisdo com sucesso!');
      history.push('/subjects');

      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);
      toast.error(`Falha no cadastro de assunto: ${err}`);
    }
  }

  const courseOptions = courses.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  function handleCourseChange(newValue, actionMeta) {
    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        console.tron.log(newValue);
        setSelectedCourse(newValue);

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
                <h1 className="h3 mb-4 text-gray-800">Novo Assunto</h1>

                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      {/* <!-- Card Body --> */}
                      <div className="card shadow mb-4">
                        <div className="card-body">
                          <Form schema={schema} onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="name">Curso</label>
                              <Select
                                name="student_id"
                                options={courseOptions}
                                onChange={handleCourseChange}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="title">Nome do assunto</label>
                              <Input
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Nome do assunto"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Cadastrar assunto
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

export default SubjectsNew;
