import * as Styled from './style';

export default function Values() {

    // adicionar um modal para mostrar o valor

    return (
        <Styled.Container>
            <ul>
                <li>
                    <span className='text_present_4' >Saldo Atual</span>
                    {/* <strong className='text_present_1' >$4.836,00</strong> */}
                    <strong className='text_present_1 see_text' >$4.000.000,00</strong>
                </li>

                <li>
                    <span className='text_present_4' >Renda</span>
                    {/* <strong className='text_present_1' >$3.814,24</strong> */}
                    <strong className='text_present_1 see_text' >$4.000.000,00</strong>
                </li>

                <li>
                    <span className='text_present_4' >Despesas</span>
                    {/* <strong className='text_present_1' >$1.700,50</strong> */}
                    <strong className='text_present_1 see_text' >$4.000.000,00</strong>
                </li>
            </ul>
        </Styled.Container>
    )
}