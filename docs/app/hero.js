"use strict";
var Hero = (function () {
    function Hero(id, name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.id = id;
        this.name = name;
        this.state = state;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map