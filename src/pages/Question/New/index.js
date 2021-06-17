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
  label: Yup.string().required('Insira o label da questão'),
  command: Yup.string().required('Insira o comando'),
});

function QuestionsNew() {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [selectedSubject, setSelectedSubject] = useState({});
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [selectedKind, setSelectedKind] = useState({});

  const history = useHistory();

  async function loadSubjects() {
    try {
      const response = await api.get(`/subjects/`);
      setSubjects(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadTeachers() {
    try {
      const response = await api.get(`/teachers/`);
      setTeachers(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadSubjects();
    loadTeachers();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.post(`/questions`, {
        ...data,
        subject_id: selectedSubject.value,
        teacher_id: selectedTeacher.value,
        kind: selectedKind.value,
      });

      toast.success('Qustão criada com sucesso!');
      history.push('/questions');

      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);
      toast.error(`Falha no cadastro de assunto: ${err}`);
    }
  }

  const subjectOptions = subjects.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  const teacherOptions = teachers.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const kindOptions = [
    {
      value: 0,
      label: 'Questão aberta',
    },
    {
      value: 1,
      label: 'Múltipla Escolha',
    },
  ];

  function handleSubjectChange(newValue, actionMeta) {
    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        console.tron.log(newValue);
        setSelectedSubject(newValue);

        break;

      default:
        break;
    }
  }
  function handleTeacherChange(newValue, actionMeta) {
    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        console.tron.log(newValue);
        setSelectedTeacher(newValue);

        break;

      default:
        break;
    }
  }
  function handleKindChange(newValue, actionMeta) {
    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        console.tron.log(newValue);
        setSelectedKind(newValue);

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
                <h1 className="h3 mb-4 text-gray-800">Nova Questão</h1>

                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      {/* <!-- Card Body --> */}
                      <div className="card shadow mb-4">
                        <div className="card-body">
                          <Form schema={schema} onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="name">Assunto</label>
                              <Select
                                name="subject_id"
                                options={subjectOptions}
                                onChange={handleSubjectChange}
                                placeholder="Selecione"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Professor</label>
                              <Select
                                name="teacher_id"
                                options={teacherOptions}
                                onChange={handleTeacherChange}
                                placeholder="Selecione"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="name">Tipo</label>
                              <Select
                                name="kind"
                                options={kindOptions}
                                onChange={handleKindChange}
                                placeholder="Selecione"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="title">Label da Questão</label>
                              <Input
                                className="form-control"
                                id="label"
                                name="label"
                                placeholder="Label"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="title">Comando Questão</label>
                              <Input
                                className="form-control"
                                id="command"
                                name="command"
                                placeholder="Comando"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Cadastrar questão
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

export default QuestionsNew;
