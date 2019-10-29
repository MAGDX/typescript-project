interface IPilotoCarrerasScope extends angular.IScope {
  vm: PilotoCarrerasController;
}

class PilotoCarrerasController implements ng.IController {
  public vm: PilotoCarrerasController;
  public races: any[] = [];
  public static $inject = ["$scope", "carreras"];
  constructor(private $scope: IPilotoCarrerasScope, carreras: any[]) {
    $scope.vm = this;
    this.races = carreras;
  }
}
