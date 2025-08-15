import styled from "styled-components";

interface IProps {
    show: "view" | "hidden";
}

export const Container = styled.div<IProps>`
    position: fixed;
    z-index: 999;

    width: 100%;
    height: 100%;

    display: ${props => props.show == "view" ? "flex" : "none"};
    align-items: center;
    justify-content: center;

    padding: 20px;
    background-color: rgba(0, 0, 0, .2);

    article {

        width: 100%;
        max-width: 560px;
        height: fit-content;

        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;

        p {
            color: var(--grey_500);
        }
    }

    form {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 16px;

        button {
            margin-top: 4px;
        }
    }

    div {
        display: flex;
        justify-content: space-between;
    }
`;

export const HeaderModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 25px;
        height: 25px;
        border: 2px solid var(--grey_500);
        border-radius: 50%;
        color: var(--grey_500);

        cursor: pointer;
    }

    strong {
        color: var(--grey_900);
    }
`;