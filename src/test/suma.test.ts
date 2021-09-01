import {suma} from "../public";
test("positive add", () => {
    const result:number = suma(10,20)
    expect(result).toBeGreaterThan(0);
    expect(result).toBe(30);
})