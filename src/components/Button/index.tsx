import { ReactNode } from 'react';
import * as Styled from './syled';

interface IProps {
    children: ReactNode;

    order?: "primary" | "secondary" | "tertiary";

    type?: "button" | "reset" | "submit";
    disabled?: boolean;
    detroy?: boolean;
    className?: string;
}

export default function Button({ 
    children, 
    order = "primary",
    
    type = "button", 
    disabled= false, 
    detroy = false, 
    className = "" }: IProps) {

    return (
        <>
            <Styled.Button 
                type={type}
                order={order}

                className={'text_present_4_bold ' + className} 
                disabled={disabled}
                detroy={detroy ? "detroy" : ""}
                >
                {children}
            </Styled.Button>
        </>
    )
}
