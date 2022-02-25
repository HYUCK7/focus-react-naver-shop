import React, {useState} from "react"
import { memberBmi } from "../api";
import Layout from "../containers/Layout";

export default function Bmi(){
   const[inputs, setInputs] = useState({})
   const{name, weight, length} = inputs // object Destructing ->구조 분해 할당

   const handleChange =(e)=>{
       e.preventDefault()
       const {value, name} = e.target;
       setInputs({
           ...inputs, [name]: value
       })
    }
   /* const sum =()=>{
        let name = document.getElementById('name').value
        console.log(`이름: ` + name)
        let length = document.getElementById('length').value
        console.log(`키:` + length)
        let weight  = document.getElementById(`weight`).value
        console.log(`몸무게:` + weight)
        setName(name)
        setLength(length)
        setWeight(weight)
    }*/
    /* */
    const handleClick =(e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, length}
        console.log(`username: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then(res =>{
            alert(res.data)
        })
        .catch(err=> console.log(`에러발생 : ${err}`))
    }
    /*return <Layout>
        <form><h1>BMI</h1>
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
            <input type = "button" onClick ={handleClick} value ="BMI 체크"/><br/>
            <button onClick={()=>{sum()}}>결과 출력</button>
            <div>결과 :{name}, {length}, {weight}</div>
        </div>
        </form>
    </Layout>*/

    return<Layout>
        <form>
            <h1>BMI</h1>
            <div>
                <label><b>UserName</b></label>
                <input type = "text" name="name" onChange={handleChange}/><br/>
                <label><b>length</b></label>
                <input type = "text" name="length" onChange={handleChange}/><br/>
                <label><b>weight</b></label>
                <input type = "text" name="weight" onChange={handleChange}/><br/>
                <button onClick={handleClick}>BMI CHECK</button>
            </div>
        </form>
    </Layout>
}
