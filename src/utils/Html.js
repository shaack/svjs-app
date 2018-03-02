/**
 * Author: shaack
 * Date: 24.01.2018
 */

export class Html {
    static addClass(element, cssClass) {
        if (element.getAttribute("class")) {
            element.setAttribute("class", element.getAttribute("class") + " " + cssClass);
        } else {
            element.setAttribute("class", cssClass);
        }
    }

    static removeAllChildElements(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    static getFormInputValues(formElement) {
        const inputs = formElement.querySelectorAll("input,select,checkbox");
        const values = {};
        inputs.forEach((input) => {
            if (input.type === "checkbox") {
                values[input.id] = !!input.checked;
            } else {
                values[input.id] = input.value;
            }
        });
        return values;
    }
}