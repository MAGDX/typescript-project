interface IPilotoControllerScope extends angular.IScope {
  vm: PilotoDetalleController;
}

class PilotoDetalleController implements ng.IController {
  public vm: PilotoDetalleController;
  public driver: any;
  public static $inject = ["$scope", "piloto"];
  constructor(private $scope: IPilotoControllerScope, piloto: any) {
    $scope.vm = this;
    this.driver = piloto;
  }
}
