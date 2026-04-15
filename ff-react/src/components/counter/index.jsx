import { useState } from "react"
import styled from '@emotion/styled'
import { Button } from "../button"

const CounterStyled = styled.div `
    padding: 16px;
    border-radius: 8px;
    background: #f1f1f1;
    h2 {
        margin: 0;
        margin-bottom: 16px;
    }
    button {
        margin-right: 8px;
    }
`

export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <CounterStyled>
            <h2 style={{color: count > 10 ? 'red' : 'black'}}>Contagem: {count}</h2>
            <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
            <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
        </CounterStyled>
    )
}