import orderByProps from "../orderByProps";

test('should return right []', () => {
    const obj = {health: 10, level: 2, attack: 80, defence: 40, name: 'мечник'};
    const expexted = [
        {key: "name", value: "мечник"}, // порядок взят из массива с ключами
        {key: "level", value: 2}, // порядок взят из массива с ключами
        {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
        {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
        {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ];

    const result = orderByProps(obj, ["name", "level"]);
    expect(result).toEqual(expexted);
})