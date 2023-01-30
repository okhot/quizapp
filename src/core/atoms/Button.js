import styled from "styled-components"

const Buttons = styled.button`

`

export default function Button({children, onClick}) {
  return (
    <Buttons>
      <button onClick={onClick}>{children}</button>
    </Buttons>
  )
}
