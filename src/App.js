// Projeto: Plataforma de Gerenciamento Financeiro
// MLP Digital House 
// Data: 02/2022

// Bibliotecas
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Rotas publicas
import { PageHome } from './Pages/Page_Home';
import { PageCadastro } from './Pages/Page_Cadastro';
import { PageLogin } from   './Pages/Page_Login';
// Rotas privadas
import { PagePerfil } from './Pages/Page_Perfil';
import { PageMenu } from './Pages/Page_Menu';
import { PageRenda } from   './Pages/Page_Renda';
import { PageDespesa } from   './Pages/Page_Despesa';
import { PageExtrato } from   './Pages/Page_Extrato';

// Main function app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path={"*"} element={ <Navigate replace to={ "/" }/> }/>
          <Route path="/" element={<PageHome />}></Route>
          <Route path="/cadastro" element={<PageCadastro />}></Route>
          <Route path="/login" element={<PageLogin />}></Route>
          <Route path="/menu" element={<PageMenu />}></Route>
          <Route path="/perfil" element={<PagePerfil />}></Route>
          <Route path="/renda" element={<PageRenda />}></Route>
          <Route path="/despesa" element={<PageDespesa />}></Route>
          <Route path="/extrato" element={<PageExtrato />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

