class Input {
    constructor() {

    }

    onKeyPressed(inputKey) {
        if(!inputKey) return keyIsPressed;

        if(typeof inputKey === "string") {
            return (inputKey.toLowerCase() === key) 
        }

        if (typeof inputKey === "number") {
            return (inputKey === keyCode);
        }
    }
    // TODO Make onMouseClickedMethod
}