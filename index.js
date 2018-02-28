import React from 'react';
import { render } from 'react-dom';
import Menu from './Menu';
import Navigation from './Navigation';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data: ""
    }
    this.formChild1 = this.formChild1.bind(this);
  }
  formChild1(params) {
    this.setState({
      data: params
    })
  }
  render() {
    if(this.state.data!=="") {
      return (<div>

        <Navigation fncall={this.formChild1.bind(this)} />
        <Menu data={this.state.data} />
      </div>);
    }
    else {
      return (<div>
        <Navigation fncall={this.formChild1.bind(this)} />
        </div>
      );
    }
  }
}
render(<App />, document.getElementById('root'));
