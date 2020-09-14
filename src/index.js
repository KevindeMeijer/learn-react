import React from 'react';
import ReactDOM from 'react-dom';

//
//

class TeGebruikenComponent extends React.Component{
  render() {
    return(
      <h1>Hello World</h1>
    );
  }
};

ReactDOM.render(
  <TeGebruikenComponent />,
  document.getElementById('root')
);
