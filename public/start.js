(() => {
    function filter(data) {
        let onlyNum = ""
        for (let i = 0; i < data.length; i++) {
            let d = data[i]
            if (d == "1" || d == "2" || d == "3" || d == "4" || d == "5" || d == "6" || d == "7" || d == "8" || d == "9" || d == "0") {
                onlyNum = onlyNum + d
            }
        }
        let res = []
        for (let i = 0; i < onlyNum.length; i += 2) {
            res.push(parseInt(onlyNum[i] + onlyNum[i + 1]))
        }
        return res
    }
    function calNum() {
        event.preventDefault()

        const tab = parseInt(document.getElementById('table').value)
        const num = document.getElementById('number').value
        const neg = document.getElementById('checkbox').checked

        arrNum = filter(num)

        const outElem = document.getElementById('output')
        let output = ""
        for (let i = 0; i < arrNum.length; i++) {
            let tmp = ""
            if (neg) {
                tmp = ((100 + tab - arrNum[i]) % 100).toString()

            } else {
                tmp = ((arrNum[i] + 100 - tab) % 100).toString()
            }
            if (tmp.length == 1) {
                tmp = '0' + tmp
            }
            if (output != "") {
                output = output + ", " + tmp
            } else {
                output = tmp
            }
        }
        outElem.innerText = output
    }

    function run() {
        const formElem = document.querySelector('form')
        formElem.addEventListener('submit', calNum)
    }
    run()
})()