import styled from "styled-components";

interface IProps {
    view: "view" | "hidden"
}

interface IBar {
    operation: "add" | "withdraw";
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    /* max-width: 560px; */
    width: fit-content;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    p {
        color: var(--grey_500);
        
    }
`;

export const ChartAndBar = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 13px;

    div {
        
        span {
            color: var(--grey_500);
        }

        strong {
            color: var(--grey_900);
        }
    }

    .between {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        grid-gap: 15px;

        align-items: center;
    }

    .red {
        color: var(--red);
    }

    .green {
        color: var(--green);
    }
`;

export const Bar = styled.div<IBar>`
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
        width: 50px;

        background-color: var(--grey_900);

        border-end-start-radius: 5px;
        border-top-left-radius: 5px;

        border-right: 2px solid var(--white);
    }

    &::after {
        content: "";
        height: 100%;
        width: 50px;
        /* background-color: var(--red); */
        background-color: ${props => props.operation === "add" ? 'var(--green)' : 'var(--red)'};

        border-end-end-radius: 5px;
        border-top-right-radius: 5px;
    }
`;