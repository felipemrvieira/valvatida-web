import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './images/logo.png';
import LogoIcon from './images/logo-icon.png';

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar">
      {/* <!--  Sidebar - Brand  --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/news">
        <div className="sidebar-brand-icon">
          <img src={LogoIcon} alt="logo icone" />
        </div>
        <div className="sidebar-brand-full mx-3">
          <img src={Logo} alt="logo completa" />
        </div>
      </Link>

      {/* <!--  Divider  --> */}
      <hr className="sidebar-divider" />

      {/* <!--  Heading  --> */}
      <div className="sidebar-heading">Administrativo</div>
      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseAdmin"
          aria-expanded="true"
          aria-controls="collapseAdmin">
          <i className="fas fa-fw fa-cog" />
          <span>Administrador</span>
        </div>
        <div
          id="collapseAdmin"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/admin">
              Listar Administradores
            </Link>
            <Link className="collapse-item" to="/admin/register">
              Cadastrar Administrador
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}

      {/* <!--  Divider  --> */}
      <hr className="sidebar-divider" />

      {/* <!--  Heading  --> */}
      <div className="sidebar-heading">Escola</div>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseSchool"
          aria-expanded="true"
          aria-controls="collapseSchool">
          <i className="fas fa-fw fa-cog" />
          <span>Escola</span>
        </div>
        <div
          id="collapseSchool"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/schools">
              Listar Escolas
            </Link>
            <Link className="collapse-item" to="/schools/new">
              Cadastrar Escola
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseNotice"
          aria-expanded="true"
          aria-controls="collapseNotice">
          <i className="fas fa-fw fa-cog" />
          <span>Professor</span>
        </div>
        <div
          id="collapseNotice"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/teachers">
              Listar Professores
            </Link>
            <Link className="collapse-item" to="/teachers/new">
              Cadastrar Professor
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePhoto"
          aria-expanded="true"
          aria-controls="collapsePhoto">
          <i className="fas fa-fw fa-camera" />
          <span>Aluno</span>
        </div>
        <div
          id="collapsePhoto"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/students">
              Listar Alunos
            </Link>
            <Link className="collapse-item" to="/students/new">
              Cadastrar Aluno
            </Link>
            <Link className="collapse-item" to="/enrollments/new">
              Matricular Aluno
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Divider  --> */}
      <hr className="sidebar-divider" />

      {/* <!--  Heading  --> */}
      <div className="sidebar-heading">Curso</div>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      {/* <li className="nav-item">
        <div className="nav-link collapsed" href="#" data-toggle="collapse"
          data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Artigos</span>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to={"/articles"}>Listar Artigos</Link>
            <Link className="collapse-item" to={"/articles/new"}>Cadastrar Artigo</Link>
          </div>
        </div>
      </li> */}

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseGallery"
          aria-expanded="true"
          aria-controls="collapseGallery">
          <i className="fas fa-fw fa-cog" />
          <span>Cursos</span>
        </div>
        <div
          id="collapseGallery"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/courses">
              Listar Cursos
            </Link>
            <Link className="collapse-item" to="/courses/new">
              Cadastrar Curso
            </Link>
            <Link className="collapse-item" to="/groups">
              Listar Grupos
            </Link>
          </div>
        </div>
      </li>

      {/* <li className="nav-item">
        <div className="nav-link collapsed" href="#" data-toggle="collapse"
          data-target="#collapseBanner" aria-expanded="true" aria-controls="collapseBanner">
          <i className="fas fa-fw fa-image"></i>
          <span>Banners</span>
        </div>
        <div id="collapseBanner" className="collapse" aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to={"/banners"}>Listar Banners</Link>
            <Link className="collapse-item" to={"/banners/new"}>Cadastrar Banner</Link>
          </div>
        </div>
      </li> */}

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseEditoria"
          aria-expanded="true"
          aria-controls="collapseEditoria">
          <i className="fas fa-fw fa-tag" />
          <span>Assuntos</span>
        </div>
        <div
          id="collapseEditoria"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/subjects">
              Listar Assuntos
            </Link>
            <Link className="collapse-item" to="/subjects/new">
              Cadastrar Assunto
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseQuestion"
          aria-expanded="true"
          aria-controls="collapseQuestion">
          <i className="fas fa-fw fa-tag" />
          <span>Questões</span>
        </div>
        <div
          id="collapseQuestion"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/questions">
              Listar Questões
            </Link>
            <Link className="collapse-item" to="/questions/new">
              Cadastrar Questão
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Divider  --> */}
      <hr className="sidebar-divider" />

      {/* <!--  Heading  --> */}
      <div className="sidebar-heading">Perfil</div>

      {/* <!--  Nav Item - Pages Collapse Menu  --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/agency">
          <i className="fas fa-fw fa-id-badge" />
          <span>Secretaria</span>
        </Link>
      </li>

      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapseEditoria">
          <i className="fas fa-fw fa-id-badge" />
          <span>Páginas Internas</span>
        </div>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/government">
              Governo
            </Link>
            <Link className="collapse-item" to="/press">
              Imprensa
            </Link>
            <Link className="collapse-item" to="/informacoes-publicas">
              Informações Públicas
            </Link>
            <Link className="collapse-item" to="/solicitacao-de-informacao">
              Solicitação de Informações
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <div
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseSecretaria"
          aria-expanded="true"
          aria-controls="collapseSecretaria">
          <i className="fas fa-fw fa-id-badge" />
          <span>Cadastro</span>
        </div>
        <div
          id="collapseSecretaria"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Opções:</h6>
            <Link className="collapse-item" to="/addresses/new">
              Cadastrar Endereço
            </Link>
            <Link className="collapse-item" to="/social/new">
              Cadastrar Rede Social
            </Link>
            <Link className="collapse-item" to="/phones/new">
              Cadastrar Telefone
            </Link>
            <Link className="collapse-item" to="/users/new">
              Cadastrar Usuário
            </Link>
            <Link className="collapse-item" to="/government/new">
              Governo
            </Link>
            <Link className="collapse-item" to="/press/new">
              Imprensa
            </Link>
            <Link className="collapse-item" to="/informacoes-publicas/new">
              Informações Públicas
            </Link>
            <Link className="collapse-item" to="/solicitacao-de-informacao/new">
              Solicitação de Informações
            </Link>
          </div>
        </div>
      </li>

      {/* <!--  Divider  --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!--  Sidebar Toggler (Sidebar)  --> */}
      {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div> */}
    </ul>
    //   {/* <!--  End of Sidebar  --> */}
  );
}

export default Sidebar;
