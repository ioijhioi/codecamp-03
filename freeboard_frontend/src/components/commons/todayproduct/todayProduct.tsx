// import styled from '@emotion/styled';
// import { useEffect, useState } from 'react';

//   export const TodayBox = styled.div`
//     width: 196px;
//     position: sticky;
//     bottom: 50px;
//     left: 3000px;
//     box-sizing: border-box;
//    `

// export default function BasketPage() {
//     const [ basketItems, setBasketItems] = useState([])
    
//     useEffect (() => {
//       const items = JSON.parse(localStorage.getItem("baskets")) || [];
//       setBasketItems(items);
//     }, [])
  
   
  
    
   
  
    
  
    
  
//     return (
//       <TodayBox>
//         detail
//         <Title>오늘 본 상품</Title>
//         {basketItems?.map((el: any) => (
//           <RecentBox key={el._id}>
//             <LikeWrapper>
//               <Heart src="/images/heart.png" />
//               <LikeCount>{el.pickedCount}</LikeCount>
//             </LikeWrapper>
//             <ProductWrapper>
//               <Photo></Photo>
//             </ProductWrapper>
//             <Name>{el.name}</Name>
//             <Subname>{el.remarks}</Subname>
//             <Price>{el.price}</Price>
//             <Tag>{el.tags}</Tag>
//           </RecentBox>
//         ))}
//       </TodayBox>
//     );
// }