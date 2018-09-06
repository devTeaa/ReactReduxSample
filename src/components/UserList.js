import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import User from "./User";
import { fetchUsers, deleteUsers } from "../actions/userActions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onDeleteClick(id) {
    console.log(id);
    this.props.deleteUsers(id);
  }

  render() {
    // console.log(this.props.users.usersReducer);
    // return <div />;
    // if (
    //   Object.getOwnPropertyNames(this.props.users.usersReducer).length === 0
    // ) {
    //   return <div />;
    // }

    if (this.props.users.usersReducer.length === 0) {
      return <div />;
    } else {
      var userNodes = this.props.users.usersReducer.map(item => {
        return (
          <div key={item.id}>
            <User name={item.name} email={item.email} key={item.id}>
              {item.name}
            </User>
            <button onClick={this.onDeleteClick.bind(this, item.id)}>
              Delete
            </button>
          </div>
        );
      });
      return (
        <div>
          <h1>Users</h1>
          {userNodes}
        </div>
      );
    }
  }
}

UserList.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.usersReducer
});

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUsers }
)(UserList);
