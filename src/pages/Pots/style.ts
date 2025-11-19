import styled from "styled-components";

interface IBar {
    percentage: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    .between {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    section {
        width: 100%;
        max-width: 1800px;

        margin: 0 auto;

        padding: 0 40px 40px 40px;
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 32px 0;
    }

    h1 {
        color: var(--grey_900);
    }

    h2 {

        position: relative;

        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-direction: center;

        color: var(--grey_900);

        &::before {
            content: "";

            margin: auto 16px auto 0;

            max-width: 16px;
            max-height: 16px;

            padding: 8px;
            border-radius: 50%;
            background-color: black;
        }
    }

    .listPots {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
    }

    .threePoints {

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 4px;
        align-items: center;

        cursor: pointer;

        div {
            background-color: var(--grey_300);
            padding: 3px;

            border-radius: 50%;
        }
    }

    .containerBtn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
    }

    .pagination {
        width: 100%;
        padding-top: 30px;

        display: flex;
        flex-direction: row;
        justify-content: end;
    }

    @media (max-width: 1000px) {
        .listPots {
            grid-template-columns: 1fr;
        }

        section {
            margin-bottom: 110px;
        }
    }

    @media (max-width: 550px) {

        section {
            padding: 0 16px;
        }   
    }
`;

export const PotChartAndBar = styled.div`

    margin: 16px 0;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    span {
        color: var(--grey_500);
    }
`;

export const Bar = styled.div<IBar>`
    min-width: 100%;
    padding: 4px;
    margin: 16px 0 13px 0;

    border-radius: 4px;
    background-color: var(--beige_100);

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: ${props => props.percentage}%;

        border-radius: 4px;

        background-color: var(--green);
    }
`;
