import React from 'react';

class Button extends React.Component {
  render() {
    const { testId, addCart, produto, className, qnt } = this.props;
    return (
      <div>
        <button
          className={className}
          type="button"
          data-testid={testId}
          onClick={() => addCart(produto, qnt)}
        >
          Adicionar Produto
        </button>
      </div>
    );
  }
}

export default Button;
