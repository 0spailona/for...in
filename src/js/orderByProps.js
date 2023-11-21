export default function orderByProps(objForSorted, arrForOrder) {
    let result = [];
    let sortedPart = [];

    for (let key of arrForOrder) {
        result.push({key, value: objForSorted[key]})
    }

    for (let key of Object.keys(objForSorted)) {
        if (!arrForOrder.includes(key)) {
            sortedPart.push({key, value: objForSorted[key]})
        }
    }

    sortedPart = sortedPart.sort((a, b) =>
        a.key > b.key ? 1 : -1)

    result = [...result, ...sortedPart];

    return result;
}






