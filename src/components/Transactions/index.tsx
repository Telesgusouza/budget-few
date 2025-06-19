import * as Styled from './style';
import img_caret_right from '../../assets/icons/caret-right.svg';
import avatar_1 from "../../assets/imgs/avatars/Logo 6.jpg";

export default function Transactions() {

    return (
        <Styled.Container className='card' >
            <Styled.Header>
                <strong>Transações</strong>

                <div className='see_details' >
                    <span className='text_present_4' >Veja Tudo</span>
                    <img src={img_caret_right} alt="Detalhes das transações" />
                </div>
            </Styled.Header>

            <ul>
                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold' >Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold green' >+$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold' >Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold' >-$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold' >Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold' >-$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>
            </ul>
        </Styled.Container>
    )
}