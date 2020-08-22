import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    console.log('data: ', res.data);
})