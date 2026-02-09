import styled from "styled-components";


interface IProps {
    width: number;
    height: number;
}

export const Container = styled.div<IProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    div {

        width: 100%;
        max-width: 400px;
        min-height: 300px;
        border-radius: 15px;

        @keyframes isLoading {
        0% {
            background-position: 0%;
        }

        50% {
            background-position: 100%;
        }

        100% {
            background-position: 0%;
        }
        }

        background: white;
        background-image: linear-gradient(45deg, white, #c3c3c3, white);
        background-size: 400%;
        animation: isLoading 1s linear infinite;
    }
`;

// export const DivLoading = styled.div`


// `;
