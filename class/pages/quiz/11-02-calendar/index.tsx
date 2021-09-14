
import {useState} from "react"
import {Calendar} from 'antd';
import styled from "@emotion/styled";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid white;
  border-radius: 2px;
`



export default function LibraryCalendar(){

  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }
  
  const [data, setData] = useState("");
  
  function onSelect(value) {
    setData(value.format("MM"));
  }
  return(
    <div >
      
      <MyCalendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
      <div>{data}</div>
    </div>

  );

}