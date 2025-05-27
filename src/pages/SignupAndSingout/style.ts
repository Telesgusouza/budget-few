import styled from "styled-components";

interface ISidebar {
    background: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 20px;

    background-color: var(--beige_100);

    @media (max-width: 900px) {
        padding: 0px;
        flex-direction: column;
    }

`;

export const HeaderMobile = styled.header`
    display: none;
    
    padding: 24px;
    background-color: var(--grey_900);

    @media (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

`;

export const Sidebar = styled.section<ISidebar>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    max-width: 560px;
    height: calc(100vh - 40px);
    max-height: calc(100vh - 40px);
    
    padding: 40px;
    border-radius: 12px;
    
    background-image: url(${props => props.background});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    color: var(--white);
    text-shadow: 0 0 15px rgba(0, 0, 0, .4);

    img {
        width: 121px;
        height: fit-content;
    }

    h2 {
        margin-bottom: 24px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export const Form = styled.section`
    width: 100%;
    height: calc(100vh - 40px);
    padding: 20px 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: var(--grey_900);
        margin-bottom: 32px;
    }

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
        grid-gap: 16px;
    }

    button {
        width: 100%;
        margin-top: 32px;
    }

    @media (max-width: 900px) {
        padding: 20px;
    }

    @media (max-width: 450px) {
        padding: 16px;

        form {
            padding: 24px 20px;
        }
    }
`;

export const ChangeLoginToRegister = styled.div`
    width: 100%;
    margin-top: 32px;

    p {
        width: fit-content;
        margin: 0 auto;
    }

    strong {
        text-decoration: dotted;

        cursor: pointer;
    }
`;
