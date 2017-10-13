// Sample JS Advanced Exam - 7-Nov-2016

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item)
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


console.log(`list = [${list}]`);
list.add(1);
console.log(`list = [${list}]`);
list.add("two");
list.add(3);
console.log(`list = [${list}]`);
console.log("deleted: " + list.delete(1));
console.log(`list = [${list}]`);
console.log("cannot delete: " + list.delete(-1));
console.log(`list = [${list}]`);


let expect = require('chai').expect;

describe("TODO", function() {
    it("TODO", function() {
    });
    // TODO: ...
});
