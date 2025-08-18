import * as Styled from './style';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import baseurl from '../../../../baseurl';
import { ITheme } from '../../../config/interfaces';
import colors from '../../../config/colors';

import Input from '../../Input';
import InputAccordion from '../../InputAccordion';
import Button from '../../Button';

interface IProps {
    onShow: (show: boolean) => void;
    close: boolean;
}

export default function ModalPot({ onShow, close }: IProps) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [potNameWrong, setPotNameWrong] = useState<boolean>(false);
    const [targetWrong, setTargetWrong] = useState<boolean>(false);
    const [descriptionWrong, setDescriptionWrong] = useState<boolean>(false);

    const [potName, setPotName] = useState<string>("");
    const [potDescription, setPotDescription] = useState<string>("");
    const [targetValue, setTargetValue] = useState<string>('0,00');

    const [themeCurrent, setThemeCurrent] = useState<ITheme>(colors[0]);
    const [listTheme] = useState<ITheme[]>(colors);

    useEffect(() => {
        if (potNameWrong) {
            setPotNameWrong(false);
        }
    }, [potName]);

    useEffect(() => {
        if (targetWrong) {
            setTargetWrong(false);
        }
    }, [targetValue]);

    useEffect(() => {
        if (descriptionWrong) {
            setDescriptionWrong(false);
        }
    }, [potDescription]);


    function validationInput(value: string) {

        if (!value) return true;

        const regex = /^\d*?(,\d{0,2})?$/;
        return regex.test(value);
    }

    function handleInputTarget(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        if (validationInput(value)) {
            setTargetValue(value);
        }
    }

    function takeTheFocus() {

        setTargetValue("")

        const separateValues = targetValue.split(",");

        if (targetValue.split(",").length < 2) {
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

        setTargetValue(separateValues.join())
    }

    function cleanInput() {

        if (targetValue === "0,00") {
            setTargetValue("");
        }
    }

    function showModal() {
        onShow(false);
    }

    async function submitForm(e: React.FormEvent) {
        e.preventDefault();

        const replaceValueTarget = parseFloat(targetValue.replace(",", "."));

        if (potName.length < 3 || potName.length > 30) {

            toast.warn(`O nome precisa ter 
                ${potName.length < 3 ? "mais" : "menos"} 
                de 
                ${potName.length < 3 ? "3" : "30"}
                caracteres`);
            setPotNameWrong(true);
        } if (potDescription.length < 3) {
            toast.warn("descrição muito curta");
            setDescriptionWrong(true);
        } if (replaceValueTarget <= 0) {

            toast.warn("Valor muito baixo");
            setTargetWrong(true);
        }

        else {

            const tokenJson = localStorage.getItem("token");

            if (tokenJson) {

                try {
                    const token = JSON.parse(tokenJson);

                    const monthlyAmount = parseFloat(targetValue.replace(",", ".")); 

                    await axios.put(`${baseurl}/pot/${id}`, {
                        title: potName,
                        description: potDescription,
                        monthlyAmount: monthlyAmount,
                        color: themeCurrent.color
                    }, {
                        headers: {
                            'Authorization': `Bearer ${token.token}`,
                            'Content-Type': 'application/json'
                        },
                    });

                    toast.success("Editado com sucesso");
                    setTimeout(() => {
                        showModal();
                    }, 700);

                } catch (error) {
                    if (axios.isAxiosError(error)) {

                        if (error.response?.status === 403) {
                            // Trata erro específico de permissão
                            toast.error('Acesso não autorizado. Por favor, verifique suas credenciais.');
                            return;
                        }

                        if(error.response?.data.message == "pot not found") {
                            toast.error("Não foi possivel achar o pote");
                            toast.warn("Você será devolvido a página de Lita de potes");

                            setTimeout(() => {
                                navigate("/pots");
                            }, 700);
                            return;
                        }

                        // Trata outros erros de resposta
                        toast.error(`Erro na requisição: ${error.response?.data}`);
                    } else {

                        toast.error('Erro ao processar a requisição');
                    }
                }
            }
        }
    }

    return (
        <Styled.Container show={close ? "view" : "hidden"} >
            <article className='card' >
                <Styled.HeaderModal>
                    <strong className='text_present_1' >Edite o Pote</strong>
                    <div className='text_present_5_bold' onClick={showModal} >X</div>
                </Styled.HeaderModal>

                <p className='text_present_4' >
                    Se suas metas de economia mudarem, sinta-se à vontade para atualizar seus potes.
                </p>

                <form onSubmit={submitForm} >

                    <Input
                        label='Nome do Pote'
                        onChange={(e) => setPotName(e.target.value)}
                        value={potName}
                        wrong={potNameWrong}
                    />

                    <Input
                        label='Descrição'

                        onChange={(e) => setPotDescription(e.target.value)}

                        value={potDescription}
                        wrong={descriptionWrong}
                    />

                    <Input
                        label='Objetivo'

                        onChange={(e) => handleInputTarget(e)}
                        onBlur={takeTheFocus}
                        onFocus={cleanInput}

                        value={targetValue}
                        wrong={targetWrong}
                        typeInput='target'
                    />

                    <InputAccordion
                        label='Tema'
                        list={listTheme}
                        current={themeCurrent}
                        updateCurrent={(color) => setThemeCurrent(color)}
                    />

                    <Button type='submit' >Salvar Mudanças</Button>
                </form>
            </article>
        </Styled.Container>
    );
}

