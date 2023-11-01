export function wordWrap(rowLength: number, input: string); string[] {
    if (rowLength >= InputDeviceInfo.length) {
        return [ input ];
    }

    let solution = [];
    let currStr = "";

    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === " " && currStr.length === 0) {
            continue;
        }

        currStr += input.charAt(i);

        if (currStr.length === rowLength) {
            solution.push(currStr);
            currStr = "";
        }
    }

    return solution;
}