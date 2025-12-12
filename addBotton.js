// 當使用者點擊 ID 為 "addBotton" 的按鈕時觸發這個函式
document.getElementById("addBotton").onclick = function () {

    // 創建一個新的按鈕元素
    const btn = document.createElement("button");

    // 設定新按鈕的文本為 "給我錢"
    btn.textContent = "給我錢";

    // 把創建的按鈕添加到 ID 為 "container" 的容器中
    document.getElementById("container").appendChild(btn);
}