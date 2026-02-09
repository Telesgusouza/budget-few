import * as Styled from './style';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import baseurl from '../../../../baseurl';
import colors from '../../../config/colors';

import Input from '../../Inputs/Input';
import InputAccordion from '../../Inputs/InputAccordion';
import Button from '../../Button';
import { IGuestUser, IOptionsInputAccordion, RootState } from '../../../config/interfaces';
import { guestUserAddPot, guestUserEditPot } from '../../../config/utilsGuestUser';
import { useSelector } from 'react-redux';

interface IProps {
    modal: "add" | "edit"
    onShow: (show: boolean) => void;
    close: boolean;
}

export default function ModalPot({ onShow, close, modal }: IProps) {

    const { pots } = useSelector((rootReducer: RootState) => rootReducer.user);
    const { idPot } = useParams();
    const navigate = useNavigate();

    const [potNameWrong, setPotNameWrong] = useState<boolean>(false);
    const [targetWrong, setTargetWrong] = useState<boolean>(false);
    const [descriptionWrong, setDescriptionWrong] = useState<boolean>(false);
    const [initialValueWrong, setInitialValueWrong] = useState<boolean>(false);

    const [potName, setPotName] = useState<string>("");
    const [potDescription, setPotDescription] = useState<string>("");
    const [targetValue, setTargetValue] = useState<string>('0,00');
    const [initialValue, setInitialValue] = useState<string>('0,00');

    const [themeCurrent, setThemeCurrent] = useState<IOptionsInputAccordion>(colors[0]);
    const [listTheme] = useState<IOptionsInputAccordion[]>(colors);

    const [buttonRelease, setButtonRelease] = useState<boolean>(false);

    useEffect(() => {

        if (pots.list.length !== 0) {
            const pot = pots.list.find(item => item.id === idPot);
            const goal = String(pot?.goal.toFixed(2).replace(".", ','));
            const earnedValue = String(pot?.earnedValue.toFixed(2).replace(".", ','));

            if (pot) {
                setPotName(pot.title ? pot.title : "");
                setPotDescription(pot.description ? pot.description : "");
                setTargetValue(pot.goal ? goal : "0,00");
                setInitialValue(pot.earnedValue ? earnedValue : "0,00");
            }
        } else {
            const guestJson = localStorage.getItem("guest user");

            if (guestJson) {
                const guest: IGuestUser = JSON.parse(guestJson);
                const pot = guest.pots.find(item => item.pot.id === idPot);
                const goal = String(pot?.pot.goal.toFixed(2).replace(".", ","));
                const earnedValue = String(pot?.pot.earnedValue.toFixed(2).replace(".", ","))

                setPotName(pot ? pot.pot.title : "");
                setPotDescription(pot?.pot.description ? pot.pot.description : "");
                setTargetValue(pot?.pot.goal ? goal : "0,00");
                setInitialValue(pot?.pot.earnedValue ? earnedValue : "0,00");
            }
        }

    }, []);

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

    useEffect(() => {
        if (initialValue) {
            setInitialValueWrong(false);
        }
    }, [initialValue]);


    function validationInput(value: string) {

        if (!value) return true;

        const regex = /^\d*?(,\d{0,2})?$/;
        return regex.test(value);
    }

    function dealingWithValueInputs(e: React.ChangeEvent<HTMLInputElement>, type: "target" | "goal") {
        const value = e.target.value;

        if (validationInput(value)) {

            if (type === "target") {
                setTargetValue(value);
            } else if (type === "goal") {
                setInitialValue(value);
            }

        }
    }

    function takeTheFocus(type: "target" | "goal") {

        if (type === "target") {
            setTargetValue("")
        } else if (type === "goal") {
            setInitialValue("");
        }

        const separateValues = (type === "target"
            ? targetValue
            : initialValue).split(",");



        if (targetValue.split(",").length < 2 || initialValue.split(",").length < 2) {
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

        if (type === "target") {
            setTargetValue(separateValues.join());
        } else if (type === "goal") {
            setInitialValue(separateValues.join());
        }

    }

    function cleanInput(type: "target" | "goal") {

        if (type === "target" && targetValue === "0,00") {
            setTargetValue("");
        }

        if (type === "goal" && initialValue === "0,00") {
            setInitialValue("");
        }
    }

    function showModal() {
        onShow(false);
    }

    async function editSubmit(token: string) {

        try {

            const target = parseFloat(targetValue.replace(",", "."));
            const earned = parseFloat(initialValue.replace(",", "."));

            await axios.put(`${baseurl}/pot/${idPot}`, {

                title: potName,
                description: potDescription,
                earnedValue: earned,
                goal: target,
                color: themeCurrent.color

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
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
                    toast.warn("reconecte-se em sua conta");

                    setTimeout(() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/");
                    }, 700);
                }

                if (error.response?.data.message == "pot not found") {
                    toast.error("Não foi possivel achar o pote");
                    toast.warn("Você será devolvido a página de Lita de potes");

                    setTimeout(() => {
                        navigate("/pots");
                    }, 700);
                    return;
                }

                // Trata outros erros de resposta
                console.error("Erro de requisição, ", error.response?.data);
                toast.error(`Erro ao editar, por favor tente mais tarde`);
            } else {
                console.error("Erro ao processar a requisição, ", error);
                toast.error('Erro ao processar a edição, por favor tente novamente');
            }
        }
    }

    async function addSubmit(token: string) {
        try {

            const target = parseFloat(targetValue.replace(",", "."));
            const earned = parseFloat(initialValue.replace(",", "."));

            await axios.post(baseurl + "/pot", {

                title: potName,
                description: potDescription,
                earnedValue: earned,
                goal: target,
                color: themeCurrent.color

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            toast.success("Adicionado com sucesso");
            setTimeout(() => {
                showModal();
            }, 700);

        } catch (error) {

            if (axios.isAxiosError(error)) {
                if (error.response?.status === 403) {
                    toast.error('Acesso não autorizado. Por favor, verifique suas credenciais.');
                    return;
                }

                if (error.response?.data.message === "pot already exists in list") {
                    toast.error("Pote já existe em lista");
                    setPotNameWrong(true);
                    return;
                }

                console.error("Erro de requisição, ", error.response?.data)
                toast.error(`Erro na requisição, tente mais tarde`);
            } else {
                console.error("Erro ao processar a requisição, ", error);
                toast.error('Erro ao processar a requisição');
            }

        }
    }

    async function submitForm(e: React.FormEvent) {
        e.preventDefault();

        setButtonRelease(true);
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
            toast.warn("Meta não pode ser zero");
            setTargetWrong(true);
        }

        else {

            const tokenJson = localStorage.getItem("token");

            if (tokenJson) {

                const token: { token: string } = JSON.parse(tokenJson);

                if (modal === "add") {
                    await addSubmit(token.token);
                } else if (modal === "edit") {
                    await editSubmit(token.token);
                }
            } else {
                const guestUserJson = localStorage.getItem("guest user");

                if (guestUserJson) {

                    const guestUser: IGuestUser = JSON.parse(guestUserJson);

                    const target = parseFloat(targetValue.replace(",", "."));
                    const earned = parseFloat(initialValue.replace(",", "."));

                    if (modal === "add") {

                        guestUserAddPot({
                            id: (Math.random()).toString().split(".")[1],

                            title: potName,
                            description: potDescription,

                            earnedValue: earned,
                            goal: target,

                            color: themeCurrent.color ? themeCurrent.color : "#009929",
                        }, guestUser);

                        toast.success("Criado com sucesso");
                        setTimeout(() => {
                            showModal();
                        }, 700);

                    } else {
                        if (idPot) {
                            const editSuccess = guestUserEditPot({
                                id: idPot,

                                title: potName,
                                description: potDescription,

                                earnedValue: earned,
                                goal: target,

                                color: themeCurrent.color ? themeCurrent.color : "#009929",
                            }, guestUser, idPot);

                            if (editSuccess) {
                                toast.success("Editado com sucesso");
                                setTimeout(() => {
                                    showModal();
                                }, 700);
                            }
                        } else {
                            toast.warn("Não a um id de objeto")
                            return;
                        }

                    }

                }
            }
        }

        setButtonRelease(false);
    }

    return (
        <Styled.Container
            className='background_modal'
            show={close ? "view" : "hidden"} >
            <article className='card' >

                <div className="header_modal">
                    <strong className='text_present_1' >{modal == 'add' ? "Adicionar novo" : "Edite o"} Pote</strong>
                    <span className='text_present_5_bold' onClick={showModal} >X</span>
                </div>

                <p className='text_present_4' >
                    {modal === 'add'
                        ? "Crie um fundo para definir metas de economia. Isso pode ajudar você a manter o controle enquanto economiza para compras especiais."
                        : "Se suas metas de economia mudarem, sinta-se à vontade para atualizar seus potes."}
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

                        onChange={(e) => dealingWithValueInputs(e, "target")}
                        onBlur={() => takeTheFocus('target')}
                        onFocus={() => cleanInput('target')}

                        value={targetValue}
                        wrong={targetWrong}
                        type='target'
                    />

                    <Input

                        label='Valor inicial'

                        onChange={(e) => dealingWithValueInputs(e, "goal")}
                        onBlur={() => takeTheFocus('goal')}
                        onFocus={() => cleanInput('goal')}

                        value={initialValue}
                        wrong={initialValueWrong}

                        type='target'
                    />

                    <InputAccordion
                        label='Tema'
                        list={listTheme}
                        current={themeCurrent}
                        updateCurrent={(color) => setThemeCurrent(color)}
                    />

                    <Button type='submit' disabled={buttonRelease} >{modal === "add" ? "Adicionar Pote" : "Salvar Mudanças"}</Button>
                </form>
            </article>
        </Styled.Container>
    );
}

