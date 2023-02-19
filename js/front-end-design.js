const skill = document.querySelector('.skill');
const skillContainer = document.querySelectorAll('.skills');

for(items of skill){
    console.log(items);
}

console.log(skillContainer);
console.log(skill);


skillContainer.addEventListener('click',function(){
    skill.style.backgroundColor = 'black';

})