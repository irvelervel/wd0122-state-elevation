import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  // if we're able to move the state here, at that point
  // we can pass it down to ALL the components at the same time!
  // because the components at this point are BOTH CHILDREN
  // of the same component hosting the state!

  // you want to elevate the state until you find the COMMON parent
  // of all the components you want to share it with!

  // first step: convert App into a Class Component, so it can hold a state...

  state = {
    selected: undefined,
  }

  changeSelected = (newSelectedValue) => {
    this.setState({
      selected: newSelectedValue,
    })
  }
  // changeSelected is a function which takes the new value for selected
  // and sets the state of App with it!

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected}
                  changeSelected={this.changeSelected}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
