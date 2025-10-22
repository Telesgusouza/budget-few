import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;

    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        padding: 20px 12px;
    }
`;

export const BackPage = styled.div`
    width: 100%;
    max-width: 700px;
    margin-bottom: 26px;

    span {
        padding: 0 4px;
        color: var(--grey_500);
        
        cursor: pointer;

        position: relative;

        &::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -2px;
            width: 0;
            height: 2px;

            background-color: var(--grey_500);

            transition: all .2s ease-in-out;
        }

        &:hover::before {
            left: 0%;
            width: 100%;
        }
    }
`;

export const Content = styled.section`
    width: 100%;
    max-width: 700px;

    h1 {
        color: var(--grey_900);
    }

    span {
        color: var(--grey_700);
        text-align: end;
        margin-left: 8px;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    p {
        color: var(--grey_700);
        margin-bottom: 20px;
    }

    .container_btns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;

        margin-top: 30px;
        
        grid-template-rows: auto auto;

        .edit-btn {
            grid-row: 1;
            grid-column: 1;
        }

        .del-btn {
            grid-row: 1;
            grid-column: 2;
        }

        .add-btn {
            grid-row: 2;
            grid-column: 1 / -1;
        }



    }

    .right {
            float: right;
        }

    button {
        width: 100%;
    }

    .input_accordion {
        display: flex;
        flex-direction: row;
        justify-content: end;

        margin-top: 15px;
    }

    @media (max-width: 500px) {
        .container_btns {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
        
            .edit-btn { 
                grid-row: 1;
                grid-column: 1;
            }

            .del-btn { 
                grid-row: 3;
                grid-column: 1;
            }

            .add-btn {
                grid-row: 2;
                grid-column: 1;
            }
        }
    }
`;

export const ContainerGraphic = styled.div`
    width: 100%;
    height: 150px;

    margin: 20px 0;

    position: relative;

`;

export const ContentError = styled.div`
    width: 100%;
    max-width: 600px;

    p {
        margin-top: 10px;
    }
`;
