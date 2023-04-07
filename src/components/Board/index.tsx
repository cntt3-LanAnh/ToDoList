import { Item } from 'components/ItemContainer';
import { ListCard } from 'components/List';
import { useState } from 'react';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { StatusType } from 'types/status';

export const Board = () => {
  const dataCard = [
    {
      id: '1',
      uuid: '52f9df20-9393-4c4d-b72c-7bfa4398a442',
      title: 'Wireframing,mockups,clinents',
      subtitle: 'Wireframing,mockups,clinents',
      updatedAt: '1 day ago',
      statusTask: 'Started',
      totalProgress: 20,
      description: 'Wireframing,mockups,clinents , collaboration',
      avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg',
      tag: 'Web Design',
    },
    {
      id: '1',
      uuid: '52f9df20-9393-4c4d-b72c-7bfa4398a445',
      title: 'Wireframing,mockups,clinents',
      subtitle: 'Wireframing,mockups,clinents',
      updatedAt: '1 day ago',
      statusTask: 'Started',
      totalProgress: 20,
      description: 'Wireframing,mockups,clinents , collaboration',
      avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg',
      tag: 'Web Design',
    },
    {
      id: '1',
      uuid: '52f9df20-9393-4c4d-b72c-7bfa4398a446',
      title: 'Wireframing,mockups,clinents',
      subtitle: 'Wireframing,mockups,clinents',
      updatedAt: '1 day ago',
      statusTask: 'In Progress',
      totalProgress: 20,
      description: 'Wireframing,mockups,clinents , collaboration',
      avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg',
      tag: 'Web Design',
    },
    {
      id: '1',
      uuid: '52f9df20-9393-4c4d-b72c-7bfa4398a448',
      title: 'Wireframing,mockups,clinents',
      subtitle: 'Wireframing,mockups,clinents',
      updatedAt: '1 day ago',
      statusTask: 'Complete',
      totalProgress: 20,
      description: 'Wireframing,mockups,clinents , collaboration',
      avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg',
      tag: 'Web Design',
    },
    {
      id: '1',
      uuid: '52f9df20-9393-4c4d-b72c-7bfa4398a4477',
      title: 'Wireframing,mockups,clinents',
      subtitle: 'Wireframing,mockups,clinents',
      updatedAt: '1 day ago',
      statusTask: 'Close',
      totalProgress: 20,
      description: 'Wireframing,mockups,clinents , collaboration',
      avatar: 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg',
      tag: 'Web Design',
    },
  ];
  const [items, setItems] = useState(dataCard);

  function getTaskListByStatus(status: StatusType) {
    const listTaskFilter = items.filter((item) => {
      return item.statusTask === status;
    });

    const listTaskRender = listTaskFilter.map((item, index) => {
      return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div className="w-[280px]" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <Item subData={item} />
            </div>
          )}
        </Draggable>
      );
    });

    return <ListCard status={status}>{listTaskRender}</ListCard>;
  }

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const listTaskSource = items.filter((item) => item.statusTask === source.droppableId);
    const listTaskDes = items.filter((item) => item.statusTask === destination.droppableId);

    //cập nhật trạng thái task
    const draggedTask = listTaskSource[source.index];
    const newStatus = destination.droppableId;
    const updatedTask = { ...draggedTask, statusTask: newStatus };

    //cắt task khỏi mảng
    const draggedTaskIndex = items.indexOf(draggedTask);
    const newListTask = [...items];
    newListTask.splice(draggedTaskIndex, 1);

    //lấy ra index cần chèn
    const destinatedIndex = newListTask.indexOf(listTaskDes[destination.index]);

    //đưa task vào index mới
    if (destinatedIndex !== -1) {
      newListTask.splice(destinatedIndex, 0, updatedTask);
    } else {
      const lastDesElement = listTaskDes[listTaskDes.length - 1];
      const indexOfLastDes = newListTask.indexOf(lastDesElement);
      newListTask.splice(indexOfLastDes + 1, 0, updatedTask);
    }

    setItems(newListTask);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-between ">
        {getTaskListByStatus(StatusType.NEW)}
        {getTaskListByStatus(StatusType.INPROCESS)}
        {getTaskListByStatus(StatusType.DONE)}
        {getTaskListByStatus(StatusType.ClOSED)}
      </div>
    </DragDropContext>
  );
};
