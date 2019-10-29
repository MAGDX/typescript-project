var PilotosController = (function () {
    function PilotosController($scope, clasificacionMundial) {
        this.$scope = $scope;
        this.driversList = [];
        this.nameFilter = "";
        console.log('Pilotos Controller... fona o no fona(?)');
        $scope.vm = this;
        this.driversList = clasificacionMundial;
    }
    PilotosController.$inject = ["$scope", "clasificacionMundial"];
    return PilotosController;
}());
//# sourceMappingURL=PilotosController.js.map