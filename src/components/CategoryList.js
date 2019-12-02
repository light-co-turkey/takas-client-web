import React, { Component } from 'react';
import './styles/category-list.scss';

export class CategoryList extends Component {
  state = {
    data: [],
    intervalIsSet: false,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };
  render() {
    const names = ["Elektronic", "Giyim", "Ev eşyası", "Araba" ];

    return (
      <div style={{width: '100%', height: '100%'}}>
        <ul>{this.state.data.map(cat => <li key={cat} className="cat-item"> {cat} </li>)}</ul>
      </div>
    );
  }
}

export default CategoryList;
