import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
//import Spinner from '../shared/ejemplo_spinner';
const Login = lazy(() => import('../pages/loginPage'));

/*              Route sintax
 */


export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={''}>
        <BrowserRouter>
          <Login>
            <Switch>
            <Route exact path="/comandas-todas" component={''} />              
            </Switch>
          </Login>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
