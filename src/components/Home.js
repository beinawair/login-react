// import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {
  // state = {};

  // componentDidMount() {
  //   // const config = {
  //   //   headers: {
  //   //     Authorization: 'Bearer ' + localStorage.getItem('token'),
  //   //   },
  //   // };

  //   axios
  //     .get('/api/user')
  //     .then((res) => {
  //       this.setState({
  //         user: res.data,
  //       });
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    if (this.props.user) {
      return (
        <h2>
          Hi {this.props.user.firstName} {this.props.user.lastName}
        </h2>
      );
    }
    return <h2>Your are not logged in</h2>;
  }
}

export default Home;
