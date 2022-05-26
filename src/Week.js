
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const Week = () => {
  const history = useHistory(); 
  let now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토", "일", "월", "화","수","목"];
  
  let [list] = React.useState([`${week[now.getDay()]}`, `${week[(now).getDay() + 1]}`, `${week[(now).getDay() + 2]}`, `${week[(now).getDay() + 3]}`, `${week[(now).getDay() + 4]}`, `${week[(now).getDay() + 5]}`, `${week[(now).getDay() + 6]}`]);
  
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
                                                     
  function RandomNum() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
        arr.push(getRandom(0, 5));
    }
    return (arr);
}

let RanArr = RandomNum();

function sum(RanArr) {
    let sumR = 0;
    for (let i = 0; i < 7; i++) {
        sumR += RanArr[i];
    }
    return (sumR);
}

let RanAvg = (sum(RanArr) / 7).toFixed(1);
let [avg, setAvg] = React.useState(RanAvg);



  return (
    <Container>
      <Title>내 일주일은? (☞ﾟヮﾟ)☞</Title>
    <Box>
        {list.map((num, index) => {
        
           
          return (
            <Line key={index}>
              <Day>
                {num}
              </Day>
              {Array.from({ length: 5 }, (item, idx) => {
                return (
              
                  <div
                    key={idx}
                    
                    style={{

                      width: "40px",
                      height: "40px",
                      margin: "5px",
                      marginTop: "20px",
                      borderRadius: "40px",                   
                      backgroundColor: idx <= RanArr[index] ? "yellow" : "#ccc"
                    }}
                  ></div>
                );
              })}
               <Gogo
                onClick={()=> {
                  history.push(`/detail/${num}`);
                }}>
                Go ▶️
                </Gogo>
            </Line>
        )})}
        <Avrge>
          주간 평점
        </Avrge>
                <AvrgeSum>
                  {avg}
                </AvrgeSum>
      <button onClick={()=>{
        setAvg(parseInt(0).toFixed(1));
      }}>
       ⌛0으로 수렴한다네.⌛
      </button>

    </Box>
    </Container>
  );
};
;
 
const Container = styled.div`
  max-width: 320px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 40px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

`

const Title = styled.h3`
 text-align: center;
 margin-top: 40px;

`


const Day = styled.p`

margin: 0 0.5rem 0 0; 
max-width: 16px;
font-size: 20px;
`
const Box = styled.div`
display: flex;
flex-direction:  column;
height: 100%;

`

const Line = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Gogo = styled.div`
margin-left: 5px;
cursor: pointer;
`

const Avrge = styled.h3`
Font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
`

const AvrgeSum = styled.h3`
 color: blue;
 display: flex;
justify-content: center;
align-items: center;
`
export default Week;