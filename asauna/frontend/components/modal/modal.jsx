import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateWorkspaceContainer from '../navbar/create_workspace_form_container'
import EditWorkspaceContainer from '../navbar/edit_workspace_form_container'
import { withRouter } from 'react-router-dom';

function Modal({ isOpen, modalType, closeModal, location }) {
    if (!isOpen) {
        return null;
    }
    let component;
    switch (modalType) {
        case 'Create Workspace':
            component = <CreateWorkspaceContainer />;
            break;
        case 'Edit Workspace':
            component = <EditWorkspaceContainer location={location}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modalType: state.UI.modal.modalType,
        isOpen: state.UI.modal.isOpen,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Modal))