import styled from "styled-components";

interface IProps {
    show: "view" | "hidden";
}

export const Container = styled.div<IProps>`

    display: ${props => props.show == "view" ? "flex" : "none"};
    align-items: center;
    justify-content: center;


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