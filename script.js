//  text and call and share functionality
const userTxt = document.getElementById("clk-text");
const userCall = document.getElementById("clk-call");
const userShr = document.getElementById("clk-share");
const userSetting =document.getElementById('userSetting')

userTxt.addEventListener("click", () => {
  let txt = document.getElementById("user-chats");
  let call = document.getElementById("user-calls");
  let share = document.getElementById("user-share");
  txt.classList.remove("is-hidden");
  call.classList.add("is-hidden");
  share.classList.add("is-hidden");
});

userCall.addEventListener("click", () => {
  let txt = document.getElementById("user-chats");
  let call = document.getElementById("user-calls");
  let share = document.getElementById("user-share");
  txt.classList.add("is-hidden");
  call.classList.remove("is-hidden");
  share.classList.add("is-hidden");
});

userShr.addEventListener("click", () => {
  let txt = document.getElementById("user-chats");
  let call = document.getElementById("user-calls");
  let share = document.getElementById("user-share");
  txt.classList.add("is-hidden");
  call.classList.add("is-hidden");
  share.classList.remove("is-hidden");
});

//  message box show
const txtarea = document.getElementById("userFirst");


txtarea.addEventListener("click", () => {
  let leftSide = document.getElementById("leftSide-text");
  let leftSideimg = document.getElementById('leftSideimg');
leftSideimg.classList.toggle('is-hidden')
  leftSide.classList.remove("is-hidden");
  
});



userSetting.addEventListener('click',()=>{
 
  console.log("is - clicked");
   let visva = document.getElementById('modal-js')
   visva.classList.toggle('is-active')
   console.log(visva);
 
})


let del = document.getElementById('del')
del.addEventListener("click",(e)=>{
  
    console.log("deleted");
    let rmv = document.getElementById("modal-js")
    rmv.classList.toggle('is-active')
    console.log(rmv);


})


let pro = document.getElementById("profile");
let Acc = document.getElementById("account");
let con = document.getElementById("conversation");
let alr = document.getElementById("alert");
let custm = document.getElementById("customized");
let store = document.getElementById("storehouse");
let hel = document.getElementById("help");


pro.addEventListener("click", (e) => {
  console.log(e.target);
  if (pro.id == "profile") {
    // let zero = document.getElementById('zero')
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    // zero.classList.remove("is-hidden")
    one.classList.remove("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

Acc.addEventListener("click", (e) => {
  if (Acc.id == "account") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.remove("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

con.addEventListener("click", (e) => {
  if (con.id == "conversation") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.remove("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

alr.addEventListener("click", (e) => {
  if (alr.id == "alert") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.remove("is-hidden");
    five.classList.add("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

custm.addEventListener("click", (e) => {
  if (custm.id == "customized") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.remove("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

store.addEventListener("click", (e) => {
  if (store.id == "storehouse") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.remove("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

store.addEventListener("click", (e) => {
  if (store.id == "storehouse") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.remove("is-hidden");
    seven.classList.add("is-hidden");
    console.log("visva");
  }
});

hel.addEventListener("click", (e) => {
  if (hel.id == "help") {
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    one.classList.add("is-hidden");
    two.classList.add("is-hidden");
    three.classList.add("is-hidden");
    four.classList.add("is-hidden");
    five.classList.add("is-hidden");
    six.classList.add("is-hidden");
    seven.classList.remove("is-hidden");
    console.log("visva");
  }
});




// let darks = document.getElementById('dark')
// darks.addEventListener('click',(e)=>{
//   var element = document.body;
//   element.classList.toggle("dark-mode");

// })




