import { Container, Form } from "./styles"
import { Input } from "../../Components/input"
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"
import { Background } from "./styles"
import { Link } from "react-router-dom"


export function SignIn(){
    return(
        <Container>
          <Form>
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Faça seu login</h2>
            <Input icon={FiMail} placeholder="E-mail" type="text"/>
            <Input icon={FiLock} placeholder="Senha" type="password"/>
            <Button title="Entrar"/>
            <Link to="/register"><ButtonText title="Criar conta"/></Link>
           </Form>
           <Background/>
        </Container>
    )
}