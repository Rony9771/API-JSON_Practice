
function userData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then (res => res.json())
  .then (data => displayUser(data))
}

function displayUser(data){
  const userData =document.getElementById('user-data');
  for (const user of data){
    console.log(user)
    const insert =document.createElement('div');
    insert.classList.add('user');
    insert.innerHTML =`
    <h4> User Name: ${user.userId}</h4>
    <h5> User Title: ${user.title}</h5>
    <p> User Description: ${user.body} </p>
    `
    userData.appendChild(insert)
  }
}
userData();