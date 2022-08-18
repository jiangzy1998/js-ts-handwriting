const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    window.setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
// 自从 alarm() 返回了一个 Promise，我们可以对它做任何我们可以对其他任何 promise 做的事情：Promise.all()，和 async / await：
button.addEventListener('click', async() => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
})