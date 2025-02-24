async function getUserData(): Promise<void> {
    const res: Response = await fetch("http://127.0.0.1:8000/data");
    const { username, password } = await res.json();
    console.log(`${username} - ${password}`);
}
getUserData();