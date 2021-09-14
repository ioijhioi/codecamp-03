import { useState} from "react";
import { Rate} from "antd";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function LibarayStarPage(){
    const [value, setValue] = useState(3);

    const handleChange = (value) => {
        setValue(value);
        alert( value + "점")
    }

    return (
        <span>
            <Rate tooltips={desc} onChange={handleChange} value={value} /><br/>
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}

        </span>

    )


}