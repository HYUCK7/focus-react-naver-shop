import React, { useState } from "react";
import Layout from "../containers/Layout";


export default function Calc(){
    const[num1, setNum1] = useState()
    const[num2, setNum2] = useState()
    const[opcode, setOpcode] = useState("")
    const[result, setResult] = useState(0)
    const sum =()=>{
        let num1 = document.getElementById('num1').value
        console.log(`숫자 1:` +num1)
        let num2 = document.getElementById('num2').value
        console.log(`숫자 2:` +num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        console.log(`결과:` +result)
    }
    return <Layout><h1>계산기</h1>
        <form action="">
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

            <button onClick={()=>{sum()}}>더하기 실행</button>
            
            <div>결과: </div>
            <button>계산</button><br/>
            
        </div>
        </form>
    </Layout>
    
}
