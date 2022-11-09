import { useState } from 'react'

type Datas = {
  id: number
  name: string
  title: string
  content: string
  published: boolean
}

function App() {
  const [memos,setMemos] = useState<Datas[]>([]);

  const getUser = async () => {
    const res = await fetch("http://localhost:3000/users",{
      mode: 'cors'
    });
    const data:Datas[] = await res.json();
    console.log(data);
    setMemos(data);
  }
  
  return (
    <div>
      <h1>Simple Memo</h1>
      <button onClick={getUser}>get memo</button>
      {memos.map((memo) => (
        <div key={memo.id}>
          <h1>{memo.id} : {memo.title}</h1>
          <p> {memo.content} </p>
        </div>
      ))}
    </div>
  )
}

export default App