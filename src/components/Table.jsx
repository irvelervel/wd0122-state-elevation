import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeSelected('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Prop of selected is {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
