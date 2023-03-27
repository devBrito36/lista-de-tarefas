import React from "react";

export default class App extends React.Component {
  state = {
    tarefa: "",
    placeholder: "Tarefa",
    lista: []
  };

  recebendoInput = (event) => {
    this.setState({ tarefa: event.target.value });
  };

  adicionar = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random()
      }),
      tarefa: ""
    });
  };
  deletar = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };
  render() {
    return (
      <>
        <section>
          <h1>Lista de Tarefas</h1>
          <div>
            <input
              value={this.state.tarefa}
              placeholder={this.state.placeholder}
              onChange={this.recebendoInput}
            />
            <button class="b1" onClick={this.adicionar}>
              +
            </button>
          </div>
          <ol>
            {this.state.lista.map((item) => (
              <nav>
                <li>{item.tarefa} </li>
                <button
                  class="b2"
                  onClick={() => {
                    this.deletar(item.id);
                  }}
                >
                  x
                </button>
              </nav>
            ))}
          </ol>
        </section>
      </>
    );
  }
}
