import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[inputs, setInputs] = useState({})
    const[name, kor, eng, math] = inputs
    
    const handleChange=(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const gradeRequest = {name, kor, eng, math}
        alert(`result:${JSON.stringify(gradeRequest)}`)
    }

    return<Layout>
        <form>
            <h1>Grade</h1>
            <div>
                <label><b>name</b></label>
                <input type = "text" name = "name" onChange={handleChange}/><br/>
                <label><b>kor</b></label>
                <input type = "text" name = "kor" onChange={handleChange}/><br/>
                <label><b>math</b></label>
                <input type = "text" name = "math" onChange={handleChange}/><br/>
                <label><b>eng</b></label>
                <input type = "text" name = "eng" onChange={handleChange}/><br/>
                <button onClick={handleClick}>check</button>
            </div>
        </form>
    </Layout>
}