import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render( //O switch leva em conta a ordem, se ele achou ja a rota de cima pra baixo, ele nao vai mais procurar. 

  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={() =>
        <div>
          Page 404!
        </div>
      } />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

