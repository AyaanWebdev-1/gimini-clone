
import './Main.css'
import { assests } from '../../assets/assets'
import axios from 'axios';
import { useState } from 'react';

function Main() {
  const [input,setInput]=useState("")
  const[loading,setLoading]=useState(true)
  const [result,setResult]=useState("")
  const[question,setQuestion]=useState("")
  const[newResponse,setNewResponse]=useState("");
   const[newResponse2,setNewResponse2]=useState("");
   let [newResponceArray,setNewResponseArray]=useState("")
   const[mainResult,setMainResult]=useState("")
  
  const delayPara=(index,nextWord)=>{
      setTimeout(()=>{
           setMainResult(prev=>prev+nextWord);
           console.log(mainResult);
      },75*index);
  }
  
  async function generateAnswer(){
    setLoading(true);
    setQuestion(input);
    setResult("loading..")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBcv571XMqSPQNsyaT5W9-DMJ0cCueT5GU",
      method:"post",
      data:
      { contents: [{
        parts:[{text:input}],
        }],
       },

    })
    
    setResult(response.data.candidates[0].content.parts[0].text);
    let responceArray=response.data.candidates[0].content.parts[0].text.split("**");
    console.log(responceArray);
    let newResponse;
    for(let i=0;i<responceArray.length ;i++){
         if(i===0||i%2 !==1){
          setNewResponse(newResponse+=responceArray[i])
         }
         else{
          setNewResponse(newResponse +="<b>"+responceArray[i]+"</b>")
         }
         setNewResponse2(newResponse.split("*").join("</br>"));
         setNewResponseArray(newResponceArray+=newResponse2.split(" "));
         console.log(newResponceArray);
    for(let i=0;i<newResponceArray.length ;i++){
      const nextWord=newResponceArray[i];
      delayPara(i,nextWord+" ")
    }

    }
    
    console.log(newResponse2);
    
    
    setLoading(false)
   
   
    setInput("");
  }
  return (
    <div className='main'>
        <div className="nav">
          <p>Gimini</p>
          <img src={assests.user_icon} alt="" />
        </div>
      <div className="main-container">
        {!result?
        <>
        <div className="greet">
          <p><span>Hello Andro</span></p>
          <p>How Can I Help You Today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi?</p>
            <img src={assests.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi?</p>
            <img src={assests.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi?</p>
            <img src={assests.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, modi?</p>
            <img src={assests.code_icon} alt="" />
          </div>
        </div>
        
        </>
        
        :<div className='result'>
          <div className="result-title">
            <img src={assests.user_icon} alt="" />
            <p>{question}</p>
          </div>
          <div className="result-data">
            <img src={assests.gimini_icon} alt="" />
            {loading?
            <div className="loader">
             <hr />
             <hr />
             <hr />
            </div>
            :  <p dangerouslySetInnerHTML={{__html:newResponse2}}></p>
            
            }
          </div>
          </div>}
        
        <div className="main-bottom">
          <div className="search-box">
            <input type="text"  onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter the prompt' />
            <div>
              <img src={assests.gallery_icon} alt="" />
              <img src={assests.mic_icon} alt="" />
              <button className='btn' onClick={generateAnswer}> <img src={assests.send_icon} alt="" /></button>
            </div>
          </div>
          <p className='bottom-info'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vitae atque, facilis cupiditate illum dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main
