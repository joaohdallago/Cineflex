import axios from "axios";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function BookSeatButton({ bookSeatData, seatSelectionData, purchaseDataState }) {
    const navigate = useNavigate();
    
    const [ purchaseData, setPurchaseData ] = purchaseDataState;
    
    function bookSeat() {
        const bookSeatPostURL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many';
        
        const promise = axios.post(bookSeatPostURL, bookSeatData);
    
        promise.then(() => {
            setPurchaseData({
                bookSeatData,
                seatSelectionData
            })

            console.log(purchaseData)

            navigate('/sucesso');
        })
    
        promise.catch(err => console.log(err))
    }

    return (
        <Container onClick={bookSeat}>
            Reservar assento(s)
        </Container>
    )
}



const Container = styled.div`
    width: 225px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;

    font-size: 18px;
    letter-spacing: 0.04em;

    color: #fff;
    background-color: #E8833A;
`;