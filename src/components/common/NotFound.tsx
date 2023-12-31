import { FaJediOrder } from 'react-icons/fa'
import styled from 'styled-components'

export const NotFound = () => {
    return (
        <NotFoundWrapper>
            <IconContainer>
                <div>NO DATA IN THE</div>
                <FaJediOrder size={48} />
                <div>JEDI ARCHIVES</div>
            </IconContainer>
        </NotFoundWrapper>
    )
}

const NotFoundWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-items: center;
  align-items: center;
  background-color: var(--colors-bg);
  color: var(--color-text);
  height: calc(100vh - 350px);
`

const IconContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 48px auto;
  align-items: center;
`
