import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    font-size: 1.4rem;
    background: var(--mainDark);
    border: 0.05rem solid var(--logoBlue);
    color: var(--logoBlue);
    border-radius: 0.5rem;
    box-shadow: 0 0 1px 0.3px var(--boxShadow);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover:enabled{
        background: var(--hoverDark);
        border-color: var(--hoverDark);
    }
`