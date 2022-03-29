import styled from 'styled-components';

export default function Seat({ id, name, isAvailable, selectedIdsState}) { 
    const [selectedIds, setSelectedIds] = selectedIdsState;
    const isSelected = selectedIds.includes(id)
    
    return (
        <Container
            {...{isAvailable, isSelected}}
            onClick={() => selectSeat(id, isAvailable, isSelected, selectedIds, setSelectedIds)}
        >
            {name}
        </Container>
    )
}

function selectSeat(id, isAvailable, isSelected, selectedIds, setSelectedIds) {
    if (!isAvailable) {
        alert('Esse assento não está disponível')
        return
    }

    if (isSelected) {
        setSelectedIds([...selectedIds.filter(item => item !== id)])
        return
    }

    setSelectedIds([...selectedIds, id])
}

const selectedStyle = 'border: 1px solid #1AAE9E; background-color: #8DD7CF;'
const availableStyle = 'border: 1px solid #7B8B99; background-color: #C3CFD9;;'
const unavailableStyle = 'border: 1px solid #F7C52B; background-color: #FBE192;'

const Container = styled.div`
    width: 26px;
    height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;

    font-size: 11px;
    letter-spacing: 0.04em;

    cursor: pointer;

    ${({isAvailable, isSelected}) => (
            isAvailable?
            (isSelected? selectedStyle : availableStyle)
            :
            unavailableStyle
        )
    };
`;