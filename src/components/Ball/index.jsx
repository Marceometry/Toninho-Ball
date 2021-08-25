import { useBallContext } from '../../contexts/BallContext'
import styled from 'styled-components'

const StyledBall = styled.div`
    width: 35px;
    height: 35px;
    background: red;
    border-radius: 999px;
    cursor: grab;
    z-index: 5;
    position: absolute;
    left: 50%;
    top: 50%;
`

export function Ball() {
    const { ballRef, handleGrabBall } = useBallContext()

    return (
        <StyledBall ref={ballRef} onClick={handleGrabBall} />
    )
}