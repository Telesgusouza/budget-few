import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Styled from './style';
import baseurl from '../../../baseurl';

import Input from '../../components/Input';
import Button from '../../components/Button';

import sideImage from '../../assets/imgs/login_and_signup_illustration.svg';
import logoimage from '../../assets/imgs/Logo.svg';

import LoadingInRotation from '../../components/LoadingInRotation';

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

        // ifs
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
            setBtnDisabled(true);

            try {

                const token = await axios.post(`${baseurl}/auth/register`, {
                    name: name,
                    login: email,
                    password: password + ""
                });

                navigateToHome(token.data.token)
            } catch (error) {
                console.error('Erro de rede: ', error);
            }
            setBtnDisabled(false);
        } else if (!toggleUserOperation && !ifEmail && !ifPassword) {
            setBtnDisabled(true);

            try {

                const token = await axios.post(`${baseurl}/auth/login`, {
                    login: email,
                    password: password
                });

                navigateToHome(token.data.token)

            } catch (error) {
                console.error('Erro ao fazer login de usuario: ', error);
            }

            setBtnDisabled(false);
        }
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

        // true register
        toast.success(`${toggleUserOperation ? "Registrado" : "Logado"} com sucesso`);

        setTimeout(() => {
            navigate("/home", { replace: true });
        }, 500);

    }

    return (
        <Styled.Container>

            <Styled.HeaderMobile>
                <img src={logoimage} alt="logo da empresa" />
            </Styled.HeaderMobile>

            <Styled.Sidebar background={sideImage} >

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

                            <strong className='text_present_4_bold' onClick={() => toggleShowLoginOperations()} > {toggleUserOperation ? "Entrar" : "Cadastre-se"}</strong></p></Styled.ChangeLoginToRegister>

                </form>



            </Styled.Form>


        </Styled.Container>
    )
}
