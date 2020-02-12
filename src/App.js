import React, {Component} from 'react';



const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
];

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
      completed: [...this.state.completed, newItem]
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
    console.log(this.state.groceries);
    this.setState({
      completed: this.state.completed.filter(item => item.completed === false)
    });
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
