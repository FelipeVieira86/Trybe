// https://codepen.io/nathansebhastian/pen/qgOJKe?editors=0010

const card1 = {
  featureImage: 'https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/macarrao.jpg',
  title: 'Diliça de macarrão!',
  description: 'to com fome...',
  link: 'https://mdemulher.abril.com.br/receitas/macarrao-aromatico/',
};

const card2 = {
  featureImage:
    'https://img.itdg.com.br/tdg/images/recipes/000/000/876/324587/324587_original.jpg?mode=crop&width=710&height=400',
  title: 'Diliça de lasanha!',
  description: 'quero uma lasanha...',
  link: 'https://www.tudogostoso.com.br/receita/876-lasanha-de-carne-moida.html',
};

function Card(props) {
  return (
    <div className='card'>
      <img className='card-img-top' src={props.featureImage} alt={props.title} />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <a href={props.link} className='btn btn-primary'>
          Learn more
        </a>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png'
          title='How To Make Interactive ReactJS Form'
          description="Let's write some interactive form with React"
          link='https://sebhastian.com/interactive-react-form'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png'
          title='Babelify your JavaScript code'
          description='Babel make JavaScript code browser-compatible.'
          link='https://sebhastian.com/babel-guide'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png'
          title='JavaScript Basics Before You Learn React'
          description='Learn the prerequisites of learning React fast'
          link='https://sebhastian.com/js-before-react'
        />
      </div>
      <div className='col-sm-4'>{Card(card1)}</div>
      <div className='col-sm-4'>{Card(card2)}</div>
    </div>
  );
}

ReactDOM.render(<CardList />, document.getElementById('root'));
