import * as Styled from './style';

export default function Values() {

    return (
        <Styled.Container>
            <ul>
                <li>
                    <span className='text_present_4' >Saldo Atual</span>
                    <strong className='text_present_1' >$4.836,00</strong>
                </li>

                <li>
                    <span className='text_present_4' >Renda</span>
                    <strong className='text_present_1' >$3.814,24</strong>
                </li>

                <li>
                    <span className='text_present_4' >Despesas</span>
                    <strong className='text_present_1' >$1.700,50</strong>
                </li>
            </ul>
        </Styled.Container>
    )
}