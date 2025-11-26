import Button from '../../Button';
import Input from '../../Inputs/Input';
import * as Styled from './style';

export default function WithdrawOrAdd() {

    /*
    
    + chegar adaptagem a diferentes tamanhos de tela (de acordo com o figma)

    + trazer as informações
    + fazer a operação 
    
    */

    return (
        <Styled.Container
            className='background_modal'
            view='view' >

            <Styled.Content
                className='card'>


                <div className='header_modal' >
                    <h3
                        className='text_present_1' >Retirar dinheiro da 'name pot'</h3>
                    <span className='text_present_5_bold' >X</span>
                </div>

                <p className='text_present_4' >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.
                </p>


                <Styled.ChartAndBar >

                    <div className='between' >
                        <span className='text_present_4' >Total salvo</span>
                        <strong className='text_present_1' >R$500,00</strong>
                    </div>

                    <Styled.Bar
                        operation='withdraw'
                    />

                    <div className='between' >
                        <span className='text_present_5_bold red' >5,95%</span>
                        <span className='text_present_5' >Meta de R$1000,00</span>
                    </div> 

                </Styled.ChartAndBar>

                <Input label='amount' onChange={() => {}} value={0} wrong={false} type='target' />

                <Button>
                    Confirme Retirada
                </Button>

            </Styled.Content>

        </Styled.Container>
    )
}