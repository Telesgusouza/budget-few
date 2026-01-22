import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Styled from './style';
import baseurl from '../../../baseurl';

import Input from '../../components/Inputs/Input';
import Button from '../../components/Button';

import logoimage from '../../assets/imgs/Logo.svg';

import LoadingInRotation from '../../components/LoadingInRotation';
import { guestUserAddPot } from '../../config/utilsGuestUser';
import colors from '../../config/colors';
import { IGuestUser } from '../../config/interfaces';

export default function SignupAndSingout() {

    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [wrongPassword, setWrongPassword] = useState<boolean>(false);
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);
    const [wrongName, setWrongName] = useState<boolean>(false);

    const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(true);
    const [toggleUserOperation, setToggleUserOperation] = useState<boolean>(false);

    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (wrongEmail) {
            setWrongEmail(false);
        }
    }, [email]);

    useEffect(() => {
        if (wrongPassword) {
            setWrongPassword(false);
        }
    }, [password]);

    useEffect(() => {
        if (wrongName) {
            setWrongName(false);
        }
    }, [name]);

    async function handleSubmit(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const defaultEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const ifName: boolean = toggleUserOperation && name.length < 3;
        const ifEmail: boolean = !defaultEmail.test(email);
        const ifPassword: boolean = password.length <= 7;

        if (ifName) {
            setWrongName(true);
        }

        if (ifEmail) {
            setWrongEmail(true)
        }

        if (ifPassword) {
            setWrongPassword(true);
        }

        else if (toggleUserOperation && !ifName && !ifEmail && !ifPassword) {
            handleRegister();
        } else if (!toggleUserOperation && !ifEmail && !ifPassword) {
            handleLogin();
        }
    }

    async function handleLogin() {
        setBtnDisabled(true);

        try {

            const token = await axios.post(`${baseurl}/auth/login`, {
                login: email,
                password: password
            });

            navigateToHome(token.data.token)

        } catch (error) {

            if (axios.isAxiosError(error)) {

                console.error("Login error: ", error.response?.data.message);

                switch (error.response?.data.message) {
                    case "Authentication Failed. id Incorrect password": {
                        setWrongPassword(true);
                        toast.warn("Senha incorreta, tente novamente");
                        break;
                    }

                    case "Authentication Failed. id Account does not exist": {
                        setWrongEmail(true);
                        toast.warn("Conta não existe");
                        break;
                    }

                    case "Authentication Failed. id Account deactivated or blocked": {
                        setWrongEmail(true);
                        setWrongPassword(true);
                        toast.error("Conta desativada ou bloqueada");
                        break;
                    }

                    case "Authentication Failed. id Error while generating token.": {
                        toast.error("Erro ao gerar token, tente novamente mais tarde");
                        break;
                    }

                    case "Authentication Failed. id Error authenticating account": {
                        toast.warn("Erro ao fazer autenticação");
                        setWrongEmail(true);
                        break;
                    }

                    default: {
                        toast.warn("Surgiu um erro desconhecido no autenticação, tente novamente mais tarde");
                        setWrongEmail(true);
                        setWrongPassword(true);
                    }
                }

            } else {
                toast.warn("Surgiu um erro desconhecido, tente novamente mais tarde");
                setWrongEmail(true);
                setWrongPassword(true);
                console.error("Error login: ", error);
            }

        }

        setBtnDisabled(false);
    }

    async function handleRegister() {
        setBtnDisabled(true);

        try {

            const token = await axios.post(`${baseurl}/auth/register`, {
                name: name,
                login: email,
                password: password + ""
            });

            navigateToHome(token.data.token)
        } catch (error) {

            if (axios.isAxiosError(error)) {

                switch (error.response?.data.message) {
                    case "Exception Of Existing Email. id User already exists": {
                        setWrongEmail(true);
                        toast.warn("Conta já existe");
                        break;
                    }

                    case "Error Creating Token. id Error while generating token.": {
                        toast.error("Erro ao criar conta, tente novamente mais tarde");
                        break;
                    }

                    case "Invalid Field. id invalid email": {
                        toast.error("Email invalido, tente novamente");
                        setWrongEmail(true);
                        break;
                    }

                    case "Invalid Field. id invalid password": {
                        toast.error("Senha invalida, tente novamente");
                        setWrongPassword(true);
                        break;
                    }

                    default: {
                        toast.error("Erro desconhecido na criação de usuario, tente novamente mais tarde");
                        console.error("Error register: ", error.response?.data.message);
                    }
                }

            } else {
                toast.error("Erro desconhecido, tente novamente mais tarde");
                console.error('Error register: ', error);
            }

        }
        setBtnDisabled(false);
    }

    function toggleShowLoginOperations() {
        setEmail("");
        setPassword("");
        setName("");

        setWrongEmail(false);
        setWrongPassword(false);
        setWrongName(false);

        setToggleShowPassword(true);
        setToggleUserOperation(show => !show);
    }

    function navigateToHome(token: string) {

        localStorage.setItem("token", JSON.stringify({ token: token }));
        localStorage.removeItem("guest user");
        localStorage.removeItem("user");

        toast.success(`${toggleUserOperation ? "Registrado" : "Logado"} com sucesso`);

        setTimeout(() => {
            navigate("/home", { replace: true });
        }, 500);

    }

    // no user
    function guestUser() {

        const guestUser: IGuestUser = {
            user: {
                id: "id_guest_user",
                login: "visitante@gmail.com",
                name: "Visitante",
            },
            pots: [],
        };

        guestUserAddPot({
            id: (Math.random()).toString().split(".")[1],
            
            title: "Casa própria",
            description: "Dinheiro com destino a casa própria",
            
            earnedValue: 0,
            goal: 350000,

            color: colors[0].color,
        }, guestUser);

        localStorage.setItem("guest user", JSON.stringify(guestUser));

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setTimeout(() => {
            navigate("/home", { replace: true });
        }, 700);
    }

    return (
        <Styled.Container>

            <Styled.HeaderMobile>
                <img src={logoimage} alt="logo da empresa" />
            </Styled.HeaderMobile>

            <Styled.Sidebar >

                <img src={logoimage} alt="logo da empresa" />

                <article>
                    <h2 className='text_present_1' >Controle seu dinheiro
                        e economize para o seu futuro</h2>

                    <p className='text_present_4' >
                        O aplicativo de finanças pessoais permite que você controle seus gastos. Acompanhe transações, defina orçamentos e adicione dinheiro às suas poupanças facilmente.
                    </p>

                </article>

            </Styled.Sidebar>

            <Styled.Form onSubmit={handleSubmit} >
                <form>
                    <h1 className='text_present_1' >{toggleUserOperation ? "Cadastre-se" : "Login"}</h1>

                    <div>
                        {toggleUserOperation && (
                            <>
                                <Input
                                    type='text'
                                    label='Nome'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    wrong={wrongName}
                                />
                            </>
                        )}
                        <Input
                            type='text'
                            label='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            wrong={wrongEmail}
                        />

                        <Input
                            type={toggleShowPassword ? "password" : "text"}
                            label={toggleUserOperation ? 'Criar Senha' : 'Senha'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onToggleShowPassword={(show) => setToggleShowPassword(show)}
                            wrong={wrongPassword}
                        />
                    </div>

                    <Button type='submit' disabled={btnDisabled} >
                        {btnDisabled ? (
                            <>
                                <LoadingInRotation />
                            </>
                        ) : (
                            <>
                                {toggleUserOperation ? "Criar Conta" : "Login"}
                            </>
                        )}

                    </Button>

                    <Styled.ChangeLoginToRegister >
                        <p className='text_present_4'>
                            {toggleUserOperation ? "Já tem uma conta?" : "Precisa criar uma conta?"}

                            <strong className='text_present_4_bold' onClick={() => toggleShowLoginOperations()} > {toggleUserOperation ? "Entrar" : "Cadastre-se"}</strong></p>

                        <p
                            className='text_present_4'
                        > <strong onClick={() => guestUser()} >  Entrar como visitante</strong> </p>

                    </Styled.ChangeLoginToRegister>


                </form>



            </Styled.Form>


        </Styled.Container>
    )
}
