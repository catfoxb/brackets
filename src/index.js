module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 1) return false;

    let map = new Map(bracketsConfig);
    let resultArray = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === map.get(resultArray[resultArray.length - 1])) {
            resultArray.pop();
        } else {
            resultArray.push(str[i]);
        }
    }

    return resultArray.length === 0;
};
