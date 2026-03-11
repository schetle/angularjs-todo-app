import type { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface LayoutProps {
  activePanel: ReactNode;
  archivedPanel: ReactNode;
  counter: ReactNode;
  addForm: ReactNode;
}

function Layout({ activePanel, archivedPanel, counter, addForm }: LayoutProps) {
  return (
    <Container>
      <h1 className="text-center">Wellcome to AngularJS todo list</h1>
      <Row>
        <Col xs={6}>{activePanel}</Col>
        <Col xs={6}>{archivedPanel}</Col>
      </Row>
      <Row className="text-center">
        <Col className="mt-2 counter-bar w-100">
          {counter}
        </Col>
        <Col xs={12} className="mt-2">
          {addForm}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
