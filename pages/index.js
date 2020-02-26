import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BaseLayout from '../components/layouts/BaseLayout';

export const HomePage = () => {
  return (
    <BaseLayout>
      <Row>
        <Col xs={12}>Estas en el home</Col>
      </Row>
    </BaseLayout>
  );
};

// HomePage.getInitialProps = async () => {
//   // if (typeof window === "undefined") {
//   //   console.log("estas en el server");
//   // }
// };

export default HomePage;
