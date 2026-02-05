import { muvelet, muveletLetrehoz } from "./functions.js"

class Gomb {

    constructor (input1, input2, muveletString, eredmenyDiv)
    {
        this.input1 = input1
        this.input2 = input2
        this.muveletString = muveletString
        this.eredmenyDiv = eredmenyDiv

        this.button = document.createElement('button');
        this.button.innerText = this.muveletString;
        document.body.appendChild(this.button);

        this.button.addEventListener('click', this.#calculate(this.input1, this.input2, this.eredmenyDiv));
    }

    #calculate(input1, input2, eredmenyDiv) {
        return () => {
            const Value1 = Number(input1.value);
            const Value2 = Number(input2.value);
            const {result} = muvelet(Value1, Value2, muveletLetrehoz(this.muveletString));
            eredmenyDiv.innerText = result;
        }
    }
}
export {Gomb};