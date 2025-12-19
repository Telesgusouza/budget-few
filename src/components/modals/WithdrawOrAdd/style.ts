import styled from "styled-components";

interface IProps {
    view: "view" | "hidden"
}

interface IBar {
    operation: "add" | "withdraw";
    bar: number;
    barOperation: number;
}

export const Container = styled.div<IProps>`
    width: 100%;

    display: ${props => props.view === "view" ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Content = styled.form`
    /* max-width: 560px; */

    /* max-width: calc(100% - 80px); */
    max-width: 100%;
    width: fit-content;


    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    p {
        color: var(--grey_500);
    }

    h3 {
        width: 100%;
        min-height: 45px;
    }

    p {
        width: 100%;
        min-height: 20px;
    }

`;

export const ChartAndBar = styled.div`

    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 13px;

    .between {
        overflow: hidden;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        grid-gap: 15px;

        align-items: center;

        span {
            white-space: nowrap;
        }
    }

    .black {
        color: var(--grey_500);
    }

    .red {
        color: var(--red);
    }

    .green {
        color: var(--green);
    }
`;

export const Bar = styled.div<IBar>`

    width: 100%;

    background-color: #d9d9d9;
    height: 8px;
    border-radius: 5px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: start;

    &::before {
        content: "";
        height: 100%;
        width: ${props => props.bar}%;

        background-color: var(--grey_900);

        border-end-start-radius: 5px;
        border-top-left-radius: 5px;

        border-right: 2px solid var(--white);

        transition: width .2s ease;
    }

    &::after {
        content: "";
        height: 100%;
        width: ${props => props.barOperation}%;
        background-color: ${props => props.operation === "add" ? 'var(--green)' : 'var(--red)'};

        border-end-end-radius: 5px;
        border-top-right-radius: 5px;

        transition: width .2s ease;
    }
`;