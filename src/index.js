const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());

app.get('/courses', (request, response) => {
  console.log(request.query);
  return response.json(['Course 1', 'Course 2', 'Course 3']);
});

app.post('/courses', (request, response) => {
  console.log(request.body);
  return response.json(['Course 1', 'Course 2', 'Course 3', 'Course 4']);
});

app.put('/courses/:id', (request, response) => {
  console.log(request.params);
  return response.json(['Course 6', 'Course 2', 'Course 3', 'Course 4']);
});

app.patch('/courses/:id', (request, response) =>
  response.json(['Course 6', 'Course 7', 'Course 3', 'Course 4'])
);

app.delete('/courses/:id', (request, response) =>
  response.json(['Course 7', 'Course 3', 'Course 4'])
);

app.listen(3333);
