let rowCounter = 1

function addList() {
    rowCounter++
    const newRow = document.createElement("div")

    newRow.innerHTML = `
    <div id="row${rowCounter}" class="row d-flex flex-nowrap my-3">
        <div class="col d-flex align-items-center justify-content-center">
            <label for="subject">${rowCounter}.</label>
            <input class="form-control mx-5" type="text" placeholder="วิชา (ไม่จำเป็น)">
            <input id="grade${rowCounter}" class="form-control mx-5" type="text" placeholder="เกรด">
            <input id="credit${rowCounter}" class="form-control mx-5" type="text" placeholder="หน่วยกิต">
        </div>
    </div>
    `
    
    document.getElementById("list").appendChild(newRow)
}

function removeList(rowNumber) {
    const rowRemover = document.getElementById(rowNumber);
    rowRemover.remove(); // This will remove the row from the DOM
    rowCounter--;
}

function cal() {
    let totalCredit = 0
    let gradeCredit = 0

    for (let i = 0; i < rowCounter; i++) {
        let grade = parseFloat(document.getElementById("grade" + (i + 1)).value)
        let credit = parseFloat(document.getElementById("credit" + (i + 1)).value)

        if (isNaN(grade) || isNaN(credit)) {
            continue
        }

        totalCredit += credit
        gradeCredit += (grade * credit)

    }

    let result = gradeCredit / totalCredit

    if (isNaN(result)) {
        document.getElementById("result").innerHTML = "โปรดกรอกข้อมูลให้ถูกต้อง"
    } else {
        document.getElementById("result").innerHTML = "ผลการเรียนเฉลี่ยของคุณคือ <b>" + result.toFixed(2) + "</b>"
    }
}