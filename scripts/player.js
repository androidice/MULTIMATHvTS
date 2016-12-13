var Player = (function () {
    function Player(_name) {
        this._name = _name;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value === "" || value === undefined) {
                throw new Error('name should be defined!');
            }
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
//# sourceMappingURL=player.js.map