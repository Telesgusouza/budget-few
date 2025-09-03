import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as Styled from './style';

import TinyLine from '../../components/TinyLine';
import Button from '../../components/Button';
import ModalPot from '../../components/modals/ModalPot';

export default function PotInfo() {

    const { idPot } = useParams();

    const navigate = useNavigate();

    const [showModalPot, setShowModalPot] = useState<boolean>(true);

    function backPage () {
        navigate("/pots");
    }

    return (
        <Styled.Container >

            <ModalPot modal='add' onShow={setShowModalPot} close={showModalPot} />

            <Styled.BackPage onClick={backPage} >

                <span className='text_present_3' >
                    Voltar
                </span>

            </Styled.BackPage>

            <Styled.Content className='card' >

                <div>
                    <h1 className='text_present_1' >Titulo</h1>
                    <span className='text_present_5_bold' >Ultima atualização 25 de agosto</span>
                </div>

                <Styled.ContainerGraphic>
                    <TinyLine />
                </Styled.ContainerGraphic>

                <p className='text_present_4_bold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aut nam necessitatibus ab accusamus voluptatibus quibusdam fuga porro aliquam, molestias dolorum voluptates! Ratione, omnis praesentium. Commodi optio eaque reprehenderit molestias?</p>

                <div className='container_btns' >
                    <Button>Edite</Button>
                    <Button detroy={true} >Delete</Button>
                </div>

                {/*

                withdraw from 'Savings'

                Add to 'Savings'
                
                // description

                // botão para adicionar // botão para retirar

                // modais para adicionar e retirar, todos eles estão no figma
                */}
            </Styled.Content>
        </Styled.Container>
    )
}