import styled, { css } from "styled-components";

interface IProps {
    $show: "show" | "hidden";
}

interface IContent {
    $color: "red";
    $directionArrow: "down" | "up";
}

interface IBallColor {
    $color: string;
}

interface ILi {
    $alreadyUsed: "available" | "unavailable";
}

export const Container = styled.label<IProps>`
    display: flex;
    flex-direction: column;

    position: relative;

    span {
        margin-bottom: 4px;
        color: var(--grey_500);
    }

    ul {
        position: absolute;
        top: calc(100% + 10px);

        width: 100%;
        max-width: 496px;
        overflow-y: scroll;

        padding: 5px 20px;
        border-radius: 8px;

        background-color: var(--white);

        transition: all .14s ease;

        z-index: 20;
        
        ${props => props.$show === "show" 
        ? css`
            box-shadow: 0 0 10px rgba(50, 50, 50, .25);
            max-height: 250px;
            padding: 5px 20px;
        ` 
        : css`
            box-shadow: 0 0 0px rgba(50, 50, 50, .25);
            max-height: 0px;
            padding: 0;
        `}
    }
`;

export const Content = styled.div<IContent>`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px 15px;

    border: 1px solid var(--beige_500);
    border-radius: 8px;

    cursor: pointer;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    span {
        color: var(--grey_900);
    }

    img {
        margin-left: 15px;
        rotate: ${props => props.$directionArrow == "down" ? 180 : 0}deg;

        transition: rotate .2s ease;
    }
`;

export const Li = styled.li<ILi>`
    max-width: 100%;
    padding: 12px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow-x: hidden;

    ${props => props.$alreadyUsed === "available" 
    ? css`
        color: var(--grey_900);
        cursor: pointer; 
    `
    : css`
        opacity: .6;
        cursor: not-allowed;
    `
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--grey_100);
    }

    /* strong {
        flex-shrink: 0;            
        white-space: nowrap;       
        overflow: hidden;          
        text-overflow: ellipsis; 
    } */

    span {
        margin-left: 10px;
        white-space: nowrap;
    }
`;

export const BallColor = styled.div<IBallColor>`
    width: 16px;
    height: 16px;

    margin-right: 12px;

    border-radius: 50%;

    background-color: var(${props => props.$color});


`;
