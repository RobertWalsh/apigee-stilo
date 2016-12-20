"use strict";
var hero_1 = require('./hero');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            new hero_1.Hero(11, 'Mr. Nice'),
            new hero_1.Hero(12, 'Narco'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(14, 'Celeritas'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(16, 'RubberMan'),
            new hero_1.Hero(17, 'Dynama'),
            new hero_1.Hero(18, 'Dr IQ'),
            new hero_1.Hero(19, 'Magma'),
            new hero_1.Hero(20, 'Tornado')
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map