import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    
    ul {
        width: 100%;
        /* overflow: hidden; */

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 24px;
    }

    li {
        width: 100%;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        padding: 24px;

        border-radius: 12px;

        background-color: var(--white);
        color: var(--grey_900);

        span {
            color: var(--grey_500);
        }

        /* strong {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        } */

        &:nth-child(1) {
            background-color: var(--grey_900);
            color: var(--white);

            span {
                color: var(--white);
            }
        }

        cursor: pointer;
    }

    strong {
        width: 100%;
        overflow: hidden;
    }

    span {
        margin-bottom: 12px;
    }

    @media (max-width: 630px) {
        

        ul {
            grid-template-columns: 1fr;
            grid-gap: 12px;
        }

        li {
            padding: 20px;
        }
    }
`;