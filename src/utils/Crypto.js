/**
 * Author: shaack
 * Date: 11.01.2018
 */

class Crypto {
    static createBase36Key() {
        return Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(36).substr(0, 10);
    }
}