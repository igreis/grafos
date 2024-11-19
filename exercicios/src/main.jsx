import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/style/styledGlobal.css';
import BasicTable from './components/table/index';
import CheckboxTable from './components/tableChekbox/index';
import { Lista } from './components/dijkstra/lista';
import { Ia } from './components/ia/ia';
import ClickableScreen from './components/pontos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FloatItems from './components/floatItems';

const Home = () => (
  <>
    <BasicTable />
    <CheckboxTable />
    <Lista />
    <Ia />
    <ClickableScreen />
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial que renderiza todos os componentes */}
        <Route path='/' element={<Home />} />
        {/* Rota específica para o componente FloatItems */}
        <Route path='/float' element={<FloatItems />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
