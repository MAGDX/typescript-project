var PilotoDetalleController = (function () {
    function PilotoDetalleController($scope, piloto) {
        this.$scope = $scope;
        $scope.vm = this;
        this.driver = piloto;
    }
    PilotoDetalleController.$inject = ["$scope", "piloto"];
    return PilotoDetalleController;
}());
//# sourceMappingURL=PilotoDetalleController.js.map