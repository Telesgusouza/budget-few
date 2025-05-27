import styled from "styled-components";

export const Container = styled.span`

    @keyframes loading {
        to {
            rotate: 0deg;
        }

        from {
            rotate: 360deg;
        }
    }

    img {
        animation: loading 1s linear infinite;

        width: 100%;
        max-width: 25px;
    }
`;