import styled from "styled-components";

interface IProps {
    onShow: "flex" | "none";
}

export const Container = styled.div<IProps>`
    display: ${props => props.onShow};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.section`
    max-width: 450px;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    strong {
        color: var(--grey_900);
    } 

    .header {
        display: flex;
        justify-content: space-between;

        div {
            width: 25px;
            height: 25px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            border: 1px solid black;

            font-weight: 100;
            cursor: pointer;
        }
    }

    p {
        color: var(--grey_500);
    }

    button {
        width: 100%;
    }

    span {
        position: relative;

        width: fit-content;
        color: var(--grey_500);
        margin: 0 auto;

        cursor: pointer;

        transition: all .2s solid;

        &::before {
            content: "";
            position: absolute;
            bottom: 0px;
            left: 50%;
            
            height: 1px;
            width: 0%;
            background-color: black;

            transition: all .15s ease;
        }

        &:hover::before {
            left: 0%;
            width: 100%;
        }
    }
`;