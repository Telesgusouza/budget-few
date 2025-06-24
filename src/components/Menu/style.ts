import styled, { css } from "styled-components";

interface IProps {
    show_menu: "hidden" | "show";
}

export const Menu = styled.div<IProps>`
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;

    padding-right: 5px;

    z-index: 99;

    menu {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        height: 100%;
        min-height: 100vh;

        overflow: hidden;    
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;

        background-color: var(--grey_900);

        transition: max-width .2s ease-in-out ;
    }
    
    .logo {
        padding: 40px 32px;
        cursor: pointer;

        transition: transform .15s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    @keyframes swing {
        0%, 100% { 
            transform: rotate(-10deg); 
        }
        
        50% { 
            transform: rotate(10deg); 
        }
    }

    ul {
        padding-top: 24px;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;

        max-width: calc(276px - 4px);

        border-left: 4px solid transparent;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 16px 32px 16px 28px;

        color: var(--grey_300);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        transition: all .1s solid;

        cursor: pointer;

        img {
            width: 24px;
            min-width: 24px;
            height: fit-content;
        }

        &:hover img {
            animation: swing .15s linear normal;
        }
    }

    @media (min-width: 1000px) {

        .selected {
            border-left: 4px solid var(--green);
            color: var(--grey_900);
        }

        ${props => props.show_menu === "hidden" ? css`
            max-width: 88px;
            align-items: center;
            
            menu {
                max-width: 88px;
                align-items: center;
            }

            .logo {
                margin: 0px auto;
                margin-left: 4px;
            }
            
            img {
                margin-right: 0px;
            }

            li {
                font-size: 0px;
            }

        ` : css`
            menu {
                max-width: 300px;
            }

            max-width: 300px;

            img {
                margin-right: 16px;
            }

            .selected {
                background-color: var(--beige_100);
            }

        `}
        
     
    }

    @media (max-width: 1000px) {

        position: fixed;
        bottom: 0;

        max-width: 100vw;
        max-height: 74px;
        min-height: 74px;

        padding: 0;

        menu {
            /* position: fixed; */
            position: relative;
            bottom: 0;

            padding: 8px 40px 0 40px;
            
            max-width: 100vw;
            max-height: 74px;
            min-height: fit-content;

            border-end-end-radius: 0;
            border-top-left-radius: 16px;

        }

        .logo {
            display: none;
        }

        .selected {
            background-color: var(--beige_100);
            border-bottom: 4px solid var(--green);
            color: var(--grey_900);
        }

        ul {
            width: 100%;
            max-height: 66px;
            min-height: 66px;

            padding: 0;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        li {
            padding: 0px 8px;
            min-width: 104px;
            min-height: var(66px - 4px);
            
            flex-direction: column;
            justify-content: center;
            align-items: center;

            border-end-end-radius: 0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            border-left: 0 solid transparent;
            border-bottom: 4px solid transparent;
            font-size: 12px;

            img {
                margin: 0;
            }

        }

    } 

    @media (max-width: 630px) {
        max-height: 52px;
        min-height: 52px;

        menu {
            max-height: 52px;
            padding: 8px 10px 0 10px;
        }
        
        ul {
            height: 40px;
            min-height: 44px;
            max-height: 44px;
        }

        li {
            font-size: 0;
            max-width: 68px;
            min-width: 68px;
            min-height: 44px;
            max-height: 44px;
            padding: 0;

        }
    }

`;

// export const Menu = styled.menu<IProps>`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     width: 100%;
//     height: 100%;
//     min-height: 100vh;

//     overflow: hidden;    
//     border-top-right-radius: 16px;
//     border-bottom-right-radius: 16px;

//     background-color: var(--grey_900);

//     transition: max-width .2s ease-in-out ;



//     .logo {
//         padding: 40px 32px;
//         cursor: pointer;

//         transition: transform .15s ease-in-out;

