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

const obj = {health: 10, level: 2, attack: 80, defence: 40, name: 'мечник'}
console.log(orderByProps(obj, ["name", "level"]))
/*[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
]*/





