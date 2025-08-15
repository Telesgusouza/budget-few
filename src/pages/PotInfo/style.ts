import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BackPage = styled.div``;

export const Content = styled.section`
    width: 100%;
    max-width: 700px;

    h1 {
        color: var(--grey_900);
    }

    span {
        color: var(--grey_700);
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    p {
        color: var(--grey_700);
    }

    .container_btns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;

        margin-top: 30px;
    }

    button {
        width: 100%;
    }
`;

export const ContainerGraphic = styled.div`
    width: 100%;
    height: 150px;

    margin: 20px 0;

    position: relative;

`;
