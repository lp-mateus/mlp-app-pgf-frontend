// Projeto: Plataforma de Gerenciamento Financeiro
// MLP Digital House 
// Data: 02/2022

// Bibliotecas
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { PageHome } from './Pages/Page_Home';

// Main function app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;





