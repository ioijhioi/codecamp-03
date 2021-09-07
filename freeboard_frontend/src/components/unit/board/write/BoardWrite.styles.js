import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 1200px;
	/* height: 1847px; */
	border: 1px solid black;
	margin: 100px;
	padding-top: 80px;
	padding-bottom: 100px;
	padding-left: 102px;
	padding-right: 102px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	/* box-shadow: 0px 0px 10px gray; */
`;

export const Title = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 40px;
	font-weight: bold;
`;

export const WriterWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 40px;
`;

export const Writer = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	/* border: 1px solid #bdbdbd; */
`;

export const Password = styled.input`
	width: 486px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
	padding-bottom: 16px;
	font-size: 16px;
	font-weight: 500;
`;

export const InputWrapper = styled.div`
	padding-top: 40px;
`;

export const Subject = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	/* border: 1px solid #bdbdbd; */
`;

export const Contents = styled.textarea`
	width: 996px;
	height: 480px;
	padding-left: 16px;
	padding: 14px;
	border: 1px solid #bdbdbd;
`;

export const ZipcodeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Zipcode = styled.input`
	width: 77px;
	height: 52px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
	width: 124px;
	height: 52px;
	margin-left: 16px;
	background-color: black;
	/* cursor: pointer; */
	color: white;
`;

export const Address = styled.input`
	width: 996px;
	height: 52px;
	margin-top: 16px;
	padding-left: 16px;
	border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
	width: 996px;
	height: 52px;
	padding-left: 16px;
	/* border: 1px solid #bdbdbd; */
`;

export const ImageWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
`;

export const UploadButton = styled.button`
	width: 78px;
	height: 78px;
	/* background-color: #bdbdbd; */
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;
`;

export const OptionWrapper = styled.div`
	width: 996px;
	padding-top: 40px;
`;

export const RadioButton = styled.input`
	/* cursor: pointer; */
`;

export const RadioLabel = styled.label`
	margin-left: 8px;
	margin-right: 20px;
	/* font-weight: 500; */
	cursor: pointer;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 80px;
`;

export const CancelButton = styled.button`
	width: 179px;
	height: 52px;
	background-color: #bdbdbd;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer; //<--마우스를 대면 손가락 모양으로 바뀜//

	//마우스를 올렸을때//
	:hover {
		background-color: red;
	}
`;

export const SubmitButton = styled.button`
	width: 179px;
	height: 52px;
	background-color: #ffd600;
	border: none;
	font-size: 16px;
	font-weight: 500;
	margin-left: 12px;
	margin-right: 12px;
	cursor: pointer;
`;

export const ErrorMessage = styled.div`
	color: red;
`


//const [state, setState]=useState()//

//const [state, setState("apple")]=useState()// 이거하면

//--->state("apple") 스테이트에 애플이 저장된다.

//const [state, setState]=useState(pineapple)//

//const [totken, setTokne] = useState()//

//token은 실제 변수명, setToken은 변수를 바꿔주는 도구//