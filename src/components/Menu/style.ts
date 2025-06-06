import styled from "styled-components";

export const Menu = styled.menu`
    background-color: var(--grey_900);

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    
    width: 100%;
    max-width: 300px;
    height: 100%;
    min-height: 100vh;

    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    @keyframes swing {
        0%, 100% { 
            transform: rotate(-10deg); 
        }
        
        50% { 
            transform: rotate(10deg); 
        }
    }

    .logo {
        padding: 40px 32px;
        cursor: pointer;

        transition: transform .15s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    ul {
        padding-top: 24px;
    }

    li {
        max-width: calc(276px - 4px);

        display: flex;
        flex-direction: row;
        align-items: center;

        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 16px 32px;

        color: var(--grey_300);

        border-left: 4px solid transparent;

        transition: all .1s solid;

        cursor: pointer;

        img {
            width: 24px;
            height: fit-content;

            margin-right: 16px;


        }

        &:hover img {
            animation: swing .15s linear normal;
        }

    }

    .selected {
        background-color: var(--beige_100);
        border-left: 4px solid var(--green);
        color: var(--grey_900);
    }
`;

export const MinimizeMenu = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    
    padding: 16px 32px;
    margin: 10px 0;

    cursor: pointer;

    @keyframes seta {
        0%, 100% { 
            transform: translateX(-0px); 
        }

        50% { 
            transform: translateX(-5px); 
        }
    }

    img {
        width: 24px;
        height: fit-content;
        margin-right: 16px;

        animation: seta .8s ease-in-out;
        animation-iteration-count: 3;

        transition: transform .15s ease-out;
    }

    strong {
        color: var(--grey_100);
    }

    &:hover img {

        /* animation-play-state: paused; */

        animation: seta .8s normal;
        animation-iteration-count: 1;
        transform: translateX(-3px);
    }
`;
