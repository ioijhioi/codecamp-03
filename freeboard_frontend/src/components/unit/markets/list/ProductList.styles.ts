import styled from '@emotion/styled';


export const Wrapper = styled.div`
    width: 1200px;
    /* background-color: skyblue; */
    display:flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    padding-top: 80px;
    border-top: 1px solid  #bdbdbd;
`




export const BestProduct = styled.div`
    width: 282px;
    height: 391px;
    background-color: skyblue;
    margin-bottom: 50px;
`

export const ProductName = styled.div `
    width: 100%;
    height: 55px;
    /* background-color: blue; */
    display: flex;
    border-bottom: 1px solid #bdbdbd;
`



export const SellingProduct =styled.div`
`
export const SoldProduct = styled.div`
`

export const Row = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction:row;
    margin-top: 20px;
    
    border-bottom: 1px solid #bdbdbd;
    /* background-color: orange; */
`

export const Images = styled.div`
    width: 160px;
    height: 150px;
    background-color: gray;
    margin-bottom: 5px;
`

export const Product = styled.div`
    width: 100%;
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: red; */
`

export const Name = styled.span`
    font-size: 24px;
`
export const Remarks = styled.span`
    font-size: 16px;
`
export const Tags = styled.span`
    font-size: 16px;
    line-height: 24px;
`
export const SellerWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: row;
    /* background-color: gray; */
`
export const Seller = styled.span`
    font-size: 16px;
    text-align: right;
    /* background-color:green; */
`
export const PickedCount = styled.div`
    font-size: 16px;

`

export const ProductRight = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`

export const PriceIcon = styled.img`
    width: 18px;
    height: 18px;
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
