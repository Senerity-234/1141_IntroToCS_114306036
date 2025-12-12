const mathInput = document.getElementById("mathInput");
const engInput = document.getElementById("engInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

const mathAvg = document.getElementById("mathAvg");
const engAvg = document.getElementById("engAvg");
const overallAvg = document.getElementById("overallAvg");

let count = 0;
submitBtn.addEventListener("click", function () {
    const m = Number(mathInput.value);
    const e = Number(engInput.value);
    if (!m && !e) return;

    const rowAvg = ((m + e) / 2).toFixed(2);
    count++;

    // 新增一列
    tableBody.innerHTML += `
        <tr>
            <td>${count}</td>
            <td>${m}</td>
            <td>${e}</td>
            <td>${rowAvg}</td>
        </tr>
    `;

    updateColumnAverages();
});

// 計算欄平均
function updateColumnAverages() {

    const rows = tableBody.querySelectorAll("tr");
    let mathTotal = 0, engTotal = 0;

    rows.forEach(row => {
        const tds = row.querySelectorAll("td");
        mathTotal += Number(tds[1].innerText);
        engTotal += Number(tds[2].innerText);
    });

    const count = rows.length;

    const mAvg = (mathTotal / count).toFixed(2);
    const eAvg = (engTotal / count).toFixed(2);
    const allA = ((Number(mAvg) + Number(eAvg)) / 2).toFixed(2);

    mathAvg.textContent = mAvg;
    engAvg.textContent = eAvg;
    overallAvg.textContent = allA;
}