//         &:hover {
//             transform: scale(1.05);
//         }
//     }

//     @keyframes swing {
//         0%, 100% { 
//             transform: rotate(-10deg); 
//         }

//         50% { 
//             transform: rotate(10deg); 
//         }
//     }

//     ul {
//         padding-top: 24px;
//     }

//     li {
//         display: flex;
//         flex-direction: row;
//         align-items: center;

//         max-width: calc(276px - 4px);

//         border-left: 4px solid transparent;
//         border-top-right-radius: 12px;
//         border-bottom-right-radius: 12px;
//         padding: 16px 32px 16px 28px;

//         color: var(--grey_300);
//         white-space: nowrap;
//         overflow: hidden;
//         text-overflow: ellipsis;

//         transition: all .1s solid;

//         cursor: pointer;

//         img {
//             width: 24px;
//             min-width: 24px;
//             height: fit-content;
//         }

//         &:hover img {
//             animation: swing .15s linear normal;
//         }
//     }

//     @media (min-width: 1000px) {

//         .selected {
//             border-left: 4px solid var(--green);
//             color: var(--grey_900);
//         }

//         ${props => props.show_menu === "hidden" ? css`
//             max-width: 88px;
//             align-items: center;

//             .logo {
//                 margin: 0px auto;
//                 margin-left: 4px;
//             }

//             img {
//                 margin-right: 0px;
//             }

//             li {
//                 font-size: 0px;
//             }

//         ` : css`
//             max-width: 300px;

//             img {
//                 margin-right: 16px;
//             }

//             .selected {
//                 background-color: var(--beige_100);
//             }

//         `}

//     }

//     @media (max-width: 1000px) {

//         position: fixed;
//         bottom: 0;

//         padding: 8px 40px 0 40px;

//         max-width: 100vw;
//         max-height: 74px;
//         min-height: fit-content;

//         border-end-end-radius: 0;
//         border-top-left-radius: 16px;

//         .logo {
//             display: none;
//         }

//         .selected {
//             background-color: var(--beige_100);
//             border-bottom: 4px solid var(--green);
//             color: var(--grey_900);
//         }

//         ul {
//             width: 100%;
//             max-height: 66px;
//             min-height: 66px;

//             padding: 0;

//             display: flex;
//             flex-direction: row;
//             justify-content: space-between;
//         }

//         li {
//             padding: 0px 8px;
//             min-width: 104px;
//             min-height: var(66px - 4px);

//             flex-direction: column;
//             justify-content: center;
//             align-items: center;

//             border-end-end-radius: 0;
//             border-top-left-radius: 8px;
//             border-top-right-radius: 8px;

//             border-left: 0 solid transparent;
//             border-bottom: 4px solid transparent;
//             font-size: 12px;

//             img {
//                 margin: 0;
//             }

//         }

//     } 

//     @media (max-width: 630px) {
//         max-height: 52px;
//         padding: 8px 10px 0 10px;

//         ul {
//             height: 40px;
//             min-height: 44px;
//             max-height: 44px;
//         }

//         li {
//             font-size: 0;
//             max-width: 68px;
//             min-width: 68px;
//             min-height: 44px;
//             max-height: 44px;
//             padding: 0;

//         }
//     }

// `;

export const MinimizeMenu = styled.div<IProps>`
    display: flex;
    flex-direction: row;

    align-items: center;
    
    padding: 16px 32px;
    margin: 10px 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
        min-width: 24px;
        height: fit-content;
        margin-right: 16px;

        animation: seta .8s ease-in-out;
        animation-iteration-count: 3;

        transition: transform .15s ease-out;

        ${props => props.show_menu === "hidden" && css`
            margin-right: 0;
            rotate: 180deg;
        `}
    }

    strong {
        color: var(--grey_100);
    }

    &:hover img {

        animation: seta .8s normal;
        animation-iteration-count: 1;
        transform: translateX(-3px);
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;
