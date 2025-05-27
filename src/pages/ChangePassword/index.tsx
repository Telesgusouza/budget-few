import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../components/Input';
import * as Styled from './styled';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../../baseurl';
import { toast } from 'react-toastify';
import LoadingInRotation from '../../components/LoadingInRotation';

export default function ChangePassword() {

    const [email, setEmail] = useState<string>("");
    const [token, setToken] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [wrongPassword, setWrongPassword] = useState<boolean>(false);
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);
    const [wrongToken, setWrongToken] = useState(false);

    const [showToken, setShowToken] = useState<boolean>(true);
    const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false);

    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (wrongEmail) {
            setWrongEmail(false);
        }
    }, [email]);

    useEffect(() => {
        if (wrongToken) {
            setWrongToken(false);
        }
    }, [token])

    useEffect(() => {
        if (wrongPassword) {
            setWrongPassword(false);
        }
    }, [password]);

    async function submit(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        if (showToken) {
            await validationToken();
        } else {
            await submitHTML();
        }

    }

    async function validationToken() {

        if (password.length <= 7) {
            setWrongPassword(true);
        }

        if (token.replace(/\s+/g, "").length !== 6) {
            setWrongToken(true);
            toast.warn(`token muito ${token.replace(/\s+/g, "").length < 6 ? "curto" : "longo"}, o token tem apenas 6 digitos`);
            return;
        } else {

            try {

                await axios.patch(`${baseurl}/auth/password`, {
                    ticket: token,
                    password: password
                });

                toast.success("Senha mudada com sucesso, você será redirecionado para a página principal");
                navigate("/", {
                    replace: true
                })

            } catch (error) {
                toast.error("Error ao criar senha")
                console.error("error " + error);
            }

        }
    }

    async function submitHTML() {

        setBtnDisabled(true);
        const defaultEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!defaultEmail.test(email)) {
            setWrongEmail(!wrongEmail);
            setBtnDisabled(true);
            return;
        } else {
            try {
                await axios.post(`${baseurl}/auth/html`, {
                    to: email
                });

                toast.warn("Verifique seu email");

                setShowToken(true);

            } catch (error) {
                toast.error("Error ao enviar email")
                console.error("error " + error);
            }
        }
        setBtnDisabled(false);
    }

    function navigateSingIn() {
        if (showToken) {
            setShowToken(false);
            setToken("");
            setPassword("");
        } else {
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 200);
        }
    }

    return (
        <Styled.Container onSubmit={submit} >

            <Styled.Navigate className='text_present_4' >
                <p onClick={() => navigateSingIn()} > Voltar </p>
            </Styled.Navigate>

            <form>

                {
                    showToken ? (
                        <>
                            <h1 className='text_present_1' >Token</h1>
                            <p className='text_present_4' >Foi enviado um token para seu email, copie e cole o token abaixo</p>
                            <div>


                                <Input
                                    label='Token'
                                    onChange={(e) => setToken(e.target.value)}
                                    value={token}

                                    wrong={wrongToken}
                                />

                                <Input
                                    type={toggleShowPassword ? "password" : "text"}
                                    label={'Criar nova senha'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    onToggleShowPassword={(show) => setToggleShowPassword(show)}
                                    wrong={wrongPassword}
                                />

                                <Button type='submit' disabled={btnDisabled} >

                                    {btnDisabled ? (
                                        <>
                                            <LoadingInRotation />
                                        </>
                                    ) : (
                                        <>
                                            Enviar
                                        </>
                                    )}

                                </Button>

                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className='text_present_1' >Mude sua senha</h1>
                            <p className='text_present_4' >Sera enviado um email, para que possa
                                trocar de senha, digite abaixo o email, e fiquei de olho na caixa
                                de spam.</p>

                            <div>

                                <Input
                                    label='Digite seu email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}

                                    wrong={wrongEmail}
                                />

                                <Button type='submit' disabled={btnDisabled} >

                                    {btnDisabled ? (
                                        <>
                                            <LoadingInRotation />
                                        </>
                                    ) : (
                                        <>
                                            Enviar
                                        </>
                                    )}

                                </Button>

                            </div>
                        </>
                    )
                }

            </form>
        </Styled.Container>
    )
}
