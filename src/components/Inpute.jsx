import React from 'react'
import {Input} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from 'react';
export default function Inpute({setTodo,onChange,time,todoTime}) {
  const [index,setIndex] = useState('')
  const addTodo = (titel) => {
    setTodo(prev => [{
      _id:new Date(),
      titel,
    },
    ...prev])
    setIndex('')
    
  }
  return (
    <div className='w-[500px]'>
        <Input value={index} maxLength={'30'} className='text-2xl border-2 rounded-2xl border-[rgb(59,60,68)]'onChange={(e) => setIndex(e.target.value)}  type="text" label="Задача" endContent={
            <>
            <Button type='submit' onClick={() => {
              index && time != '' && addTodo(index)
            }} color="primary" variant="faded">
             Добавить
           </Button> 
            </> 
        } />
    </div>
  )
}
