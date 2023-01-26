import { useEffect, useState } from "react";
import "~/styles/Form.css";

type Data = {
  id: number
  name: string
  title: string
  content: string
  published: boolean
}

function App() {
  const [memos, setMemos] = useState<Data[]>([]);
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const API_ENDPOINT : String = import.meta.env.VITE_API_ENDPOINT;

  useEffect(() => {
    getMemos();
  }, []);

  const getMemos = async () => {
    const res = await fetch(API_ENDPOINT + "users", {
      mode: 'cors'
    });
    const data: Data[] = await res.json();
    setMemos(data);
  }


  const postMemo = async () => {
    const data = {
      name: name,
      title: title,
      content: content,
    };
    const param = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(API_ENDPOINT + "users", param)
      .then((res) => {
        return (res.json());
      })
      .then((json) => {
        console.log(json);
        getMemos();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const eraseMemo = async (id: Number) => {
    const param = {
      method: "DELETE"
    };
    await fetch(API_ENDPOINT + "users/" + id, param)
      .then((res) => {
        return (res.json());
      })
      .then((json) => {
        console.log(json);
        getMemos();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  function fillContent(): boolean {
    return (Boolean)(name.length && title.length && content.length);
  }


  return (
    <div>
      <div className='memo_form'>

        <h1 className='head'>Simple Memo</h1>
        <div className='wrapper memo_wrapper'>
          {memos.map((memo) => (
            <div className='memo' key={memo.id}>
              <div>

                <div className='memo_head'>
                  <h2>{memo.id} : {memo.title}</h2>
                  <button onClick={(e) => { eraseMemo(memo.id) }} className="button w-auto p-3">
                    削除
                  </button>
                </div>

                <p className='content'> {memo.content} </p>
                <div> User Name : {memo.name} </div>
              </div>
            </div>
          ))}
        </div>


        <div className='wrapper'>

          <h2>memo追加フォーム</h2>
          <button
            className={
              fillContent()
                ? "button"
                : "button ng"
            }
            disabled={!fillContent()}
            onClick={(e) => { postMemo() }}
          >
            memo追加
          </button>

          <div>
            <label htmlFor="name">名前</label>
            <input
              value={name}
              className='form'
              placeholder="NAME"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label htmlFor="title">題名</label>
            <input
              value={title}
              className='form'
              placeholder="TITLE"
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <label htmlFor="content">内容</label>
            <textarea
              rows={5}
              value={content}
              className='form'
              placeholder="CONTENT"
              onChange={(e) => setContent(e.currentTarget.value)}
            >
            </textarea>
          </div>

        </div>


      </div>
    </div>
  )
}

export default App