/// reference path="../services/ErgastService.ts"

class PilotoController implements ng.IController {
    public $onDestroy() {}
    private scope: angular.IScope;
    public pilotoId: string = "";

    constructor($scope, pilotoId: string) {
        this.scope = $scope;
        $scope.vm = this;
        this.pilotoId = pilotoId;
    }
}
