import React, {useState} from "react";
import Layout from "../containers/Layout";

export default function Grade  ()  {
    const[kor, setKor] = useState(0)
    const[eng, setEng] = useState(0)
    const[math, setMath] = useState(0)
    const[total, setTotal] = useState(0)
    const[avg, setAvg] = useState(0)
    const sum =()=>{
        let kor = document.getElementById('kor').value
        console.log(`국어: ` + kor)
        let eng = document.getElementById('eng').value
        console.log(`영어: ` + eng)
        let math = document.getElementById('math').value
        console.log(`수학: ` + math)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setTotal(Number(kor) + Number(eng) + Number(math))
        console.log(`총점: ` + total)
    }
    return<Layout><h1>성적표</h1>
    
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>kor</b></label><br />
            <input id = "kor" type =""/><br/>
            <label htmlFor=""><b>eng</b></label><br />
            <input id = "eng" type =""/><br/>
            <label htmlFor=""><b>math</b></label><br />
            <input id = "math" type =""/><br/>
            <label htmlFor=""><b>total</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>avg</b></label><br />
            <input type="text" /><br />

        
            <button onClick={()=>{sum()}}>총점 구하기</button>
            <div>총점: {kor} + {math} +{eng} = {total}</div>
        </div>
    
    </Layout>

}
