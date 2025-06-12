import styled from "styled-components";

export const Container = styled.article`
    width: 100%;

    padding: 32px;
    
    background-color: var(--white);

    border-radius: 12px;

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

    div {
        width: fit-content;
        white-space: nowrap;
        
        display: flex;

        color: var(--grey_500);
        cursor: pointer;
        

        span {
            margin: 0;
            padding: 0;

            justify-content: center;

            margin-right: 12px;
        }

        img {
            margin-left: 0px;

            margin: 0;
            padding: 0;
        }
    }
`;