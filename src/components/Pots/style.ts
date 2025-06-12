import styled from "styled-components";

interface ILi {
    color_sidebar: string;
}

export const Container = styled.article`
    width: 100%;
    padding: 32px;

    border-radius: 12px;

    background-color: var(--white);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;

    h3 {
        color: var(--grey_900);
    }

    div {
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;

        color: var(--grey_500);

        cursor: pointer;

        img {
            margin-left: 12px;
        }
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;

    padding: 20px 16px;
    border-radius: 12px;

    background-color: var(--beige_100);

    img {
        width: 40px;
    }

    span {
        color: var(--grey_500);
    }

    strong {
        color: var(--grey_900);
    }

    div {
        display: flex;
        flex-direction: column;

        margin-left: 16px;
    }
`;

export const Grid = styled.div`
    display: flex;
    flex-direction: row;

    div {
        
    }

    ul {
        width: 100%;

        margin-left: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
    }
`;

export const Li = styled.li<ILi>`
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