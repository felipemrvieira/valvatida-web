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
  label: Yup.string().required('Insira o label da questão'),
  command: Yup.string().required('Insira o comando'),
});

function QuestionsEdit() {
  const [question, setQuestion] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [selectedSubject, setSelectedSubject] = useState({});
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [selectedKind, setSelectedKind] = useState({});

  const [alternatives, setAlternatives] = useState([]);
  const [openQuestionAnswers, setOpenQuestionAnswers] = useState([]);

  const {id} = useParams();
  const history = useHistory();

  function kindLabelTranslation(kind) {
    let label = '';
    switch (kind) {
      case 'open':
        label = 'Questão aberta';
        break;
      case 'multiple':
        label = 'Múltipla escolha';
        break;

      default:
        break;
    }
    return label;
  }

  function kindIdTranslation(kind) {
    let kindId = '';
    switch (kind) {
      case 'open':
        kindId = 0;
        break;
      case 'multiple':
        kindId = 1;
        break;

      default:
        break;
    }
    return kindId;
  }

  async function loadQuestion() {
    try {
      const response = await api.get(`/questions/${id}`);
      setQuestion(response.data);
      setSelectedSubject({
        value: response.data.subject.id,
        label: response.data.subject.title,
      });
      setSelectedTeacher({
        value: response.data.teacher.id,
        label: response.data.teacher.name,
      });
      setSelectedKind({
        label: kindLabelTranslation(response.data.kind),
        value: kindIdTranslation(response.data.kind),
      });

      setOpenQuestionAnswers(response.data.open_question_answers);
      setAlternatives(response.data.multiple_question_options);

      // console.tron.log(response.data.open_question_answers);
      console.tron.log(response.data.multiple_question_options);
    } catch (err) {
      console.tron.log(err);
    }
  }

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
    loadQuestion();
    loadSubjects();
    loadTeachers();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.patch(`/questions/${id}`, {
        ...data,
        subject_id: selectedSubject.value,
        teacher_id: selectedTeacher.value,
        kind: selectedKind.value,
        multiple_question_options_attributes: alternatives,
        open_question_answers_attributes: openQuestionAnswers,
      });

      toast.success('Questão editada com sucesso!');
      history.push('/questions');

      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);
      toast.error(`Falha na edição: ${err}`);
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

  const initialData = question;

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

  function addMultipleOption(e) {
    e.preventDefault();
    setAlternatives([...alternatives, {label: '', correct: false}]);
    console.tron.log(alternatives);
  }

  function addOpenQuestionAnswers(e) {
    e.preventDefault();
    setOpenQuestionAnswers([...openQuestionAnswers, {answer: ''}]);
    console.tron.log(openQuestionAnswers);
  }

  function removeMultipleOption(index, optionId) {
    const list = [...alternatives];
    list.splice(index, 1);
    if (optionId) {
      list.push({id: optionId, _destroy: '1'});
    }
    setAlternatives(list);
    // console.tron.log(list);
  }
  function removeAnswer(index, questionAnswerId) {
    const list = [...openQuestionAnswers];
    list.splice(index, 1);
    if (questionAnswerId) {
      list.push({id: questionAnswerId, _destroy: '1'});
    }
    setOpenQuestionAnswers(list);
  }

  function handleOptionInputChange(e, index) {
    const {name, value, checked} = e.target;
    const list = [...alternatives];
    if (name === 'correct') {
      console.tron.log(checked);
      list[index][name] = checked;
    } else {
      console.tron.log(value);
      list[index][name] = value;
    }
    setAlternatives(list);
  }

  function handleAnswerInputChange(e, index) {
    const {name, value} = e.target;
    console.tron.log(name);
    const list = [...openQuestionAnswers];
    list[index][name] = value;
    setOpenQuestionAnswers(list);
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
                <h1 className="h3 mb-4 text-gray-800">Editar Questão</h1>
                <Form
                  schema={schema}
                  onSubmit={handleSubmit}
                  initialData={initialData}>
                  <div className="">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <!-- Card Body --> */}
                        <div className="card shadow mb-4">
                          <div className="card-body">
                            <div className="form-group">
                              <label htmlFor="name">Assunto</label>
                              <Select
                                name="subject_id"
                                options={subjectOptions}
                                onChange={handleSubjectChange}
                                placeholder="Selecione"
                                value={selectedSubject}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Professor</label>
                              <Select
                                isDisabled
                                name="teacher_id"
                                options={teacherOptions}
                                onChange={handleTeacherChange}
                                placeholder="Selecione"
                                value={selectedTeacher}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="name">Tipo</label>
                              <Select
                                name="kind"
                                options={kindOptions}
                                onChange={handleKindChange}
                                placeholder="Selecione"
                                value={selectedKind}
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
                            {/*
                            <button
                              type="submit"
                              className="btn btn-success btn-block">
                              Cadastrar questão
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Respostas da questão aberta */}
                    <div className={selectedKind.value === 0 ? '' : 'd-none'}>
                      <h2 className="h4 mb-4 text-gray-800">
                        Respostas da questão aberta
                        <button
                          type="button"
                          className="btn btn-circle btn-light"
                          onClick={addOpenQuestionAnswers}>
                          <i className="fas fa-fw fa-plus" />
                        </button>
                      </h2>
                      <div className="row">
                        {openQuestionAnswers.map((questionAnswer, index) => (
                          <div className="col-md-12" id={index}>
                            {/* <!-- Card Body --> */}
                            <div className="card shadow mb-4">
                              <button
                                type="button"
                                className="btn btn-light btn-sm"
                                onClick={() =>
                                  removeAnswer(index, questionAnswer.id)
                                }>
                                <i className="fas fa-fw fa-times" />
                              </button>
                              <div className="card-body">
                                <div className="form-group">
                                  <label htmlFor="answer">
                                    Opção de resposta
                                  </label>
                                  <input
                                    className="form-control"
                                    id="answer"
                                    // name={`label-${index}`}
                                    name="answer"
                                    placeholder="Resposta"
                                    value={questionAnswer.answer}
                                    onChange={(e) =>
                                      handleAnswerInputChange(e, index)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Respostas da questão aberta */}

                    {/* Alternativas da múltipla escolha */}
                    <div className={selectedKind.value === 1 ? '' : 'd-none'}>
                      <h2 className="h4 mb-4 text-gray-800">
                        Alternativas da múltipla escolha
                        <button
                          type="button"
                          className="btn btn-circle btn-light"
                          onClick={addMultipleOption}>
                          <i className="fas fa-fw fa-plus" />
                        </button>
                      </h2>
                      <div className="row">
                        {alternatives.map((alternative, index) => (
                          <div
                            className={
                              alternative._destroy === '1'
                                ? 'd-none'
                                : 'col-md-4'
                            }
                            id={index}>
                            {/* <!-- Card Body --> */}
                            <div className="card shadow mb-4">
                              <button
                                type="button"
                                className="btn btn-light btn-sm"
                                onClick={() =>
                                  removeMultipleOption(index, alternative.id)
                                }>
                                <i className="fas fa-fw fa-times" />
                              </button>
                              <div className="card-body">
                                {/* <Form schema={schema} onSubmit={handleSubmit}> */}
                                <div className="form-group">
                                  <label htmlFor="title">
                                    Label da alternativa
                                    {/* {alternative.id} */}
                                  </label>
                                  <input
                                    className="form-control"
                                    id="label"
                                    // name={`label-${index}`}
                                    name="label"
                                    placeholder="Label"
                                    value={alternative.label}
                                    onChange={(e) =>
                                      handleOptionInputChange(e, index)
                                    }
                                  />
                                </div>
                                <div className="form-group check">
                                  <input
                                    checked={alternative.correct}
                                    type="checkbox"
                                    id={`check-${index}`}
                                    // name={`check-${index}`}
                                    name="correct"
                                    onChange={(e) =>
                                      handleOptionInputChange(e, index)
                                    }
                                  />
                                  <label htmlFor={`check-${index}`}>
                                    Alternativa correta
                                  </label>
                                </div>
                                {/* </Form> */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Alternativas da múltipla escolha */}
                    <button
                      type="submit"
                      className="btn btn-success btn-block mb-4">
                      Editar questão
                    </button>
                  </div>

                  <div />
                </Form>
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

export default QuestionsEdit;
