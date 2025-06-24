import * as Styled from './style';

interface IProps {
    title: string;
    value: number;
    color: string;
}

export default function Li({ color, title, value }: IProps) {

    return (
        <Styled.Li color_sidebar={color} >
            <span className="text_present_5" >{title}</span>
            <strong className="text_present_4_bold see_text" >${value}</strong>
        </Styled.Li>
    )
}