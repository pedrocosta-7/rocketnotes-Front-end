import { Avatar, Container } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from "../../Components/input";
import { Button } from "../../Components/Button";
import { Form } from "./styles";
import { Link } from "react-router-dom";

export function Profile(){
     return(
        <Container>
        <header>
        <Link to="/"><FiArrowLeft/></Link>
        </header>
        <Avatar>
        <img src="https://github.com/pedrocosta-7.png" alt="Foto do usuario"/>
        <label htmlFor="avatar">
            <FiCamera/>
                <input
                  id="avatar"
                  type="file"
                />
        </label>
        </Avatar>
        <Form>
        <Input icon={FiUser}  type="text" defaultValue="Pedro Costa"/>
        <Input icon={FiMail} type="text" defaultValue="pedro@gmail.com"/>
        <Input icon={FiLock} type="password" placeholder="Senha Atual"/>
        <Input icon={FiLock} type="password" placeholder="Nova senha"/>
        <Button title="Salvar"/>
        </Form>



        </Container>
     )
}