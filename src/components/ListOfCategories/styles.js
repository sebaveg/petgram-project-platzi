import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    max-width: 500px;
    margin: 0 auto;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0px;
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
