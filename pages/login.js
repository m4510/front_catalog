import React, { useState } from 'react';
import Router from 'next/router';
import { Form, Button, Container } from 'react-bootstrap';
import BaseLayout from '../components/layouts/BaseLayout';
import { sendAuthentication } from '../actions/index';
import Notification from '../classes/Notification';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const notification = new Notification('', '');

  const onChangeInputHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async () => {
    const authHandler = await sendAuthentication(form);
    if (authHandler.code === 302) Router.push('/');
    else {
      notification.setNotificationData('error', authHandler.message);
      notification.showNotification();
    }
  };

  return (
    <BaseLayout>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce el usuario"
              onChange={onChangeInputHandler}
              value={form.username}
              name="username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce la contraseña"
              onChange={onChangeInputHandler}
              value={form.password}
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={onSubmitHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    </BaseLayout>
  );
};

export default Login;
