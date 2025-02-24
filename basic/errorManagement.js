try { // 오류 처리는 try-catch문으로 ㄱㄱ
    const res = JSON.parse('{ j: "feaewf" }');
} catch (error) {
    console.error("error 메세지 : " + error);
} finally {
    console.log("작업 종료")
}