import * as Styled from './style';

import spinnerImg from '../../assets/icons/spinner.svg'; 

export default function LoadingInRotation() {

    return (
        <Styled.Container>
            <img src={spinnerImg} alt="logo de spinner" />
        </Styled.Container>
    ) 
}