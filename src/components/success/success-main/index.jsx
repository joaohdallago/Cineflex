import styled from "styled-components"

import BackHomeButton from "./back-home-button"

export default function SuccessMain({ purchaseDataState }) {
    const [purchaseData] = purchaseDataState
    const { bookSeatData, seatSelectionData, selectedNames } = purchaseData

    const treatedSelectedNames = selectedNames.filter((name, index) => {
        return selectedNames.indexOf(name) === index;
    }).sort();

    return(
        <Container>
            <article>
                <h2>Filme e sessão</h2>
                <div>
                    <span>
                        {seatSelectionData.movie.title}
                    </span>
                    <span>
                        {seatSelectionData.day.date} {seatSelectionData.name}
                    </span>
                </div>
            </article>

            <article>
                <h2>Ingressos</h2>
                <div>
                    {treatedSelectedNames.map(selectedName => <span>Assento {selectedName}</span>)}
                </div>
            </article>

            <article>
                <h2>Comprador</h2>
                <div>
                    <span>
                        {'Nome: ' + bookSeatData.name}
                    </span>
                    <span>
                        {'CPF: '+ bookSeatData.cpf}
                    </span>
                </div>
            </article>

            <BackHomeButton />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    padding: 0 29px;

    article {
        display: flex;
        flex-direction: column;

        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
        h2 {
            font-size: 24px;
        }

        div {
            display: flex;
            flex-direction: column;

            span {                
                font-size: 22px;
            }
        }
    }
`;