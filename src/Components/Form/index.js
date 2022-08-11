// Style
import './style.css';

export function FormCadastro() {
    return(
        <form className="login">
            <label>Nome</label>
            <br></br>
            <input name="nome" type="text" autocomplete="name" placeholder="Insira seu nome completo...">
            </input>
            <br></br>

            <label>CPF</label>
            <br></br>
            <input name="cpf" type="number" placeholder="Insria seu CPF...">                    
            </input>
            <br></br>

            <label>E-mail</label>
            <br></br>
            <input name="email" type="email" required autocomplete="email" placeholder="fulano@email.com">
            </input>
            <br></br>

            <label>Data</label>
            <br></br>
            <input name="date" type="date" required>
            </input>
            <br></br>

            <label>Senha</label>
            <br></br>
            <input 
                name="senha"
                required
                type="password" 
                minlength="8"
                maxlength="12"
                autocomplete="on"
                placeholder="Insria uma senha..."
            ></input>
            <br></br>
        </form>
    )
}