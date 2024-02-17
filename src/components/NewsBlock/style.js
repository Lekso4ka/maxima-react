import styled from "@emotion/styled";

export const NewsWrapperSt = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    width: 100%;
`

export const NewsCardSt = styled.div`
    display: grid;
    grid-template-rows: 120px auto;
    border-radius: 8px;
    overflow: hidden;
    transition-property: transform, box-shadow;
    transition-duration: 200ms;
    border: 1px solid silver;
    &:hover {
        box-shadow: 2px 2px 5px 0 deepskyblue;
        transform: scale(1.02);
    }
`

export const NewsImg = styled.div`
    background-image: ${({pic}) => `url(${pic})`};
    background-position: center;
    backgound-size: ${({format}) => format === "png" 
        ? "contain" 
        : format === "jpg" 
            ? "auto 100%"
            : "cover"
    }
    background-repeat: no-repeat;
`

export const CardContentSt = styled.div`
    padding: 20px;
    display: grid;
    gap: 16px;
    h3 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 20px;
        font-size: 16px;
    }
`