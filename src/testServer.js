// const endPoint = 'http://localhost:3000';

// // const queryParams = '';
// const body = {
//   title: 'VUE',
//   author: 'evan you',
// };

// const getResponse = async (url, queryParams = '') => {
//   let resonse = await fetch(`${endPoint}/${url}?${queryParams}`);
//   let json = await resonse.json();
//   console.log(resonse);
//   console.log(json);
// };

// const deleteResponse = async (url, queryParams = '') => {
//   let resonse = await fetch(`${endPoint}/${url}?${queryParams}`, {
//     method: 'DELETE',
//   });
//   let json = await resonse.json();
//   console.log(resonse);
//   console.log(json);
// };

// const postResponse = async (url, body, queryParams = '') => {
//   let resonse = await fetch(`${endPoint}/${url}?${queryParams}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   let json = await resonse.json();
//   console.log(resonse);
//   console.log(json);
// };

// getResponse('posts');
