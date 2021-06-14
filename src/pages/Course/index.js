import React, {useState, useEffect, useMemo} from 'react';
import BTable from 'react-bootstrap/Table';
import {useTable} from 'react-table';

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Sidebar from '../../template/Sidebar';
import Topbar from '../../template/Topbar';
import Footer from '../../template/Footer';
import LogoutModal from '../../template/LogoutModal';
import api from '../../services/api';

// import 'react-table/react-table.css';
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

  const [courses, setCourses] = useState([]);

  async function loadCourses() {
    try {
      const response = await api.get('/courses');
      setCourses(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  const data = useMemo(() => courses, [courses]);

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
                <h1 className="h3 mb-4 text-gray-800">Cursos</h1>

                <div>
                  <Table columns={columns} data={data} />
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
