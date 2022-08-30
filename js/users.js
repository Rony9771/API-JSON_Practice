
function userData(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then (data => loadData(data))
}

function loadData(data){
  const ul =document.getElementById('user-info')
  for (const user of data){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);


  }
}

