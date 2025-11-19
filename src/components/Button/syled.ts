import styled, { css } from "styled-components";

interface IProps {
    detroy: "detroy" | "";
    order: "primary" | "secondary" | "tertiary";
}

export const Button = styled.button<IProps>` 

    padding: 16px;
    border: 1px solid transparent;
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

            &:hover {
                opacity: 0.9;
            }
        `}

        ${props.order === "secondary" && css`
            background-color: var(--beige_100);
            color: var(--grey_900);

            transition: border .19s ease-in-out;

            &:hover {
                background-color: var(--white);
                border: 1px solid var(--beige_500);
            }
        `}

        ${props.order === "tertiary" && `background-color: #f3f4f6;`}
    `}

    &:disabled {
        cursor: not-allowed;
        background-color: #444446;
    }

`; 
