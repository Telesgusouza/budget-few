import styled, { css } from "styled-components";

interface IProps {
    detroy: "detroy" | "";
    order: "primary" | "secondary" | "tertiary";
}

export const Button = styled.button<IProps>` 

    padding: 16px;
    border: none;
    border-radius: 8px;

    transition: opacity .2s ease-in-out;

    ${props => props.detroy == "detroy" && 
    css`
        background-color: var(--red);
        color: var(--white);
     ` }



    ${props => props.detroy === "" && css`
        ${props.order === "primary" && css`
            background-color: var(--grey_900);
            color: var(--white);
        `}

        ${props.order === "secondary" && css`
            background-color: var(--beige_100);
            color: var(--grey_900);
        `}

        ${props.order === "tertiary" && `background-color: #f3f4f6;`}
    `}

    &:disabled {
        cursor: not-allowed;
        background-color: #444446;
    }

    &:hover {
        opacity: 0.9;
    }

`; 
