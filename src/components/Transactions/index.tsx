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
                        <strong className='text_present_4_bold see_text' >Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold green' >+$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        {/* <strong className='text_present_4_bold see_text' >Emma Richardson Emma Richardson  Emma Richardson  Emma Richardson  Emma Richardson </strong> */}
                        <strong className='text_present_4_bold see_text' >nome aleatório</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold' >-$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold see_text' >Emma Richardson</strong>
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

/*

estou tentando fazer com que esse strong tenha um tamanho e que quando a tela diminua ele seja cortado a medida que diminuir e ficar com os 3 pontinhos

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
                        <strong className='text_present_4_bold see_text' >Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold green' >+$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold see_text' >Emma Richardson Emma Richardson Emma Richardson</strong>
                    </div>
                    <div className='transaction_div_right' >
                        <strong className='text_present_4_bold' >-$75</strong>
                        <span className='text_present_5' >19 Aug 2024</span>
                    </div>
                </li>

                <li>

                    <div className='transaction_div_left' >
                        <img src={avatar_1} alt="avatar" />
                        <strong className='text_present_4_bold see_text' >Emma Richardson</strong>
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

export const Container = styled.article`
    max-width: 100%;

    ul {
        width: 100%;
    }

    li {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 20px 0 0 0;

        cursor: pointer;

        &:not(:last-child) {
            border-bottom: 1px solid var(--grey_100);
            padding-bottom: 20px;
        }
    }

    div {
        width: 100%;
    }

    .transaction_div_left {
        display: flex;
        flex-direction: row;

        align-items: center;

        img {
            width: 40px;
            height: 40px;

            object-fit: cover;
            border-radius: 50%;
        }

        strong {
            width: 100%;
            max-width: 100%;

            background-color: red;
 
            color: var(--grey_900);
            margin-left: 16px;
        }
    }

    .green {
        color: var(--green);
    }

    .transaction_div_right {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;
        align-items: end;

        span {
            color: var(--grey_500);
            white-space: nowrap;
        }
    }

    @media (max-width: 630px) {
        img {
            width: 32px;
            height: 32px;
        }
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


.see_text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


*/
