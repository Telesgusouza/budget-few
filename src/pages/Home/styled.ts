import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    padding: 32px 40px;

    h1 {
        margin-bottom: 42px;
    }
`;

export const Grid = styled.section`
    width: 100%;
    
    color: var(--grey_900);

    .content_overview {
        /* display: flex; */

        display: grid;
        grid-template-columns: 6fr 4fr;
        grid-gap: 24px;

        margin-top: 32px;

        article {
            height: fit-content;
        }

    }

    .content_left, .content_right {
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 24px;

    }

    @media (max-width: 1000px) {
        padding-bottom: 70px;
        
        .content_overview {
            grid-template-columns: 1fr;
        } 
    }
`;
