import styled, { css } from "styled-components";

interface iProps {
    $pright: "password" | "";
    $wrong: "wrong" | "";
}

export const Label = styled.label<iProps>`
    display: flex;
    flex-direction: column;

    span {
        color: var(--grey_500);
    }

    div {
        display: flex;
        align-items: center;

        position: relative;

        img {
            position: absolute;
            right: 20px;

            cursor: pointer;
        }
    }

    input {
        width: 100%;
        padding: 12px 20px;

        ${props => props.$pright === "password" && css`
            padding-right: 50px;
        `}

        border-radius: 8px;
        border: 1px solid var(--beige_500);

        background-color: transparent;

        outline: none;

        ${props => props.$wrong === "wrong" && css`
            
            border: 1px solid var(--red);
        `}

    }

    p {
        width: 100%;
        text-align: right;
        margin-top: 4px;
    }
`;

export const changePassword = styled.div`
    text-align: center;
    margin-top: 8px;

    cursor: pointer;
`;
