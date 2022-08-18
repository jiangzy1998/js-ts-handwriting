// 在数组开头添加元素
Array.prototype.insertFirstPosition = function (value){
    for(let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
}
const numbers = [1,2,3];
numbers.insertFirstPosition(0);
console.log(numbers);