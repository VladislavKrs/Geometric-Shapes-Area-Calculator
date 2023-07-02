import { squareСalculation, rectangleСalculation, parallelogramСalculation, rhombusСalculation } from "./libralyFormula"
test('3 to equal 3', () => {
    expect(3).toBe(3);
});

test('1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('side * side', () => {
    expect(squareСalculation(2)).toBe(4)
})

test('sideA * sideB', () => {
    expect(rectangleСalculation(3, 2)).toBe(6)
})

test('sideC * height', () => {
    expect(parallelogramСalculation(4, 10)).toBe(40)
})

test('sideD * height', () => {
    expect(rhombusСalculation(5, 9)).toBe(45)
}) 