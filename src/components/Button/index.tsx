import { ReactNode } from 'react';
import * as Styled from './syled';

interface IProps {
    children: ReactNode;

    type?: "button" | "reset" | "submit";
    disabled?: boolean;
}

export default function Button({ children, type = "button", disabled= false }: IProps) {

    return (
        <>
            <Styled.Button 
                type={type}
                className='text_present_4_bold' 
                disabled={disabled}>
                {children}
            </Styled.Button>
        </>
    )
}
