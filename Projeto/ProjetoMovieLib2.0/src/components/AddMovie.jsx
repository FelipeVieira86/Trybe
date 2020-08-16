import React, { Component } from 'react';
import InputText from './inputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeState = this.changeState.bind(this);
    this.changeNumberState = this.changeNumberState.bind(this);
  }

  reset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeState({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  changeNumberState({ target: { value } }, name) {
    return this.setState({ [name]: Number(value) });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const gO = [
      { value: 'action', text: 'Ação' }, { value: 'comedy', text: 'Comédia' }, { value: 'thriller', text: 'Suspense' },
    ];

    return (
      <form className="add-movie">
        <div className="add-movie-div-1">
          <InputText LT="Título" v={title} oCFn={(event) => this.changeState(event, 'title')} />
          <InputText LT="Subtítulo" v={subtitle} oCFn={(event) => this.changeState(event, 'subtitle')} />
        </div>
        <InputText LT="Imagem" v={imagePath} oCFn={(event) => this.changeState(event, 'imagePath')} />
        <TextArea LT="Sinopse" v={storyline} oCFn={(event) => this.changeState(event, 'storyline')} />
        <div className="add-movie-div-2">
          <InputNumber LT="Avaliação" v={rating} oCFn={(event) => this.changeNumberState(event, 'rating')} />
          <InputSelect LT="Gênero" v={genre} a={gO} oCFn={(event) => this.changeState(event, 'genre')} />
          <button type="button" onClick={() => { onClick(this.state); this.reset(); }}>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

export default AddMovie;
