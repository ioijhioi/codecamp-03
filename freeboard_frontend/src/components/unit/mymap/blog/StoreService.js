const storeService = () => {
    
        const stores = [
            {name:'수정식당', lat:37.56972403551668, lng:126.98865910740813, cat:'한식'},
            {name:'스타벅스', lat:37.57059460731477, lng:126.9873582359673, cat:'디저트'},
            {name:'하나식당', lat:37.57060736285512, lng:126.98152174932186, cat:'한식'},
            {name:'할리스', lat:37.56978555453273, lng:126.98796875403214, cat:'디저트'},
            {name:'세븐스프링스', lat:37.568533939878826, lng:126.9871193086741, cat:'뷔페'},
        ]
   
        const getStores = () => {
            return stores
        }
  
        const getByCat = (str) => {
            if(!str){ 
                return stores
            }
         
            return stores.filter( store => store.cat === str)
        }
    
        return {getStores:getStores, getByCat:getByCat}
    }
    
    export default storeService()
    