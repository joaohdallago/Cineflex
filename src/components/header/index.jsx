import styled from 'styled-components';

export default function Header({ text, isSuccess }) {
    return (
        <Container {...{isSuccess}}>
            <span>
                {text}
            </span>
        </Container>
    )
}

const successStyle = 'width: 198px; font-weight: 700; color: #247A6B;'

const Container = styled.div`
    width: 100%;
    height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        text-align: center;

        color: #293845;

        ${({ isSuccess }) => (
            isSuccess && successStyle
        )}
    }
`;