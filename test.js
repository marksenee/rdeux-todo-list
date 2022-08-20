function requestData() {
    console.log("서버로 데이터를 요청합니다.");
}

function waitData() {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("서버로 부터 데이터를 가져오는 중입니다.");
            resolve();
        }, 1000);
    });
}

function getData() {
    alert("데이터 가져");
}

function waitData() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let status = 1;
            status === 1 ? resolve() : reject();
        }, 1000);
    });
}

function errData() {
    console.log("에러 화면 보여줘!.");
}

requestData()
waitData()
.then(function(res) {
    getData();
})
.catch(function(err){
    console.log(err);
    errData();
});


