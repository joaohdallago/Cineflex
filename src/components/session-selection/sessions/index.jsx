import styled from 'styled-components'

import Days from "./days";

export default function Sessions({ movieData }) {

    return (
        <Container>  
            <Days {...{movieData}}/>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 23px 23px;
`