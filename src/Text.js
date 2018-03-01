/**
 * Author: shaack
 * Date: 28.12.2017
 */

const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

export class Text {

    static replaceAll(str, obj) {
        let retStr = str;
        let x;
        for (x in obj) {
            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
        }
        return retStr;
    }

    static maxLength(str, maxLength) {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "…";
        } else {
            return str;
        }
    }

    static escapeHtml(str) {
        return String(str).replace(/[&<>"'\/]/g, (s) => {
            return entityMap[s];
        });
    }

}