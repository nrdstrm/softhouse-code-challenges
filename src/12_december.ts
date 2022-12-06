// https://github.com/johngherga/sh-code-challenges/tree/master/roman-to-integer-dec-2022

const december = () => {
    const data = "MCMXCIV";

    let roman: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const run = () => {
        let sum = 0;

        for (let i = 0; i < data.length; i++) {
            const currentChar = data[i];
            const nextChar = data[i + 1];

            switch (true) {
                case currentChar === "I" && nextChar === "V":
                    i++;
                    sum += 4;
                    break;
                case currentChar === "I" && nextChar === "X":
                    i++;
                    sum += 9;
                    break;
                case currentChar === "X" && nextChar === "L":
                    i++;
                    sum += 40;
                    break;
                case currentChar === "X" && nextChar === "C":
                    i++;
                    sum += 90;
                    break;
                case currentChar === "C" && nextChar === "D":
                    i++;
                    sum += 400;
                    break;
                case currentChar === "C" && nextChar === "M":
                    i++;
                    sum += 900;
                    break;
                default:
                    sum += roman[currentChar];
                    break;
            }
        }

        console.log(sum);
    }

    run();
}

december();
