import './App.css'
import {Routes,Route,Link,useNavigate} from "react-router-dom"
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Notfount from './pages/Notfound'
import Edit from './pages/Edit'
import { useReducer, useRef, createContext, useEffect, useState} from 'react'

const mockData = [
  {
    id:1,
    createdDate:new Date("2025-07-01").getTime(),
    emotionId : 3,
    content : "React를 열심히 공부했다. 많이 어렵지만 그래도 재밌다..!"
  },
  {
    id:2,
    createdDate:new Date("2025-07-02").getTime(),
    emotionId : 5,
    content : "너무 덥다.. 화난다 그냥.."
  },
  {
    id:3,
    createdDate:new Date("2025-06-16").getTime(),
    emotionId : 1,
    content : "오늘 드디어 1학기 종강했다. 과제가 몇 개 남았지만 그래도 행복하다."
  }
]


function reducer(state, action) {
  let nextState;
  switch(action.type) {
    case "INIT" :
      return action.data;
    case "CREATE" : 
      {
        nextState= [action.data, ...state];
        break;
      }
    case "UPDATE" : 
      {
        nextState = state.map((item)=>String(item.id)
      === String(action.data.id)
      ? action.data : item)
      break;
      } 

    case "DELETE" :
      {
        nextState= state.filter((item)=>String(item.id) 
      !== String(action.id));
      }

    default :
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data,dispatch] = useReducer(reducer,[mockData]);
  const idRef = useRef(4);

  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
     if (!storedData) {
    dispatch({ type: "INIT", data: mockData }); 
    setIsLoading(false);
    return;
  }
    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)) {
      setIsLoading(false);
      return; 
    }
    let maxId=0;

    parsedData.forEach((item)=>{
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current=maxId + 1;
    console.log(maxId);

    dispatch({
      type : "INIT",
      data : parsedData,
    });
    setIsLoading(false);
  },[]);

  //새로운 일기 추가
  const onCreate=(createdDate, emotionId, content)=>{
    dispatch({
      type : "CREATE",
      data : {
        id : idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  }

  //기존 일기 수정
  const onUpdate=(id, createdDate, emotionId, content)=>{
    dispatch(
      {
        type:"UPDATE",
        data : {
          id,
          createdDate,
          emotionId,
          content,
        },
      });
  }
  //기존 일기 삭제
  const onDelete=(id)=>{
    dispatch({
      type : "DELETE",
      id,
    });
  };

  if(isLoading) {
    return <div> 데이터 로딩 중...</div>
  }
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onDelete, onUpdate
        }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="*" element={<Notfount/>}/>
          </Routes>
         </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
