import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 10px;

    color: var(--grey_900);

    img {
        width: 25px;
        cursor: pointer;

        transition: all .12s ease-in-out;
        &:hover {
            transform: scale(1.15);
        }
    }

    li {
        height: fit-content;
        padding: 0px 7px;
        border: 1px solid var(--grey_900);
        border-radius: 3px;

        cursor: pointer;

        transition: all .2s ease-in-out;

        &:hover {
            background-color: var(--grey_900);
            color: var(--white);    
        }
    }

    span {
        cursor: default;
    }

    .pagination_icon_1 {
        rotate: 270deg;
    }

    .pagination_icon_2 {
        rotate: 90deg;
    }

    .select {
        background-color: var(--grey_900);
        color: var(--white);
    }

`;