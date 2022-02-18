import React, { useState } from "react";
import Layout from "../containers/Layout";


export default function Calc(){
    const[num1, setNum1] = useState()
    const[num2, setNum2] = useState()
    const[opcode, setOpcode] = useState("")
    const[result, setResult] = useState(0)
    const sum =()=>{
        return setResult(Number(num1) + Number(num2))
    }
    return <Layout><h1>계산기</h1>

        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor="">
                <b>num1</b>
            </label><br/>
            <input id ="num1" type="" /><br/>

            <label htmlFor="">
                <select name="" id ="">
                    <option value = "">+</option>
                    <option value = "">-</option>
                    <option value = "">*</option>
                    <option value = "">/</option>
                    <option value = "">%</option>
                    </select>
                <b>연산자</b>
            </label><br/>
            <input type="text" /><br/>

            <label htmlFor="">
                <b>num2</b>
            </label><br/>
            <input id ="num2" type="" /><br/>

            <button onClick={()=>{setNum1(document.getElementById('num1').value)}}>숫자1 결정</button>
            <button onClick={()=>{setNum2(document.getElementById('num2').value)}}>숫자2 결정</button>
            <button onClick={()=>{sum()}}>더하기 실행</button>
            <div>결과: {num1} + {num2} = {result} </div>
            <button>계산</button><br/>
        </div>
    
    </Layout>
    
}
