import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--beige_100);

    form {
        width: 100%;

        max-width: 560px;
        height: fit-content;

        padding: 32px;
        border-radius: 12px;

        background-color: var(--white);
    }
    
    div {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1.3rem;
    }

    h1 {
        color: var(--grey_900);
        margin-bottom: 1.5rem;
    }

    p {
        color: var(--grey_900);
        margin-bottom: 1.5rem;
    }

    button {
        margin-top: 0.7rem;
        width: 100%;
    }
`;

export const Navigate = styled.div`
    width: 100%;
    max-width: 560px;

    p {
        position: relative;

        width: fit-content;
        margin: 0;

        margin-bottom: 16px;

        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            bottom: -5px;
            left: 50%;
            
            width: 0%;
            height: 1px;

            background-color: black;

            transition: all .12s linear;
        }

        &:hover::after {
            left: 0%;
            width: 100%;
        }
    }
`;
