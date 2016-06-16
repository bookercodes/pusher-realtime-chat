import React from 'react'
import {
  HelpBlock,
  Button,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap'

const MessageInputForm = React.createClass({
  propTypes: {
    handleSubmit: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      message: '',
      validationState: null
    }
  },

  onMessageChanged (e) {
    this.setState({
      message: e.target.value
    })
  },

  handleSubmit (e) {
    e.preventDefault()

    if (this.state.message.length < 1) {
      this.setState({
        validationState: 'error'
      })
    } else {
      this.setState({
        validationState: null,
        message: ''
      })
      this.props.handleSubmit(this.state.message)
    }
  },

  renderHelpBlock () {
    if (this.state.validationState === 'error') {
      return <HelpBlock>You must enter a message</HelpBlock>
    }
    return null
  },

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup className='messages-panel__form-group' validationState={this.state.validationState}>
          <InputGroup>
            <FormControl
              type='text'
              onChange={this.onMessageChanged}
              value={this.state.message}
              placeholder='Your message' />
            <InputGroup.Button>
              <Button
                bsStyle='primary'
                type='submit'>
                  Send
              </Button>
            </InputGroup.Button>
          </InputGroup>
          {this.renderHelpBlock()}
        </FormGroup>
      </form>
    )
  }
})

export default MessageInputForm
