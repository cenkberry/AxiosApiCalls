const btnGet = document.querySelector('.btnGet');
const btnPos = document.querySelector('.btnPos');
const btnPut = document.querySelector('.btnPut');
const btnDel = document.querySelector('.btnDel');
const result = document.querySelector('.result');
btnGet.addEventListener("click" , getUsers);
btnPos.addEventListener("click" , postUser);
btnPut.addEventListener("click" , putIt);
btnDel.addEventListener("click" , deleteIt);

function getUsers(){
  axios.get('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts')
       .then(res => showUsers(res))
       .catch(err => console.log(err));
}

function postUser(){
  let _userName = document.querySelector('.userName').value;
  let _passWord = document.querySelector('.passWord').value;
  let _userLoc  = document.querySelector('.userLoc').value;

  axios.post('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts/',
  {
   username: _userName,
   password: _passWord,
   location : _userLoc,
  })
   .then(res => showUsers(res))
   .catch(err => console.log(err))
}


function putIt(){
  let _changeUs  = document.querySelector('.changeUs').value;
  let _changePa  = document.querySelector('.changePa').value;
  let _changeLo  = document.querySelector('.changeLo').value;

  axios.put('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts/1', 
   {
    username: _changeUs,
    Password: _changePa,
    location: _changeLo,
   })
    .then(res => showUsers(res))
    .catch(err => console.log(err))
}

function deleteIt(){
  axios.delete('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts/1')
    .then(res => showUsers(res))
    .catch(err => console.log(err))
}

function showUsers(res){
  result.innerHTML = `
  <pre class="text-sm p-1 bg-yellow-400"><p>Status:</p>${JSON.stringify(res.status,  null , 2 )}</pre>
  <pre class="text-sm p-1 bg-red-400"><p>Data:</p>${JSON.stringify(res.data,    null , 2 )}</pre>
  `
}