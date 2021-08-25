import { useBallContext } from '../../contexts/BallContext'
import toninhoSentado from '../../assets/toninho-sentado.png'
import toninhoCorrendo from '../../assets/toninho-correndo.png'
import styled from 'styled-components'

const StyledToninho = styled.img`
    transition: all 1s;
    position: absolute;
    left: 50px;
    top: 50px;
`

export function Toninho() {
    const { isBallBeingGrabbed, toninhoRef } = useBallContext()

    return (
        <StyledToninho
            src={isBallBeingGrabbed ? toninhoCorrendo : toninhoSentado}
            ref={toninhoRef}
            alt="Toninho"
        />
    )
}