import { Title, MyButton} from './ProductWrite.styles'

export default function ProductWriteUI(props){
    return(
        <>
            <Title >{props.isEdit ? "수정 페이지" : "등록 페이지"}</Title>
            판매자: <input type="text" onChange={props.onChangeMySeller} /><br />
            상품명: <input type="text" onChange={props.onChangeMyName} /><br />
            상품상세: <input type="text" onChange={props.onChangeMyDetail} /><br />
            상품가격: <input type="text" onChange={props.onChangeMyPrice}/><br />
            {!props.isEdit &&(<MyButton onClick={props.onClickSubmit}>상품등록하기!!</MyButton>)}
            {props.isEdit &&(<MyButton onClick={props.onClickEdit} >수정하기</MyButton>)}
        </>

    )


}