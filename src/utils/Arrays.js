/**
 * Author: shaack
 * Date: 01.03.2018
 */
export class Arrays {
    static pushAll(fromArray, toArray) {
        for (let obj of fromArray) {
            toArray.push(obj);
        }
    }
}