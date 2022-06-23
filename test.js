let sodu = [null,null,null,
            null,null,null,
            null,null,3]

const initArray = []
let array = []

sodu.map( (el, key) => {
    if (key == 2 || key == 5 || key == 8) {
        let s = sodu.slice(key-2, key+1)
        array.push(s)

    }
 })
sodu.map( (el, key) => {
    if (key == 2 || key == 5 || key == 8) {
        let s = sodu.slice(key-2, key+1)
        initArray.push(s)

    }
 })
 console.log(array);
 console.log(initArray);
let allcube = document.querySelectorAll('.cube')

allcube.forEach((el, key) => {
    if (sodu[key] == null) {
        el.classList.add('null')
    }
})

update()
let goBack = false

for (let i = 0; i < array.length; i++) {
    const row = array[i];
    for (let ii = 0; ii < array[i].length; ii++) {
        console.log("🚀 ~ file: test.js ~ line 81 ~ ii", ii)
        /* if (goBack) ii = 0 */
        const nbRow = array[i][ii]

        if (nbRow == null) {
            
            for (let iii = 1; iii <= array[i].length; iii++) {
                const testRow = iii;
                console.log("🚀 ~ file: test.js ~ line 86 ~ row" +( i+1), row)

                if (row.indexOf(testRow) == -1) {

                    let arrayCol = []

                    for (let iCol = 0; iCol < array.length; iCol++) {
                        const colNb = array[iCol][ii];
                        arrayCol.push(colNb)
                    }
                    console.log("🚀 ~ file: test.js ~ line 78 ~ arrayCol", arrayCol)
                    
                    if (arrayCol.indexOf(testRow) == -1) {
                        console.log("🚀 ~ file: test.js ~ line 95 ~ testRow", testRow)
                        array[i][ii] = testRow
                        update()
                        console.log("🚀 ~ file: test.js ~ line 111 ~ array", array)
                        row[ii] = testRow
                        if (!goBack) {
                            iii = array[i].length 
                        } else {
                            goBack = false
                        }
                    } else {
                        if (testRow == 3){
                            console.log('--------- back ---------');
                            goBack = true

                            if (initArray[i][ii - 1] === null && ii - 1 >= 0) {
                                console.log("🚀 ~ file: test.js ~ line 86 ~ initArray", initArray)

                                array[i][ii - 1] = null
                            } else if (initArray[i][ii - 2] === null && ii - 2 >= 0) {
                                console.log("🚀 ~ file: test.js ~ line 86 ~ initArray", initArray)
                                array[i][ii - 2] = null
                            } 
                            ii = 0

                            console.log("🚀 ~ file: test.js ~ line 81 ~ ii", ii)

                        }
                    }
                }
                console.log("🚀 ~ file: test.js ~ line 113 ~ goBack", goBack)
                
            }
        }

        console.log('---------------------------------------------------');
    }
}

console.log(array);






// ----- display ------
let final = array.join().split(',')
console.log("🚀 ~ file: test.js ~ line 108 ~ final", final)

function update () {
    let final = array.join().split(',')
    allcube.forEach((el, key) => {
        el.innerText = final[key]
    })
}



/* array.forEach((row, rowIndex) => {
    let i = 0;
    let test = false
    let back = false

    while ( i < 3 ) {
        if (test) i = 10
        let unique = true
        console.log("🚀 ~ file: test.js ~ line 40 ~ array.forEach ~ unique", unique)

        let el = row[i]
        let ii = 0;
        back ? ii += 1 : null
        back = false
        
        if (!el) {
           
            while ( unique  ) {
                let tester = ii + 1
                console.log(tester);
                console.log(row);
                if (row.indexOf(tester) == -1) {
                    console.log('enter1');
                    let col = []
                    for (let iCol = 0; iCol < 3; iCol++) {
                        const element = array[iCol][i];
                        col.push(element)
                    }
                    console.log(col);
                    console.log(tester);
                    if (col.indexOf(tester) == -1) {
                        console.log('enter2');
                        console.log(i);
                        array[rowIndex][i] = tester
                        unique = false
                    } else {
                        console.log('go next');
                        unique = true
                        back = true
                        test = true
                        break
                    }
                }
                ii++
            }
        }
        back ? i -= 1 : i++
    }
});
 */