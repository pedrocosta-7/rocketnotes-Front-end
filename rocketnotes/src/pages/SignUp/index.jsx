import { Container, Form } from "./styles"
import { Input } from "../../Components/input"
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"
import { Background } from "./styles"
import { Link } from "react-router-dom"


export function SignUp(){
    return(
        <Container>
        <Background/>
          <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Crie sua conta</h2>
            <Input icon={FiUser} placeholder="Nome" type="text"/>
            <Input icon={FiMail} placeholder="E-mail" type="text"/>
            <Input icon={FiLock} placeholder="Senha" type="password"/>
            <Button title="Entrar"/>
            <Link to="/"><ButtonText title="Voltar para o login"/></Link>
           </Form>
        </Container>
    )
}