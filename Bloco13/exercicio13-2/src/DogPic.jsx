import React, { Component } from 'react';

class DogPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      message: '',
      dogName: '',
      array: [],
    };
  }

  componentDidMount() {
    this.setState({ message: localStorage.getItem('doggo') });
    setTimeout(() => this.setState({ isLoaded: true }), 500);
  }

  shouldComponentUpdate(prop, state) {
    if (state.message && state.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { message } = this.state;
    localStorage.setItem('doggo', message);
    // alert(message.split('/')[4]);
  }

  fetchPic = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          message: result.message,
        });
      });
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div
          style={{ display: 'flex', margin: 'auto', flexDirection: 'column', width: 'fit-content' }}
        >
          <button
            type="button"
            onClick={() => {
              this.fetchPic();
            }}
          >
            New Doggo!
          </button>
          <div>Loading...</div>
        </div>
      );
    }
    return (
      <div
        style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          width: 'fit-content',
          alignItems: 'center',
        }}
      >
        <button
          type="button"
          onClick={() => {
            this.fetchPic();
          }}
        >
          New Doggo!
        </button>
        <img src={this.state.message} style={{ maxHeight: '300px' }} />
      </div>
    );
  }
}

export default DogPic;
