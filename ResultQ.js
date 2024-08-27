import React from 'react'
import Button from '@mui/material/Button';
import jsPDF from 'jspdf'
import { useNavigate } from 'react-router-dom';
function ResultQ() {
  // const handleResult=()=>{
  //   PageChange()
  // }
  let val = JSON.parse(localStorage.getItem('val'));
  let score=localStorage.getItem('score')
  const handleDownload=()=>{
    const doc=new jsPDF()
    doc.text(`Congratulations! ${val.Username}, your Score is ${score}/5`, 10, 10);
    doc.html(`<h3>Congratulations!</h3><h3>${val},Your score is ${score}</h3>`)
    doc.save(`${val.Username}.pdf`);
  }
  const handleResult=()=>{
    navigator('/RegQ')
  } 
  let navigator=useNavigate()
  return (
    <>
    <center><div style={{border:'2px solid black',width:'30%',marginTop:'13%'}}>
      <h3 style={{color:'green'}}>Congratulations!</h3><h3>{val.Username},Your score is {score}/5.</h3><br/>
      <table>
        <th><Button variant="contained" onClick={()=>handleDownload()}>Download PDF</Button><br/><br/></th>
        <th><Button type='submit' variant="contained" onClick={()=>handleResult()}>Home</Button></th>
      </table>
    </div></center>
    </>
  )
}
export default ResultQ
