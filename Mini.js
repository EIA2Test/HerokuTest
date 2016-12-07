"use strict";
var Mini;
(function (Mini) {
    console.log("Immediate call");
    init();
    function init() {
        console.log("Function call");
    }
    Mini.init = init;
})(Mini = exports.Mini || (exports.Mini = {}));
//# sourceMappingURL=Mini.js.map