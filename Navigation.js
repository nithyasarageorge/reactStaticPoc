import React from 'react';
const nav = {
  height: '300px',
  width: '100px',
  float: 'left',
  padding: '5px'
};
const link = {
  'textDecoration': 'none',
  'color': 'black',
  'lineHeight': '30px'
};
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state={val:""};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      val: event.target.value
    })
    this.props.fncall(event.target.value);
  }
  render() {
    return (
      <div>
        <div style={nav}>
        <ul>
          <li style={{ listStyleType: 'none' ,'cursor':'pointer', 'marginBottom':'5px'}} onClick={this.handleClick} value="0" className="list">London<br /></li>
          <li style={{ listStyleType: 'none', 'cursor': 'pointer', 'marginBottom': '5px'}} onClick={this.handleClick} value="1" className="list">Paris<br /></li>
          <li style={{ listStyleType: 'none', 'cursor': 'pointer', 'marginBottom': '5px'}} onClick={this.handleClick} value="2" className="list">Tokyo<br /></li>
          <li style={{ listStyleType: 'none', 'cursor': 'pointer', 'marginBottom': '5px' }} onClick={this.handleClick} value="3" className="list">Clear All<br /></li>
        </ul>
        </div>
      </div>
    );
  }
}
export default Navigation;