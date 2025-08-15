import styled, { css } from "styled-components";

interface IProps {
    detroy: "detroy" | "";
}

export const Button = styled.button<IProps>` 

    padding: 16px;
    border: none;
    border-radius: 8px;

    transition: opacity .2s ease-in-out;

    ${props => props.detroy == "detroy" ? 
    css`
        background-color: var(--red);
        color: var(--white);
    ` : 
    css`
        background-color: var(--grey_900);
        color: var(--white);
    `}

    &:disabled {
        cursor: not-allowed;
        background-color: #444446;
    }

    &:hover {
        opacity: 0.9;
    }

`; 
