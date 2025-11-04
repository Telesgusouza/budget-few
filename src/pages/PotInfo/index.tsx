import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Styled from './style';

import TinyLine from '../../components/TinyLine';
import Button from '../../components/Button';
import ModalOperation from '../../components/modals/ModalOperation';
import InputAccordion from '../../components/InputAccordion';

import axios from 'axios';
import baseurl from '../../../baseurl';
import { IGuestUser, IOptionsInputAccordion, IPot, ITinyLine, IUpdate } from '../../config/interfaces';
import { formatDate, formatNumber } from '../../config/utils';

import period from '../../config/period';

export default function PotInfo() {

    const [errorInRequest, setErrorInRequest] = useState<boolean>(false);

    const [current, setCurrent] = useState<IPot | undefined>(undefined);
    const [lastDate, setLastDate] = useState<string | undefined>("");

    const [updateList, setUpdateList] = useState<ITinyLine[]>([]);

    const [listOfPeriods] = useState<IOptionsInputAccordion[]>(period);
    const [currentPeriod, setCurrentPeriod] = useState<IOptionsInputAccordion>(period[0]);

    const [showModalPot, setShowModalPot] = useState<boolean>(true);

    const navigate = useNavigate();

    const ModalPot = lazy(() => import('../../components/modals/ModalPot'));

    const { idPot } = useParams();

    useEffect(() => {

        async function getInfopot() {

            const jsonToken = localStorage.getItem("token");
            const guestUserJson = localStorage.getItem("guest user");

            setErrorInRequest(false);

            if (jsonToken && !guestUserJson) {


                const token = JSON.parse(jsonToken);
                try {
                    const request = await axios.get(`${baseurl}/pot/${idPot}`, {
                        headers: {
                            'Authorization': `Bearer ${token.token}`,
                            'Content-Type': 'application/json'
                        },
                    })

                    const field = request.data;

                    setLastDate(formatDate(field.lastUpdate));

                    setCurrent({
                        id: idPot + "",
                        title: field.title,
                        description: field.description,
                        monthlyAmount: field.monthlyAmount,
                        color: field.color
                    });

                } catch (error) {
                    setErrorInRequest(true);

                    if (axios.isAxiosError(error)) {

                        if (error.response?.status === 403) {
                            toast.warn("reconecte-se em sua conta");

                            setTimeout(() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("user");
                                navigate("/");
                            }, 700);
                        }

                        switch (error.response?.data.message) {
                            case "info pot not found": {

                                userErrorResponse("Não foi possivel encontrar informações do pote");
                                break;
                            }

                            case "id cannot be null": {

                                userErrorResponse("ID não pode ser nulo");
                                break;
                            }

                            case "pot not found": {

                                userErrorResponse("Não foi possivel encontrar o pote");
                                break;
                            }

                            default: {

                                userErrorResponse("Erro ao fazer requisição, tente novamente mais tarde");
                            }
                        }
                    } else {
                        userErrorResponse("Erro desconhecido tentei novamente mais tarde");
                    }
                }
            } else if (!jsonToken && guestUserJson) {
                const guestUser: IGuestUser = JSON.parse(guestUserJson);
                const index = guestUser.pots.findIndex(item => item.pot.id === idPot);

                const updates = guestUser.pots[index].updates;
                chartDataFormat(updates);

                setCurrent(guestUser.pots[index].pot);
                setLastDate(guestUser.pots[index].lastUpdate);

            }

        }

        getInfopot();
        // getListUpdate();
    }, []);

    function userErrorResponse(msg: string) {
        toast.warn(msg);

        setTimeout(() => {
            backPage();
        }, 700);
    }

    async function getListUpdate() {

        const tokenJson = localStorage.getItem("token");

        if (tokenJson && currentPeriod.option) {

            try {
                setErrorInRequest(false);
                const token = JSON.parse(tokenJson);

                const request = await axios.get(`${baseurl}/pot/${idPot}/updates?period=${currentPeriod.option}`, {
                    headers: {
                        'Authorization': `Bearer ${token.token}`,
                        'Content-Type': "application/json"
                    }
                });

                const listFields = request.data;
                chartDataFormat(listFields);

            } catch (error) {
                setErrorInRequest(true);

                if (axios.isAxiosError(error)) {

                    if (error.response?.status === 403) {
                        toast.warn("reconecte-se em sua conta");

                        setTimeout(() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            navigate("/");
                        }, 700);
                    }

                    if (error.response?.data.message == "id cannot be null") {
                        userErrorResponse("id invalido");
                    }
                }

            }
        } else {
            // não existe o token de acesso
            toast.warn("Não a um token de acesso, reconecte-se na sua conta");

            setTimeout(() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/");
            }, 700);
        }
    }

    function arrangeListForGraph(current: IOptionsInputAccordion) {
        setCurrentPeriod(current);
        getListUpdate();
    }

    function chartDataFormat(updates: IUpdate[]) {
        const list: ITinyLine[] = [];

        for (let i = 1; i <= updates.length; i++) {

            list.push({
                name: updates[i - 1].date,
                R$: updates[i - 1].value,
            });
        }

        setUpdateList(list);
    }

    function backPage() {
        navigate("/pots");
    }

    return (
        <Styled.Container >

            {!errorInRequest ? (
                <>

                    <Suspense fallback={<div>Carregando...</div>}>
                        <ModalPot modal='edit' onShow={setShowModalPot} close={showModalPot} />
                    </Suspense>

                    <ModalOperation />

                    <Styled.BackPage onClick={backPage} >

                        <span className='text_present_3' >
                            Voltar
                        </span>

                    </Styled.BackPage>

                    <Styled.Content className='card' >

                        <div>

                            {
                                current !== undefined ? (
                                    <>
                                        <h1 className='text_present_1 see_text' >{current.title}</h1>
                                        <span className='text_present_5_bold' >Ultima atualização {lastDate !== undefined && lastDate}</span>
                                    </>
                                ) : (
                                    <>
                                        <div className='loading'
                                            style={{
                                                width: "180px",
                                                height: "38px",
                                            }} />
                                    </>
                                )
                            }

                        </div>

                        <div className="input_accordion" >
                            <InputAccordion
                                current={currentPeriod}
                                list={listOfPeriods}
                                updateCurrent={(newPeriod) => arrangeListForGraph(newPeriod)}
                            />
                        </div>

                        {current !== undefined ? (
                            <>
                                <Styled.ContainerGraphic>

                                    <TinyLine
                                        data={updateList}
                                    />

                                </Styled.ContainerGraphic>

                                <p className='text_present_4_bold' >
                                    {current && current.description}
                                </p>

                                <strong className='text_present_2' >
                                    R$ {current && formatNumber(current.monthlyAmount)}
                                </strong>
                            </>
                        ) : (
                            <>
                                <div
                                    className='loading'
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        marginTop: "20px"
                                    }}
                                />
                            </>
                        )}

                        <div className='container_btns' >
                            <Button className="edit-btn" >Edite</Button>

                            <Button detroy={true} className="del-btn" >Deletar</Button>

                            <Button className="add-btn" >Adicionar dinheiro + </Button>
                        </div>

                    </Styled.Content>
                </>) : (
                <>
                    <Styled.ContentError className='card' >
                        <h1 className='text_present_1' >Erro na requisição</h1>
                        <p className='text_present_4_bold' >Ouve um erro durante a requisição, reinicie a página ou volte a página anterior</p>
                    </Styled.ContentError>
                </>
            )}
        </Styled.Container>
    )
}