import styled from 'styled-components';

export default function Footer({movieData}) {
    const { posterURL, title} = movieData;

    return (
        <Container>
            <ImgContainer>
                <img src={posterURL} alt={title} />
            </ImgContainer>

            <TextContainer>
                <span>{title}</span>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 117px;

    display: flex;
    align-items: center;
    gap: 14px;

    padding: 0 10px;
    border-top: 1px solid #9EADBA;

    background-color: #DFE6ED;
`;

const ImgContainer = styled.div`
    width: 64px;
    height: 89px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 2px;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    img {
        width: 48px;
        height: 72px;
    }
`;

const TextContainer = styled.div `
    font-size: 26px;

    color: #293845;
`;