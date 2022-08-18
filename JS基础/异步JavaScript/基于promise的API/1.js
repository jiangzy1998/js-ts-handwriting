// Promise() 构造器
function alarm(person, delay){
    return new Promise((resolve, reject) => {
        if(delay < 0){
            throw new Error('Alarm delay must not be negative');
        }
        window.setTimeout(()=>{
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}


const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

button.addEventListener('click', ()=>{
    alarm(name.value, delay.value)
        .then(message => output.textContent = message)
        .catch(error => output.textContent = `Couldn't set alarm: ${error}`);
})


