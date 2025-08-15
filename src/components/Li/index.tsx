import * as Styled from './style';
import { formatNumber } from '../../config/utils';

interface IProps {
    title: string;
    value: number;
    color?: string;

    onClick: () => void;
    key: number | string;
}

export default function Li({ onClick, key, color = "#82c9d7", title, value }: IProps) {

    return (
        <Styled.Li
            key={key}
            onClick={() => onClick()}
            color_sidebar={color}
        >
            <span className="text_present_5" >{title}</span>
            <strong className="text_present_4_bold see_text" >R${formatNumber(value)}</strong>
        </Styled.Li>
    )
}