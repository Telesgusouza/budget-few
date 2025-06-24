import * as Styled from './style';
import img_caret_right from '../../assets/icons/caret-right.svg';

export default function RecurringBills() {

    return (
        <Styled.Container className='card' >

            <div>
                <h2 className='text_present_2' >Contas recorrentes</h2>

                <div>
                    <span className='text_present_4' >Veja detalhes</span>
                    <img src={img_caret_right} alt="saiba mais" />
                </div>
            </div>

            <ul>
                <Styled.Li $border_color='purple' >
                    <h5 className='text_present_4' >Contas pagas</h5>
                    <strong className='text_present_4_bold see_text' >R$190.000.000.000.000,00</strong>
                    {/* <strong className='text_present_4_bold' >R$190,00</strong> */}
                </Styled.Li>

                <Styled.Li $border_color='purple' >
                    <h5 className='text_present_4' >Contas pagas</h5>
                    <strong className='text_present_4_bold' >R$190,00</strong>
                </Styled.Li>
                
                <Styled.Li $border_color='purple' >
                    <h5 className='text_present_4' >Contas pagas</h5>
                    <strong className='text_present_4_bold' >R$190,00</strong>
                </Styled.Li>
            </ul>
        
        </Styled.Container>
    )
}