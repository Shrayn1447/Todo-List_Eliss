import React from "react";
import { Accordion, AccordionItem,Textarea,Button,Checkbox  } from "@nextui-org/react";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import { Input } from "@nextui-org/react";
export default function TodoItems({todo,removeTodo,}) {
  const [opi,setOpi] = useState('')

  return (
    <Accordion className="w-[500px]" variant="splitted">
      <AccordionItem 
        aria-label="Accordion 1"
        maxLength={30}
        className="mt-[10px]"
        title={
          <div className="flex justify-between items-center">
            <div className="flex justify-between w-[100%] items-center">
            <Checkbox lineThrough className="flex justify-end">
              {todo.titel}
            </Checkbox>
            <Input  type='time' className='w-[100px] mr-[10px] h-[44px] border-2 rounded-2xl border-[rgb(59,60,68)]'></Input>
            </div>
            <Button
              className="h-[35px] "
              onClick={() => removeTodo(todo._id)}
              color="danger"
              variant="bordered"
              startContent={<BsTrash3 />}
            >
            </Button>
          </div>
        }
      >
      <Textarea
      labelPlacement="outside"
      placeholder="Описание"
      className="w-[100%]"
      onChange={(e) => setOpi(e.target.value)}
      value={opi}
      />   
      </AccordionItem>
    </Accordion> 
  );
}
