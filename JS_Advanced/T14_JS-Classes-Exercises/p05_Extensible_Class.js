/**
 * Created by PC on 17.7.2017 г..
 */
(function(){
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] == 'function')
                    Extensible.prototype[prop] = template[prop]
                else
                    this[prop] = template[prop];
            }
        }
    }
})();