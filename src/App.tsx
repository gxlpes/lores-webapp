import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import GlobalStyles from './styles/global/GlobalStyles';

function App() {

  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
