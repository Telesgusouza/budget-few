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
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
        color: var(--grey_900);
    }
`;