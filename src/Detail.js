import React from "react";
import styled from "styled-components";
import { useHistory,useParams } from "react-router-dom";
import './Week.js';


const Detail = (props) =>{
    const history = useHistory();
    const params = useParams();
    const [rate, setRate] = React.useState(0);


    return ( 
        <DetailBox>
                <Dtitle>
                 {params.id}요일   평점 남기기
                </Dtitle>
                    <Dbox>
                    {Array.from({ length: 5 }, (item, idx) => {
                      return (
                        <div
                        key={idx}
                        onClick={() => { setRate(idx + 1);
                        }}
                        style={{
                        width: "40px",
                        height: "40px",
                        margin: "5px",
                        marginTop: "20px",                   
                        backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                        }}
                    ></div>
                    );
                    })}
                    </Dbox>
                    
        <GoBack onClick={()=>{
            history.push(`/`);}}> 
                ✔ 평점 체크 ✔
            </GoBack>
        
        </DetailBox>
            
        )

    }



const DetailBox =styled.div`
max-width: 320px;
min-height: 40vh;
background-color: #fff;
padding: 16px;
margin: 40px auto;
border-radius: 5px;
border: 1px solid #ddd;
`
const Dtitle = styled.h3`
color: "#fff";
fontWeight: "900";
background: "orange";
padding: "0.2rem";
borderRadius: "5px";
display: flex;
justify-content: center;
`
const Dbox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const GoBack = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
margin-left: 120px;
`  





export default Detail;
