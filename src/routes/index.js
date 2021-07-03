import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Page from '../pages/Page';
import AdminSignIn from '../pages/Admin/SignIn';
import AdminRegister from '../pages/Admin/Register';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Teachers from '../pages/Teacher';
import TeachersNew from '../pages/Teacher/New';
import TeachersShow from '../pages/Teacher/Show';
import TeachersEdit from '../pages/Teacher/Edit';

import Courses from '../pages/Course';
import CoursesNew from '../pages/Course/New';
import CoursesShow from '../pages/Course/Show';
import CoursesEdit from '../pages/Course/Edit';

import CoursesGroups from '../pages/CourseGroup';
import CoursesGroupsShow from '../pages/CourseGroup/Show';

import Schools from '../pages/School';
import SchoolsShow from '../pages/School/Show';
import SchoolsNew from '../pages/School/New';
import SchoolsEdit from '../pages/School/Edit';

import Students from '../pages/Student';
import StudentsShow from '../pages/Student/Show';
import StudentsNew from '../pages/Student/New';
import StudentsEdit from '../pages/Student/Edit';

import Enrollments from '../pages/Enrollment';
import EnrollmentsShow from '../pages/Enrollment/Show';
import EnrollmentsNew from '../pages/Enrollment/New';
import EnrollmentsEdit from '../pages/Enrollment/Edit';

import Subjects from '../pages/Subject';
import SubjectsShow from '../pages/Subject/Show';
import SubjectsNew from '../pages/Subject/New';
import SubjectsEdit from '../pages/Subject/Edit';

import Questions from '../pages/Question';
import QuestionsShow from '../pages/Question/Show';
import QuestionsNew from '../pages/Question/New';
import QuestionsEdit from '../pages/Question/Edit';

import AddressesEdit from '../pages/Address/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Schools} isPrivate />
      <Route path="/page" component={Page} isPrivate />
      <Route path="/admin/signin" component={AdminSignIn} />
      <Route path="/admin/register" component={AdminRegister} isPrivate />
      {/* <Route path="/schools/new" component={NewSchool} isPrivate /> */}
      <Route path="/schools/" exact component={Schools} isPrivate />
      <Route path="/schools/new" exact component={SchoolsNew} isPrivate />
      <Route path="/schools/:id" exact component={SchoolsShow} isPrivate />
      <Route path="/schools/edit/:id" exact component={SchoolsEdit} isPrivate />

      <Route path="/students/" exact component={Students} isPrivate />
      <Route path="/students/new" exact component={StudentsNew} isPrivate />
      <Route path="/students/:id" exact component={StudentsShow} isPrivate />
      <Route
        path="/students/edit/:id"
        exact
        component={StudentsEdit}
        isPrivate
      />

      <Route path="/enrollments/" exact component={Enrollments} isPrivate />
      <Route
        path="/enrollments/new"
        exact
        component={EnrollmentsNew}
        isPrivate
      />
      <Route
        path="/enrollments/:id"
        exact
        component={EnrollmentsShow}
        isPrivate
      />
      <Route
        path="/enrollments/edit/:id"
        exact
        component={EnrollmentsEdit}
        isPrivate
      />

      <Route path="/courses/" exact component={Courses} isPrivate />
      <Route path="/courses/new" exact component={CoursesNew} isPrivate />
      <Route path="/courses/:id" exact component={CoursesShow} isPrivate />
      <Route path="/courses/edit/:id" exact component={CoursesEdit} isPrivate />

      <Route path="/subjects/" exact component={Subjects} isPrivate />
      <Route path="/subjects/new" exact component={SubjectsNew} isPrivate />
      <Route path="/subjects/:id" exact component={SubjectsShow} isPrivate />
      <Route
        path="/subjects/edit/:id"
        exact
        component={SubjectsEdit}
        isPrivate
      />

      <Route path="/questions/" exact component={Questions} isPrivate />
      <Route path="/questions/new" exact component={QuestionsNew} isPrivate />
      <Route path="/questions/:id" exact component={QuestionsShow} isPrivate />
      <Route
        path="/questions/edit/:id"
        exact
        component={QuestionsEdit}
        isPrivate
      />

      <Route path="/groups" exact component={CoursesGroups} isPrivate />
      <Route path="/groups/:id" exact component={CoursesGroupsShow} isPrivate />

      <Route path="/teachers/" exact component={Teachers} isPrivate />
      <Route path="/teachers/new" exact component={TeachersNew} isPrivate />
      <Route path="/teachers/:id" exact component={TeachersShow} isPrivate />
      <Route
        path="/teachers/edit/:id"
        exact
        component={TeachersEdit}
        isPrivate
      />

      <Route
        path="/address/edit/:id"
        exact
        component={AddressesEdit}
        isPrivate
      />

      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

// cadastro de admin do app
// login admin do app
// Cadastro de admin de escolas
// login de admin da escola
// Cadastro de escola
// Cadastro de professor
// cadastro de curso
