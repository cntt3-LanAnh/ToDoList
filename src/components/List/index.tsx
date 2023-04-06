import FormItem from 'antd/es/form/FormItem';
import { DialogModal } from 'components/DialogModal';
import { FormTodo } from 'components/FormTodo';
import React, { useState } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { StatusType } from 'types/status';

export type Props = {
  status: StatusType;
  children: React.ReactNode;
};

export const ListCard = ({ status, children }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const onProceed = () => {
    console.log('Proceed clicked');
  };

  const handleOnchange = () => {
    console.log('abc');
  };

  const handleSubmit = () => {
    console.log('Anhd13');
  };

  return (
    <div>
      <div className="flex mb-6 justify-between">
        <h3> {status}</h3>
        <div onClick={() => setIsOpened(true)} className="w-[30px] h-[30px] flex items-center bg-purple-600 rounded-full">
          <AiOutlinePlus className="w-full" />
        </div>

        <DialogModal title="Create ToDo" isOpened={isOpened} onProceed={onProceed} onClose={() => setIsOpened(false)}>
          <FormTodo onSubmit={handleSubmit}>
            <FormItem>
              <input type="text" className="w-full" onChange={(e) => handleOnchange({ title: e.target.value })} />
            </FormItem>
          </FormTodo>
        </DialogModal>
      </div>
      <Droppable droppableId={status}>
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
