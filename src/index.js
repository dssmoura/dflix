import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'


import { BrowserRouter, Switch, Route } from 'react-router-dom';



const Pagina404 = () =>(<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/Video" component={CadastroVideo} />
      <Route path="/cadastro/Categoria" component={CadastroCategoria} />
      <Route component={Pagina404} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);