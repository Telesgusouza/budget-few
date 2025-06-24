import styled from "styled-components";

export const Container = styled.article`

    .rosquinha {
        /* 
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        */
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 50px;

        ul {
            margin-left: 16px;

            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 16px;

            li {
                padding-right: 25px;
            }
        }
    }

    @media (max-width: 630px) {
        .rosquinha {
            flex-direction: column;

            ul {
                grid-template-columns: 1fr 1fr;

                margin-left: 0px;
                margin-top: 16px;
            }
        }

        .pie {
            margin: 0 auto;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
        color: var(--grey_900);
    }
`;