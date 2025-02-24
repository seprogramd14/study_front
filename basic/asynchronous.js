// promise 객체 -> promise.all() 함수도 존재
const fetchData = () => {
    return new Promise((resolve, reject) => { // resolve는 성공을, reject는 실패를 의미
        setTimeout(() => resolve("Data Loader!"), 1000);
    });
};
fetchData()
    .then((data) => console.log(data)) // 성공 시
    .catch((error) => console.error(error)) // 실패 시
    .finally(() => console.log("작업 종료"));

// async / await 사용
async function getData() {
    const res = await fetch("http://127.0.0.1:8000/"); // url을 입력하면 여기서 데이터를 가져옴
    const { message } = await res.json(); // 구조 분해 할당
    console.log(message);
}
getData();

async function getUserData() {
    const res = await fetch("http://127.0.0.1:8000/data");
    const { username, password } = await res.json();
    console.log(`${username} - ${password}`);
}
getUserData();
