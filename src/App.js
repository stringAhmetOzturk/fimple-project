
import { useState } from 'react';
import './App.css';

function App() {
  const [user,setUser]=useState("x")
  const [cell,setCell]=useState(Array(9).fill(""))
  const [winner,setWinner] = useState()
  const winnerDet = (cells) =>{
    let rules = {
      hor:[
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      ver:[
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],
      diag:[
        [0,4,8],
        [2,4,6]
      ]

    }
    for(let rule in rules){
      rules[rule].forEach(element => {
        if(cells[element[0]]===cells[element[1]] && cells[element[1]]===cells[element[2]] )
        {
          setWinner(cells[element[0]])
        }
      });
    }
  }
  const clickHandle = (id)=>{
    if(cell[id] == ''){
        var cells = [...cell]
        user==="x"?cells[id]=("x"):cells[id]=("o")
        user==="x"?setUser("o"):setUser("x")
        setCell(cells)
        winnerDet(cells)
      } 
   else alert("Dolu kutu")
  }
  const Cell = ({id})=>{
    return (<td onClick={()=>clickHandle(id)}>{cell[id]}</td>)
  }

  const restart =()=>{
    setWinner()
    setCell(Array(9).fill(""))
  }

 
  return (
    <div className="App">
      <div className='player'>sıra : {user}</div>
      <table>
       
        <tbody>
          <tr>
          <Cell id={0}/>
        <Cell id={1}/>
        <Cell id={2}/>
          </tr>
          <tr>
          <Cell id={3}/>
        <Cell id={4}/>
        <Cell id={5}/>
          </tr>
          <tr>
          <Cell id={6}/>
        <Cell id={7}/>
        <Cell id={8}/>
          </tr>
     

        </tbody>
      </table>
      {winner && (<div>
        <div>{winner} kazandı.</div>
        <button onClick={()=>restart()}>Yeniden Oyna</button>
        </div>)}
    </div>
  );
}

export default App;
