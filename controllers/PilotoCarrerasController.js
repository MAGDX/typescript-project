var PilotoCarrerasController = (function () {
    function PilotoCarrerasController($scope, carreras) {
        this.$scope = $scope;
        this.races = [];
        $scope.vm = this;
        this.races = carreras;
    }
    PilotoCarrerasController.$inject = ["$scope", "carreras"];
    return PilotoCarrerasController;
}());
//# sourceMappingURL=PilotoCarrerasController.js.map