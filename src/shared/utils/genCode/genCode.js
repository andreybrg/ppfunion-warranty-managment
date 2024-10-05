//вспомогательная функция
function putToCache(elem, cache){
    if(cache.indexOf(elem) !== -1){
        return;
    }
    var i = Math.floor(Math.random()*(cache.length + 1));
    cache.splice(i, 0, elem);
}
//функция, возвращающая компаратор
function madness(){
    var cache = [];
    return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}
//функция перемешивания массива
function shuffle(arr){
    var compare = madness();
    return arr.sort(compare);
}

function createCode() {
    const maxLen = 10
    const numberSet = [1,2,3,4,5,6,7,8,9]
    const charSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z']
    const charSetLength = charSet.length
    const numberSetLength = numberSet.length
    const shuffledCharSet = shuffle(charSet)
    const shuffledNumberSet = shuffle(numberSet)

    const charCounter = numberSet[Math.floor(Math.random()*numberSetLength)]
    const numberCounter = maxLen-charCounter

    const charArr = []
    const numberArr = []

    for(let i=0; i<charCounter; i++) {
        charArr.push(shuffledCharSet[Math.floor(Math.random()*charSetLength)])
    }

    for(let i=0; i<numberCounter; i++) {
        numberArr.push(shuffledNumberSet[Math.floor(Math.random()*numberSetLength)])
    }

    const combineArr = charArr.concat(numberArr)
    return shuffle(combineArr).join('')
}

export const genCode = (count) => {

    const resultCodeList = []

    for(let i=1; i<=count; i++) {
        const createdCode = createCode()
        if(resultCodeList.find(el => el === createdCode))  {
            i--
            continue
        }
        
        resultCodeList.push(createdCode)
            
    }

    return resultCodeList
}