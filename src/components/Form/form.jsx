import React from "react";
import Inputform from "../Input/Inputform";
import BtnCadastro from "../BtnCadastro/BtnCadastro";
import './style.css';

class Formulario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nome : '',
            email : '',
            senha : ''
        }
       
    }

    validaNome(nome) {

        /* CRIAR CONDIÇÃO PARA VERIFICAR SE HÁ SOMENTE LETRAS! */
        this.setState({
            nome: this.props.nome = nome
        })
    }

    validaEmail(email) {
        /* CRIAR CONDIÇÃO PARA VERIFICAR SE TEM @ E .COM ! */
        this.setState({

        })
    }

    validaSenha(senha) {
        this.setState({

        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <label>Nome:
                        <Inputform/>
                    </label>
                </div>
                <div>
                    <label>Email: 
                        <Inputform />
                    </label>
                </div>
                <div>
                    <label>Senha:
                        <Inputform />
                    </label>
                </div>
                <div>
                    <BtnCadastro />
                </div>
            </div>
        )
    }
}

export default Formulario;