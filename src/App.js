import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import AddTask from './AddList';
import TaskList from './TaskList';

function App() {
  return (
    
      <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
           <Header />
           <div className='shadow p-3 '>
           <AddTask />
           <TaskList/>
           </div>
        </Col>
        </Row>
      
      </Container>
      
    
  );
}

export default App;
