import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ContainerTitle, FormBody, FormTitle, TitleBold, separador} from './styled-components/FormStyles';
import FormContainer from './components/FormContainer';
import { NavBar } from './components/NavBar';
import { TablesList } from './components/TablesList';
import { AppRouter } from './router/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <>
       <AppRouter />        
      </>
    </Provider>
    
    
  );
};

export default App;