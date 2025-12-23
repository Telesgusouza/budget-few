import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import Input from '../../Inputs/Input';
import * as Styled from './style';
import { formatNumber, validationInput } from '../../../config/utils';
import { toast } from 'react-toastify';
import axios from 'axios';
import baseurl from '../../../../baseurl';
import { IPot } from '../../../config/interfaces';
import { useNavigate } from 'react-router-dom';

interface IProps {
    id: string;

    onShow: (boolean: boolean) => void;
    close: boolean;
    operation: "add" | "withdraw";
}

export default function WithdrawOrAdd({ id, close, onShow, operation }: IProps) {

    const [wrongAmount, setWrongAmount] = useState<boolean>(false);

    const [dataPot, setDataPot] = useState<null | undefined | IPot>(undefined);

    const [valueBar, setValueBar] = useState<number>(0);
    const [porcentTarget, setPorcentTarget] = useState<number>(0);
    const [totalPercentage, setTotalPercentage] = useState<number>(0);

    const [amount, setAmount] = useState<string>('0,00');

    const navigate = useNavigate();

    useEffect(() => {

        async function getData() {

            const tokenJson = localStorage.getItem('token');

            if (!tokenJson) {
                toast.warn("Conta deslogagada");
                return;
            }

            try {

                setDataPot(undefined);

                const token = JSON.parse(tokenJson);

                const data = await axios.get(`${baseurl}/pot/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token.token}`
                    }
                });

                const field = data.data;

                setDataPot({
                    id: id,

                    title: field.title,
                    description: field.description,
                    color: field.color,

                    earnedValue: field.earnedValue,
                    goal: field.goal,
                });

            } catch (error) {
                setDataPot(null);

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
                            userErrorResponse("Não foi possivel encontrar informações sobre o pote");
                            break;
                        }

                        case "id cannot be null": {
                            userErrorResponse("Erro com o ID do pote");
                            break;
                        }

                        case "pot not found": {
                            userErrorResponse("pote não encontrado");
                            break;
                        }

                        default: {
                            userErrorResponse("Erro ao fazer requisição, tente novamente mais tarde");
                        }
                    }
                } else {
                    userErrorResponse("Erro desconhecido, por favor tente novamente mais tarde");
                }
            }
        }

        getData();

    }, []);

    useEffect(() => {
        if (dataPot) {
            setPorcentTarget(Math.floor(100 * Number(dataPot.earnedValue) / dataPot.goal));
            setTotalPercentage(porcentTarget);
        }

    }, [dataPot]);

    useEffect(() => {

        TotalPercentage();

        // wrong
        if (wrongAmount) {
            setWrongAmount(false);
        }
    }, [amount]);

    async function submit(e: React.FormEvent) {
        e.preventDefault()

        if (amount === "0,00") {
            toast.warn(`Campo de ${operation === "add" ? "adicionar" : "sacar"} valor não pode estar vázio`);
            setWrongAmount(true);
            return;
        }

        const jsonToken = localStorage.getItem("token");

        if (!jsonToken) {
            //Precisamos voltar aqui (visitante/offline)
            navigate("/");
            return;
        }

        try {

            const token = JSON.parse(jsonToken);
            const value = Number(amount.replace(",", "."));

            const amountToBeSent = (operation === "add")
                ? value + Number(dataPot?.earnedValue)
                : value - Number(dataPot?.earnedValue);

            await axios.patch(`${baseurl}/pot/${id}`, {
                newValue: amountToBeSent
            }, {
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
            });

            toast.success("Atualizado com sucesso", { autoClose: 700 });
            setTimeout(() => {
                onShow(false)
            }, 700);

        } catch (error) {
            if(axios.isAxiosError(error)) {

                if (error.response?.status === 403) {
                    userErrorResponse("Reconecte-se em sua conta");

                    setTimeout(() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/");
                    }, 700);
                }
                else if (error.response?.data.message === "The new value cannot be the same as the previous one.") {
                    userErrorResponse("Novo valor não pode ser igual a anterior");
                    setWrongAmount(true);
                }
                 
            } else {
                
                userErrorResponse("USrgiu um erro inesperado, por favor tente novamente mais tarde");
            }
            console.error("Surgiu um erro inesperado > ", error);
        }

    }

    function TotalPercentage() {

        if (!dataPot) {
            return;
        }

        const breakValue = amount.split(',');

        if (breakValue[0] == '') {
            breakValue[0] = '0';
        }

        const value = Number(breakValue.join('.'));

        if (operation == "add") {
            setTotalPercentage(100 * (Number(dataPot.earnedValue) + Number(value)) / dataPot.goal);
        } else {
            setTotalPercentage(100 * (Number(dataPot.earnedValue) - Number(value)) / dataPot.goal);
        }
    }

    function dealingWithValueInputs(e: React.ChangeEvent<HTMLInputElement>) {

        const value = e.target.value;

        const breakValue = value.split(",")

        if (breakValue[0] === "") {
            breakValue[0] = "0";
        }

        const arrangeValue = Number(breakValue.join('.'));

        if (
            arrangeValue
            < 0 || !dataPot) {
            return;
        }

        TotalPercentage();

        if (operation === "withdraw") {
            if (
                arrangeValue
                > Number(dataPot.earnedValue)) {
                toast.warn("Não tem como tirar um valor maior do que foi colocado");
                return;
            }

            const percentageToTarget = 100 * (Number(dataPot.earnedValue) -
                arrangeValue
            ) / dataPot.goal;

            setPorcentTarget(percentageToTarget);

        } else if (operation === "add") {
            const percentageToTarget = 100 * Number(dataPot.earnedValue) / dataPot.goal;

            setPorcentTarget(percentageToTarget);
        }

        const porcentBar = 100 * arrangeValue / dataPot.goal;
        setValueBar(porcentBar);

        if (validationInput(value)) {
            setAmount(value);
        }
    }

    function takeTheFocus() {

        setAmount("")


        const separateValues = amount.split(",");



        if (amount.split(",").length < 2) {
            separateValues.push("00");
        }

        if (separateValues[0] === "") {
            separateValues[0] = "0";
        } else {
            separateValues[0] = parseInt(separateValues[0]) + "";
        }

        switch (separateValues[1].length) {

            case 1: {
                separateValues[1] = separateValues[1] + "0";
                break
            }

            case 0: {
                separateValues[1] = separateValues[1] + "00";
                break
            }
        }

        setAmount(separateValues.join());
    }

    function cleanInput() {

        if (amount === "0,00") {
            setAmount("");
        }
    }


    function userErrorResponse(msg: string) {
        toast.warn(msg);

        setTimeout(() => {
            onShow(false);
        }, 700);
    }

    return (
        <Styled.Container
            className='background_modal'
            view={close ? 'view' : 'hidden'}
        >

            <Styled.Content
                className='card'
                onSubmit={submit}>


                <div className='header_modal' >

                    {
                        dataPot === undefined ? <h3 className='loading' ></h3>
                            : dataPot === null ? <h3
                                className='text_present_1 ' >
                                Erro ao trazer dados
                            </h3>
                                : <h3
                                    className='text_present_1 ' >
                                    {operation === "add" ? "Adicionar " : "Retirar "}
                                    dinheiro da '{dataPot ? dataPot.title : "Carregando"}'
                                </h3>}

                    <span
                        className='text_present_5_bold'
                        onClick={() => onShow(false)}
                    >X</span>
                </div>

                {
                    dataPot === undefined ?
                        <p className='loading' >
                        </p>

                        : dataPot === null ? <></>

                            :
                            <p className='text_present_4' >

                                {dataPot.description}
                            </p>
                }

                <Styled.ChartAndBar >

                    <div className='between' >
                        <span className='text_present_4' >Total salvo</span>
                        <strong className='text_present_1 see_text' >
                            R${dataPot === undefined ? "Carregando" : dataPot === null ? "" : formatNumber(dataPot.earnedValue)}
                        </strong>
                    </div>

                    <Styled.Bar
                        operation={operation}

                        bar={porcentTarget}
                        barOperation={valueBar}
                    />

                    <div className='between' >
                        <span
                            className={'text_present_5_bold ' + `${amount <= "0,00" ? "black" : operation === 'add' ? "green" : "red"}`}
                        >{(totalPercentage).toFixed(2)}%</span>
                        <span className='text_present_5' >
                            Meta de R${dataPot ? formatNumber(dataPot.goal) : "Carregando"}
                        </span>
                    </div>

                </Styled.ChartAndBar>

                <Input
                    label='Valor a sacar'

                    onChange={e => dealingWithValueInputs(e)}
                    onBlur={() => takeTheFocus()}
                    onFocus={() => cleanInput()}


                    value={amount}
                    wrong={wrongAmount}

                    type='target' />

                <Button type='submit' disabled={dataPot === undefined || dataPot === null} >
                    Confirme
                    {operation === "add" ? " Adicionar " : " Retirar "}
                </Button>

            </Styled.Content>

        </Styled.Container>
    )
}