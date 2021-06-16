import React, {useState, useEffect, useMemo} from 'react';

// import PropTypes from 'prop-types';
import {useParams, Link} from 'react-router-dom';
import BTable from 'react-bootstrap/Table';

import {useTable} from 'react-table';
import PropTypes from 'prop-types';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build your UI
  const {getTableProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

function Course() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'title',
      },
      {
        Header: '',
        accessor: 'id',
        Cell: (row) => (
          <div>
            <Link
              className="btn btn-light btn-icon-split"
              to={`/courses/${row.value}`}>
              <span className="icon text-gray-600">
                <i className="fas fa-arrow-right" />
              </span>
              <span className="text">Visualizar</span>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const [group, setGroup] = useState({});
  const {id} = useParams();

  async function loadCourse() {
    try {
      const response = await api.get(`/course_groups/${id}`);
      setGroup(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadCourse();
  }, []);

  const data = useMemo(() => group, [group]);

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
                <h1 className="h3 mb-4 text-gray-800">Grupo {id}</h1>

                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Card */}
                      <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Informações do grupo
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
                                to={`/courses/edit/${group.id}`}>
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
                            {group.id}
                          </p>
                          <p>
                            <strong>Nome: </strong>
                            {group.title}
                          </p>
                          <p>
                            <strong>Data de Criação: </strong>
                            {group.created_at}
                          </p>
                        </div>
                      </div>

                      <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Curso
                          </h6>
                          {/* <div className="dropdown no-arrow">
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
                                to={`/address/edit/${
                                  course.school && course.school.id
                                }`}>
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
                          </div> */}
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                          <Table columns={columns} data={data.courses} />
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

export default Course;

Table.propTypes = {
  columns: PropTypes.element,
  data: PropTypes.element,
};

Table.defaultProps = {
  columns: [],
  data: [],
};
