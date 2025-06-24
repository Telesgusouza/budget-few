import styled from "styled-components";

export const Container = styled.article`

    width: 100%;
    max-width: calc(100vw - 80px);

    overflow: hidden;
    
    ul {
        
    }

    li {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 20px 0 0 0;

        cursor: pointer;

        &:not(:last-child) {
            border-bottom: 1px solid var(--grey_100);
            padding-bottom: 20px;
        }
    }


    .transaction_div_left {

        display: flex;
        flex-direction: row;

        align-items: center;

        overflow: hidden;

        img {
            width: 40px;
            height: 40px;

            object-fit: cover;
            border-radius: 50%;
        }

        strong {

            color: var(--grey_900);
            margin-left: 16px;
        }
    }

    .green {
        color: var(--green);
    }

    .transaction_div_right {
        display: flex;
        flex-direction: column;
        grid-gap: 8px;
        align-items: end;

        span {
            color: var(--grey_500);
            white-space: nowrap;
        }
    }

    @media (max-width: 630px) {
        img {
            width: 32px;
            height: 32px;
        }
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;