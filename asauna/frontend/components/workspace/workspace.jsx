import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import Sidebar from '../sidebar/sidebar_container';

class Workspace extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="workspace--container">
                <Sidebar 
                    workspace={this.props.workspace}
                    currentUser={this.props.currentUser}
                />
                <Navbar />
            </div>
        );
    }
}

export default Workspace;
