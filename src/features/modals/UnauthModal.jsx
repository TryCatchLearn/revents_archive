import React, { Component } from 'react';
import { Modal, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal, openModal } from './modalActions';

const actions = { closeModal, openModal };

class UnauthModal extends Component {

    handleCloseModal = () => {
        if (this.props.location.pathname.includes('/event')) {
            this.props.closeModal()
        } else {
            this.props.history.goBack();
            this.props.closeModal();
        }
    }

  render() {
    const { openModal} = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.handleCloseModal}>
        <Modal.Header>You need to be signed in to do that!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Please either login or register to see this page</p>
            <Button.Group widths={4}>
              <Button fluid color="teal" onClick={() => openModal('LoginModal')}>
                Login
              </Button>
              <Button.Or />
              <Button fluid positive onClick={() => openModal('RegisterModal')}>
                Register
              </Button>
            </Button.Group>
            <Divider />
            <div style={{ textAlign: 'center' }}>
              <p>Or click cancel to continue as a guest</p>
              <Button onClick={this.handleCloseModal}>Cancel</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(connect(null, actions)(UnauthModal));
