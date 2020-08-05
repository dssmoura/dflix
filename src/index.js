import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo (){
  return(
    <div>
      Página de cadastro de videos
    </div>
  )
}

const Pagina404 = () =>(<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} exact />
      <Route component={Pagina404} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);