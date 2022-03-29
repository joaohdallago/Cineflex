import styled from "styled-components"

export default function TextInputs({ customerDataState }) {
    const [customerData, setCustomerData] = customerDataState;

    return (
        <Container>
            <div>
                <span>Nome do comprador:</span>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    onChange={e => setCustomerData({...customerData, name: e.target.value})}
                    value={customerData.name}
                />
            </div>

            <div>
                <span>CPF do comprador:</span>
                <input
                    type="text"
                    placeholder="Digite seu CPF..."
                    onChange={e => setCustomerData({...customerData, cpf: e.target.value})}
                    value={customerData.cpf}
                />
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    div {
        width: 323px;

        display: flex;
        flex-direction: column;

        span {
            font-size: 18px;

            color: #293845;
        }

        input {
            width: 327px;
            height: 51px;

            border: 1px solid #D5D5D5;
            border-radius: 3px;

            font-size: 18px;
            text-indent: 18px;

            ::placeholder {
                font-size: 18px;
                font-style: italic;

                color: #AFAFAF;
            }
        }
    }
`;


