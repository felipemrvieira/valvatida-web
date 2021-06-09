import React, {useState, useEffect} from 'react';

// import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import CreatableSelect from 'react-select/creatable';

import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Sidebar from '../../../template/Sidebar';
import Topbar from '../../../template/Topbar';
import Footer from '../../../template/Footer';
import LogoutModal from '../../../template/LogoutModal';
import api from '../../../services/api';

const schema = Yup.object().shape({
  street: Yup.string().required('Insira o nome da rua'),
  number: Yup.string().required('Insira o número da rua'),
  ref: Yup.string().required('Ponto de referência'),
  lat: Yup.string().required('Latitude'),
  long: Yup.string().required('Longitude'),
});

function SchoolsEdit() {
  const [address, setAddress] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const {id} = useParams();
  const history = useHistory();

  async function loadCountries() {
    try {
      const response = await api.get(`/countries/`);
      setCountries(response.data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadStates(data) {
    try {
      const response = await api.get(`/countries/${data}`);
      setStates(response.data.states);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadCities(data) {
    try {
      const response = await api.get(`/states/${data}`);
      setCities(response.data.cities);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadNeighborhoods(data) {
    try {
      const response = await api.get(`/cities/${data}`);
      setNeighborhoods(response.data.neighborhoods);
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function loadAddress() {
    try {
      const response = await api.get(`/addresses/${id}`);
      setAddress(response.data);
      console.tron.log(response.data);

      const country = response.data.extra && response.data.extra.country;
      setSelectedCountry({label: country.name, value: country.id});
      loadStates(country.id);

      const state = response.data.extra && response.data.extra.state;
      setSelectedState({label: state.name, value: state.id});
      loadCities(state.id);

      const city = response.data.extra && response.data.extra.city;
      setSelectedCity({label: city.name, value: city.id});
      loadNeighborhoods(city.id);

      const neighborhood =
        response.data.extra && response.data.extra.neighborhood;
      setSelectedNeighborhood({
        label: neighborhood.name,
        value: neighborhood.id,
      });
    } catch (err) {
      console.tron.log(err);
    }
  }

  async function createCountry(data) {
    try {
      const response = await api.post(`/countries/`, data);
      console.tron.log(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    loadAddress();
    loadCountries();
  }, []);

  async function handleSubmit(data) {
    console.tron.log(data);
    try {
      const response = await api.patch(`/addresses/${id}`, {
        ...data,
        neighborhood_id: selectedNeighborhood.value,
      });

      toast.success('Edição realizada com sucesso!');
      console.tron.log(response);

      history.goBack();
    } catch (err) {
      console.tron.log(err);

      toast.error(`Falha na edição: ${err}`);
    }
  }

  const newCountries = countries.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const newStates = states.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const newCities = cities.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const newNeighborhoods = neighborhoods.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  function handleCountryChange(newValue, actionMeta) {
    console.tron.log(`Value Changed - action: ${actionMeta.action}`);
    console.tron.log(newValue);

    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        loadStates(newValue.value);
        setSelectedCountry(newValue);
        setSelectedState(null);
        setSelectedCity(null);
        setSelectedNeighborhood(null);

        break;

      case 'create-option':
        console.tron.log(`Create option`);
        createCountry({name: newValue.label});
        break;

      default:
        break;
    }
  }

  function handleStateChange(newValue, actionMeta) {
    console.tron.log(`Value Changed - action: ${actionMeta.action}`);
    console.tron.log(newValue);

    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        loadCities(newValue.value);
        setSelectedState(newValue);
        setSelectedCity(null);
        setSelectedNeighborhood(null);

        break;

      case 'create-option':
        console.tron.log(`Create option`);
        createCountry({name: newValue.label});
        break;

      default:
        break;
    }
  }

  function handleCityChange(newValue, actionMeta) {
    console.tron.log(`Value Changed - action: ${actionMeta.action}`);
    console.tron.log(newValue);

    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        loadNeighborhoods(newValue.value);
        setSelectedCity(newValue);
        setSelectedNeighborhood(null);

        break;

      case 'create-option':
        console.tron.log(`Create option`);
        createCountry({name: newValue.label});
        break;

      default:
        break;
    }
  }

  function handleNeighborhoodChange(newValue, actionMeta) {
    console.tron.log(`Value Changed - action: ${actionMeta.action}`);
    console.tron.log(newValue);

    switch (actionMeta.action) {
      case 'select-option':
        console.tron.log(`Select option`);
        setSelectedNeighborhood(newValue);

        break;

      case 'create-option':
        console.tron.log(`Create option`);
        createCountry({name: newValue.label});
        break;

      default:
        break;
    }
  }

  function handleCountryInputChange(inputValue, actionMeta) {
    // console.tron.group('Input Changed');
    console.tron.log(inputValue);
    console.tron.log(`Input Changed - action: ${actionMeta.action}`);
    // console.tron.groupEnd();
  }

  function handleStateInputChange(inputValue, actionMeta) {
    // console.tron.group('Input Changed');
    console.tron.log(inputValue);
    console.tron.log(`Input Changed - action: ${actionMeta.action}`);
    // console.tron.groupEnd();
  }

  const initialData = address;

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
                <h1 className="h3 mb-4 text-gray-800">Endereço {id}</h1>

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
                          <div className="form-group">
                            <label htmlFor="name">País</label>
                            <CreatableSelect
                              label="Selecione"
                              isClearable
                              onChange={handleCountryChange}
                              onInputChange={handleCountryInputChange}
                              options={newCountries}
                              placeholder="Selecione"
                              value={selectedCountry}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Estado</label>
                            <CreatableSelect
                              isClearable
                              onChange={handleStateChange}
                              onInputChange={handleStateInputChange}
                              options={newStates}
                              placeholder="Selecione"
                              value={selectedState}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Cidade</label>
                            <CreatableSelect
                              isClearable
                              onChange={handleCityChange}
                              onInputChange={handleStateInputChange}
                              options={newCities}
                              value={selectedCity}
                              placeholder="Selecione"
                            />
                          </div>
                          <Form
                            schema={schema}
                            onSubmit={handleSubmit}
                            initialData={initialData}>
                            <div className="form-group">
                              <label htmlFor="name">Bairro</label>
                              <CreatableSelect
                                isClearable
                                onChange={handleNeighborhoodChange}
                                onInputChange={handleStateInputChange}
                                options={newNeighborhoods}
                                value={selectedNeighborhood}
                                placeholder="Selecione"
                                name="neighborhood_id"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Nome da Rua</label>
                              <Input
                                className="form-control"
                                id="street"
                                name="street"
                                placeholder="Nome da rua"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Número</label>
                              <Input
                                className="form-control"
                                id="number"
                                name="number"
                                placeholder="Seu Nome"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Ponto de referência</label>
                              <Input
                                className="form-control"
                                id="ref"
                                name="ref"
                                placeholder="Referência"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Latitude</label>
                              <Input
                                className="form-control"
                                id="lat"
                                name="lat"
                                placeholder="Latitude"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Longitude</label>
                              <Input
                                className="form-control"
                                id="long"
                                name="long"
                                placeholder="Longitude"
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
