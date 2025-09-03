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

export const BackPage = styled.div`
    width: 100%;
    max-width: 700px;
    margin-bottom: 26px;

    span {
        padding: 0 4px;
        color: var(--grey_500);
        
        cursor: pointer;

        position: relative;

        &::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2px;
            width: 0;
            height: 2px;

            background-color: var(--grey_500);

            transition: all .2s ease-in-out;
        }

        &:hover::before {
            left: 0%;
            width: 100%;
        }
    }
`;

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
