import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

const schema = Yup.object().shape({
  title: Yup.string().required('Insira o nome do curso'),
});

function CourseEdit() {
  const [course, setCourse] = useState([]);
  const [schools, setSchools] = useState([]);
  const [groups, setGroups] = useState([]);

  const [selectedSchool, setSelectedSchool] = useState({});
  const [selectedGroup, setSelectedGroup] = useState({});

  const {id} = useParams();
  const history = useHistory();

  async function loadCourse() {
    try {
      const response = await api.get(`/courses/${id}`);
      setCourse(response.data);
      console.tron.log(response.data);

      setSelectedSchool({
        value: response.data.school.id,
        label: response.data.school.name,
      });

      setSelectedGroup({
        value: response.data.course_group.id,
        label: response.data.course_group.title,
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

  async function loadGroups() {
    try {
      const response = await api.get(`/course_groups/`);
      setGroups(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadGroups();
    loadCourse();
    loadSchools();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.patch(`/courses/${id}`, {
        ...data,
        school_id: selectedSchool.value,
        course_group_id: selectedGroup.value,
      });

      toast.success('Curso editado com sucesso!');
      history.push('/courses');

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

  const initialData = course;

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

  const groupOptions = groups.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  async function createGroup(data) {
    try {
      const response = await api.post(`/course_groups/`, data);
      console.tron.log(response.data);
      setSelectedGroup({
        value: response.data.id,
        label: response.data.title,
      });
    } catch (err) {
      console.tron.log(err);
    }
  }

  function handleGroupChange(newValue, actionMeta) {
    console.tron.log(`Value Changed - action: ${actionMeta.action}`);
    console.tron.log(newValue);

    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        setSelectedGroup(newValue);
        break;

      case 'create-option':
        console.tron.log(`Create option`);
        createGroup({title: newValue.label});
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
                <h1 className="h3 mb-4 text-gray-800">Editar Curso</h1>

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
                              <label htmlFor="name">Escola</label>
                              <Select
                                name="school_id"
                                options={schoolOptions}
                                onChange={handleSchoolChange}
                                value={selectedSchool}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="title">Nome</label>
                              <Input
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Seu Nome"
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="name">Grupo</label>
                              <CreatableSelect
                                label="Selecione"
                                isClearable
                                onChange={handleGroupChange}
                                // onInputChange={handleCountryInputChange}
                                options={groupOptions}
                                placeholder="Selecione"
                                value={selectedGroup}
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Editar Curso
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

export default CourseEdit;
