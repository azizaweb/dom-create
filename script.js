// const div = document.createElement('div');
// div.textContent = 'new div' ;
// div.classList.add('my-class');
// document.body.appendChild(div);
// console.log(div)


// const div = document.createElement('div');
// div.classList.add ('box','highlight');
// div.classList.remove ('highlight');
// console.log(div)


// const div = document.createElement('div');
// div.classList.add ('box');
// div.classList.toggle ('highlight');
// console.log(div)






// const item2 = document.createElement('li');
// item2.textContent = 'two'
// item2.classList.add('list-item')
// list.appendChild(item2)

// const item3 = document.createElement('li');
// item3.textContent = 'three'
// item3.classList.add('list-item')
// list.appendChild(item3)
// document.body.appendChild(list)






const userName = prompt ('name')
if(userName){
 const nameElement = document.createElement('div')
 nameElement.textContent = userName
 nameElement.style.fontSize = '50px'
nameElement.style.color = 'yellow'
nameElement.style.fontWeight = 'bold'
nameElement.style.textAlign = 'center'
nameElement.style.position = 'absolute'
nameElement.style.top = '50%'
nameElement.style.left = '50%'
nameElement.style.transform = 'translate(-50%,-50%)'
document.body.appendChild(nameElement)
}