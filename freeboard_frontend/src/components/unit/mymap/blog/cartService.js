const cartService = () => {

    let arr = []
    let fn;
    
    
    const setFn = (func) =>{
        console.log("setFn..................................")
        fn = func
    }
   
    const append =(store) => {
        arr.push(store)
        console.log(arr)
        fn()
    }
 
   
    const remove = (store) => {
        arr = arr.filter(s => s.name !== store.name)
        fn()
    }

   
    const getAll = () => {
        return arr
    }

    return {append, remove, getAll, setFn}
}

export default cartService()


