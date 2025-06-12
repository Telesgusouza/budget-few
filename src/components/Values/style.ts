import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 24px;
    }

    li {
        display: flex;
        flex-direction: column;
        padding: 24px;

        border-radius: 12px;

        background-color: var(--white);
        color: var(--grey_900);

        span {
            color: var(--grey_500);
        }

        &:nth-child(1) {
            background-color: var(--grey_900);
            color: var(--white);

            span {
                color: var(--white);
            }
        }
    }

    span {
        margin-bottom: 12px;
    }
`;