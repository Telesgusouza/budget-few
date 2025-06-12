import styled from "styled-components";

interface IProps {
    color_sidebar: string;
}

export const Li = styled.li<IProps>`
    display: flex;
    flex-direction: column;

    padding-left: 16px;
    padding: 2px 16px;
    position: relative;

    min-height: 43px;

    span {
        color: var(--grey_500);
    }

    strong {
        color: var(--grey_900);
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 4px;
        height: 100%;

        border-radius: 8px;


        background-color: ${props => props.color_sidebar};
    }
`;
