import React, {useState} from "react"
import Layout from "../containers/Layout";

export default function Bmi(){
    const[name,setName] = useState()
    const[length, setLength] = useState()
    const[weight, setWeight] = useState()
    const sum =()=>{
        let name = document.getElementById('name').value
        console.log(`이름: ` + name)
        let length = document.getElementById('length').value
        console.log(`키:` + length)
        let weight  = document.getElementById(`weight`).value
        console.log(`몸무게:` + weight)
        setName(name)
        setLength(length)
        setWeight(weight)
        
    }
    return <Layout><h1>BMI</h1>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>name</b></label>
            <input id ="name" type =""/><br/>
            <label htmlFor=""><b>length</b></label>
            <input id="length" type = "" /><br/>
            <label htmlFor=""><b>weight</b></label>
            <input id="weight" type = ""/><br/>

            <button onClick={()=>{}}>이름</button>
            <button onClick={()=>{}}>키</button>
            <button onClick={()=>{}}>몸무게</button>
            <button onClick={()=>{sum()}}>결과 출력</button>
            <div>결과 :{name}, {length}, {weight}</div>
        </div>
    </Layout>
}
