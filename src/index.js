const btnGet = document.querySelector('.btnGet');
const btnPos = document.querySelector('.btnPos');
const btnPut = document.querySelector('.btnPut');
const btnDel = document.querySelector('.btnDel');
const btnSim = document.querySelector('.btnSim');
const btnCus = document.querySelector('.btnCus');
const btnTrn = document.querySelector('.btnTrn');
const btnErr = document.querySelector('.btnErr');
const btnCan = document.querySelector('.btnCan');

btnGet.addEventListener("click" , getPosts());
btnPos.addEventListener("click" , postIt());
btnPut.addEventListener("click" , putIt());
btnDel.addEventListener("click" , deleteIt());
btnSim.addEventListener("click" , simReq());
btnCus.addEventListener("click" , customHeaders());