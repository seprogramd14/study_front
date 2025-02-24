const [ first, second ] = [1, 2];
const { username, password } = { username: "sepro", password: "q23rp98y"};

const arr1 = [1, 2];
const arr2 = [...arr1, 3] // 스프레드 연산자

const response = {
    user: {
      profile: {
        name: "노승준"
      }
    }
};

// 에러 방지를 위한 Optional Chaining ==> *Read만 가능
console.log(response?.user?.profile?.money)