import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    height: 5000px;
    background-color: skyblue;
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.div`
    width: 175px;
    height: 42px;
    font-size: 30px;
    text-align: center;
`

export const BestProduct = styled.div `
    width: 282px;
    height: 391px;
    background-color: blue;
    display: flex;
`

export const Row = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction:row;
    margin-top: 20px;
    background-color: orange;
`

export const Images = styled.div`
    width: 160px;
    height: 160px;
    background-color: purple;
`

export const Product = styled.div`
    width: 100%;
    background-color: green;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: red;
`

export const Name = styled.span`

`
export const Remarks = styled.span`

`
export const Tags = styled.span`

`
export const SellerWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: row;
    background-color: gray;
`
export const Seller = styled.span`
    
    background-color:green;
`
export const PickedCount = styled.div`
    background-color: blue;
`

export const ProductRight = styled.div`
    width: 200px;
    display: flex;
`
export const Button = styled.button`
    width: 171px;
    height: 52px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f5f2fc;
    }
`;
