import { useParams } from 'react-router-dom';
import * as Styled from './style';
import { useEffect, useState } from 'react';
import TinyLine from '../../components/TinyLine';
import Button from '../../components/Button';
import ModalPot from '../../components/modals/ModalPot';

export default function PotInfo() {


    const { idPot } = useParams();

    const [showModalPot, setShowModalPot] = useState<boolean>(true);
    return (
        <Styled.Container >

            <ModalPot onShow={setShowModalPot} close={showModalPot} />

            <Styled.BackPage>
                {/* // voltar a pagina anterior */}
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
                    <Button>ola mundo</Button>
                    <Button detroy={true} >ola mundo</Button>
                </div>

                {/*
                
                // description

                // botão para adicionar // botão para retirar

                // modais para adicionar e retirar, todos eles estão no figma
                */}
            </Styled.Content>
        </Styled.Container>
    )
}