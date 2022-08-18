// async 和 await
// async 关键字为你提供了一种更简单的方法来处理基于异步 Promise 的代码。在一个函数的开头添加 async，就可以使其成为一个异步函数。
async function fetchProducts(){
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if(!response.ok){
            throw new Error(`HTTP 请求错误：${response.status}`);
        }

        const json = await response.json();
        console.log(json[0].name);
    } catch (error) {
        console.error(`无法获取产品列表：${error}`);
    }
}
fetchProducts();