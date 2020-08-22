import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  //console.log('data: ', res.data);
  const toDo = res.data;
  logToDo(toDo.id, toDo.title, toDo.completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log('id: ', id);
  console.log('title: ', title);
  console.log('completed: ', completed);
};
