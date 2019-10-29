var PilotoController = (function () {
    function PilotoController($scope, pilotoId) {
        this.pilotoId = "";
        this.scope = $scope;
        $scope.vm = this;
        this.pilotoId = pilotoId;
    }
    PilotoController.prototype.$onDestroy = function () { };
    return PilotoController;
}());
//# sourceMappingURL=PilotoController.js.map