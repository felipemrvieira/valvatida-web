import React from 'react';
import {Form, Input} from '@rocketseat/unform';

import * as Yup from 'yup';

// import { Container } from './styles';
const schema = Yup.object().shape({
  name: Yup.string().required('Insira o nome do usuário'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'sua senha precisa ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirme sua senha'),
});

function AdminRegister() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <h1>Register new Admin</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
}

export default AdminRegister;
