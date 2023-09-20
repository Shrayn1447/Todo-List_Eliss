import { NextUIProvider } from "@nextui-org/react";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Inpute from "./components/Inpute";
let date = new Date()
const data = [{
  _id:'test'
}];
export default function App() {
  const [time,setTime] = useState('');
  const [todos, setTodo] = useState(data);
  const handler = (time) => {
      setTime(time)
  }
  const removeTodo = (id) => {
    setTodo([...todos].filter((t) => t._id != id));
  };
  return (
    <>
      <NextUIProvider className="w-[100%] h-screen flex flex-col justify-center items-center bg-zinc-900 dark text-foreground">
       <div className="absolute w-[100%] h-screen overflow-hidden">
       <img src="https://nextui.org/gradients/docs-right.png" className=" right-[100px] w-[1000px] h-[1000px]"></img>
        <img src="https://nextui.org/gradients/docs-left.png" className=" left-[10px]  w-[1000px]  h-[1000px] "></img>
       </div>
        <div className="pb-[50px] font-bold text-8xl z-50">
          To
          <span className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
            Do
          </span>{" "}
          List
        </div>
        <div className="bg-gray-950 p-[20px] overflow-auto rounded-2xl opacity-[0.9] mb-[50px]">
          <div>
            <div className="flex items-center justify-center ">
              <h1 className=" text-center pb-[20px]  font-bold text-[20px] ">
                Введите задачу
              </h1>
            </div>
            <Inpute onChange={handler} setTodo={setTodo}  todoTime = {setTime} />
          </div>
          <div>
            {todos.map((todo) => (
             todo._id != 'test' &&  <TodoItems  key={todo._id} todo={todo} removeTodo={removeTodo} /> 
            ))}
          </div>
        </div>
      </NextUIProvider>
    </>
  );
}
