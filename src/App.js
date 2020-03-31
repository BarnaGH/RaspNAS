import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div class="container-login">
        <LoginForm history={this.props.history}/>
        <Footer />
      </div>
    );
  }
}

export default App;