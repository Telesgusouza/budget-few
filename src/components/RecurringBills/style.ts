import styled from "styled-components";

interface ILi {
    $border_color: string;
}

export const Container = styled.section`
    div {
        
        &:nth-child(1) {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        &:nth-child(2) {
            display: flex;
            flex-direction: row;
            align-items: center;

            cursor: pointer;

            img {
                margin-left: 12px;
            }
        }

    }

    h2 {
        color: var(--grey_900);
    }

    span {
        color: var(--grey_500);
    }

    ul {
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 12px;

        margin-top: 32px;
    }

`;

export const Li = styled.li<ILi>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--beige_100);

    border-radius: 8px;
    border-left: 4px solid ${props => props.$border_color};

    padding: 20px 16px;
    overflow: hidden;
    
    h5 {
        width: fit-content;
        color: var(--grey_500);
        margin-right: 5px;
    }

    strong {
        color: var(--grey_900);
    }
`;
