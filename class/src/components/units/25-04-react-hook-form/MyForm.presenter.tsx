// import { MyButton} from './MyForm.styles'
import  Button01 from '../../commons/buttons/buttons01/Button01'
import Input01 from '../../commons/inputs/input01/Input01'

export default function MyFormUI (props){

    return(
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>    
            <div>리액트 훅 폼 연습!</div>
            이메일:<Input01 type="text" register={props.register("myEmail")}/>
            <div>{props.formState.errors.myEmail?.message}</div>
            
            비밀번호:<Input01 type="password" register={props.register("myPassword")}/>
            <div>{props.formState.errors.myPassword?.message}</div>
            
            <Button01 
                name="로그인하기"
                type="submit" 
                isValid={props.formState.isValid}
            />
               
            
            {/* <button type="reset">초기화하기</button> */}
        </form>

    )
}
