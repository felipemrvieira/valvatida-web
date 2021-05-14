import React from 'react';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function AdminSignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <h1>SignIn as Admin</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Seu email" />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}

export default AdminSignIn;
