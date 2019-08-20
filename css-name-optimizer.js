module.exports = class CssNameOptimizer {
    constructor(alphabet) {
        this.dictionary = new Map();
        this.oneOptStr;
        this.__alph = alphabet;

        if (this.__alph === undefined) {
            this.__alph = "abcdefghijklmnopqrstuvwxyz";
            this.__alph = this.__alph.toUpperCase() + this.__alph
        }

    }

    get Alphabet() {
        return this.__alph;
    }

    setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    incStr(curStr) {
        const alph = this.Alphabet;
        const lastCharOfAlph = alph[alph.length - 1];
        let result = "";
        let stopPoint;

        if (curStr === undefined || curStr === null || curStr === "") return alph[0];

        for (let i = curStr.length - 1; i >= 0; i--) {
            if (curStr[i] === lastCharOfAlph) {
                result = alph[0] + result;
                stopPoint = i;
            } else break;
        }
        if (stopPoint === undefined) {
            const lastChar = curStr[curStr.length - 1];
            const index1 = alph.indexOf(lastChar);
            const nextAlphChr = alph[index1 + 1];
            result = this.setCharAt(curStr, curStr.length - 1, nextAlphChr);

        }
        else
            if (stopPoint === 0) result = alph[0] + result;
            else {
                const index = alph.indexOf(curStr[stopPoint - 1]);
                result = alph[index + 1] + result;
                result = curStr.substr(0, stopPoint - 1) + result;
            }
        return result;
    }

    optimizeOneStr(str) {
        let b = this.dictionary.get(str);
        if (b === undefined) {
            this.dictionary.set(str, this.oneOptStr = this.incStr(this.oneOptStr));
            return this.oneOptStr;
        }
        return b;
    }

}