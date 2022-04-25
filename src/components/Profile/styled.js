import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    div {
        margin: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: flex-start;
    a {
        text-decoration: none;
        color: blue;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: red;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
    }

    h4 {
        font-size: 16px;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    border: thin solid black;
    margin-right: 100px;
    width: 200px;
    height: 200px;
`;