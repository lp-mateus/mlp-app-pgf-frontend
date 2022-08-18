// Projeto: Plataforma de Gerenciamento Financeiro
// MLP Digital House 
// Data: 02/2022

// Bibliotecas
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Paginas
import { PageHome } from './Pages/Page_Home';
import { PageCadastro } from './Pages/Page_Cadastro';
import { PagePerfil } from './Pages/Page_Perfil';
import { PageMenu } from './Pages/Page_Menu';
import { PageLogin } from   './Pages/Page_Login';

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
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

