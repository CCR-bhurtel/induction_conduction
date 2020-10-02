class inputSystem {

    constructor() {
        this.mouseReleased = false;
    }

    static clickedObject = [];

    Update() {
        this.mouseReleased = false;
        if(inputSystem.clickedObject.length > 1) {
            inputSystem.clickedObject.pop()
        }
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

    onMouseClicked(object) {
        if(!object) return mouseIsPressed;
        if(mouseIsPressed && 
            mouseX > object.position.x - object.width / 2 && mouseX < object.position.x + object.width / 2 &&
                mouseY > object.position.y - object.height / 2 && mouseY < object.position.y + object.height / 2    
        ) {
            if(!inputSystem.clickedObject.includes(object)) {
                inputSystem.clickedObject.push(object);
            }
            return true;
        }
        else {
            if(inputSystem.clickedObject.includes(object)) {
                const index = inputSystem.clickedObject.indexOf(object);
                inputSystem.clickedObject.splice(index, 1);
            }
            return false;
        }
    }

    onMouseReleased() {
        return this.mouseReleased
    }

    currentlySelected() {
        return inputSystem.clickedObject;
    }
}
