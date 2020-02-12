import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const tasks = [];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor set up
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  // add new item
  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleItem = itemId => {
    
    this.setState({
      completed: this.state.completed.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      completed: this.state.completed.filter(item => item.completed === false)
    });
  };



  render() {
    return (
      <div>
        <div className ='Header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
