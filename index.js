import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  render() {
    return <div>
      <h2>Welcome to React</h2>
    </div>
  }
}

ReactDom.render(
  (
    <App />
  ),
  document.getElementById('root')
);
