import { toast } from 'react-toastify';
import { IGuestUser } from '../../../config/interfaces';
import Button from '../../Button';
import * as Styled from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../../../baseurl';

interface IProps {
    id: string;
    onShow: (bo: boolean) => void;
    close: boolean;
}

export default function ModalDelete({ id, onShow, close }: IProps) {

    const navigate = useNavigate();

    async function deletePot() {
        const jsonToken = localStorage.getItem("token");

        if (jsonToken) {
            const token = JSON.parse(jsonToken);

            try {

                await axios.delete(baseurl + "/pot/" + id, {
                    headers: {
                        'Authorization': `Bearer ${token.token}`
                    }
                });

                toast.success("Pot deletado com sucesso");

                setTimeout(() => {
                    onShow(false);
                    navigate("/pots");
                }, 700);

            } catch (error) {
                if (axios.isAxiosError(error)) {

                    if (error.response?.status === 403) {
                        toast.warn("Reconecte-se a sua conta");
                        setTimeout(() => {
                            navigate("/")
                        }, 700);
                    }

                    switch (error.response?.data.message) {
                        case "pot not found": {
                            toast.warn("Pote não encontrado, você será redirecionado");
                            setTimeout(() => {
                                onShow(false)
                                navigate("/pots");
                            }, 700);
                            break;
                        }

                        case "An unexpected error occurred while deleting pot": {
                            toast.warn("Ocorreu um erro inesperado ao excluir o pote.");
                            setTimeout(() => {
                                onShow(false);
                            }, 700);
                            break;
                        } default: {
                            toast.warn("Erro ao fazer requisição, tente novamente mais tarde");
                            setTimeout(() => {
                                onShow(false);
                            }, 700);
                        }
                    }

                } else {
                    toast.warn("Erro desconhecido tentei novamente mais tarde");
                    setTimeout(() => {
                        onShow(false);
                    }, 700);
                }
            }

        } else {
            const jsonGuest = localStorage.getItem("guest user");

            if (jsonGuest) {
                const guest: IGuestUser = JSON.parse(jsonGuest);
                const potIndex = guest.pots.findIndex(item => item.pot.id === id);
                guest.pots.splice(potIndex, 1);

                const guestUserJson = JSON.stringify(guest);
                localStorage.setItem("guest user", guestUserJson)

                toast.success("deletado com sucesso");
                setTimeout(() => {
                    onShow(false)
                    navigate("/pots");
                }, 700);

            }
        }
    }

    return (
        <Styled.Container className='background_modal' onShow={close ? "flex" : "none"} >
            <Styled.Content className='card' >
                <div className='header' onClick={() => { onShow(false) }} >
                    <strong className='text_present_2' >Delete 'Moto'</strong>
                    <div>X</div>
                </div>
                <p className='text_present_4' >Tem certeza de que deseja excluir este orçamento? Esta ação é irreversível e todos os dados contidos nele serão removidos permanentemente.</p>

                <Button detroy onClick={deletePot} >Sim, confimar deletar</Button>

                <span className='text_present_4' onClick={() => onShow(false)} >Não, eu quero voltar.</span>

            </Styled.Content>
        </Styled.Container>
    )
}