import * as Styled from './style';

interface IProps {
    width?: number;
    height?: number;
}

export default function ModalLoading({ width = 400, height = 300 }: IProps) {
    
    return (
        <Styled.Container className="background_modal" width={width} height={height} >
            <div className='loading' />
        </Styled.Container>
    )
}