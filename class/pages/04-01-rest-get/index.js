import axios from 'axios'

export default function RestGetPageparams() {

    async function zzz(){
        const result = await axios.get('https://koreanjson.com/posts/1')
        console.log(result)
    }
    
    return (
        <button onClick={zzz}>REST-API 요청하기!!</button>
    )
}