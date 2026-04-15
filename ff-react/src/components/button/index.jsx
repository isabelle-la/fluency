import styled from '@emotion/styled'


const StyledButton = styled.button `
  border: solid 1px #444;
  background: #fff;
  border-radius: 4px;
  padding: 0 16px;
  min-height: 30px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: 200ms;
  &:hover {
    background: #000;
    color: #fff;
  }
`

export function Button(props) {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    )
}
