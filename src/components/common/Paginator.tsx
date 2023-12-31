import { MouseEvent } from 'react'
import styled from 'styled-components'

import { PaginatorT } from '../../types/types'

export const Paginator = ({ next, previous, page, setPage }: PaginatorT) => {
    const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const isNextButton = event.currentTarget.innerText === 'NEXT'
        const isPreviousButton = event.currentTarget.innerText === 'PREV'

        if (isNextButton && next) {
            setPage((prevPage) => prevPage + 1)
        }
        if (isPreviousButton && previous) {
            setPage((prevPage) => prevPage - 1)
        }
    }

    return (
        <PaginatorContainer>
            <button onClick={onHandleClick} disabled={!previous}>
                PREV
            </button>
            <div>PAGE {page}</div>
            <button onClick={onHandleClick} disabled={!next}>
                NEXT
            </button>
        </PaginatorContainer>
    )
}

const PaginatorContainer = styled.div`
  display: grid;
  height: 32px;
  grid-template-rows: 1fr;
  grid-template-columns: 25% 50% 25%;

  & div {
    display: grid;
    align-items: center;
    border: 1px solid grey;
    justify-items: center;
  }

  & button {
    color: var(--colors-text);
    padding: 0 0.5rem;
    border: 1px solid grey;
    background: transparent;
    cursor: pointer;
  }

  & button:nth-child(1) {
    border-radius: 10px 0 0 10px;
    border-right: none;
  }

  & button:nth-child(3) {
    border-radius: 0 10px 10px 0;
    border-left: none;
  }

  & button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: var(--fs-sm);
  }
`
