import styled from "styled-components";

// interface IProps {
//     // disabled: "disabled" | "";
// }

export const Button = styled.button` 
    padding: 16px;
    border: none;
    border-radius: 8px;

    background-color: var(--grey_900);
    color: var(--white);
   
    &:disabled {
        cursor: not-allowed;
        /* background-color: var(--grey_500); */
        background-color: #444446;
    }
`;
