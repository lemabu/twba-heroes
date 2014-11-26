addEventListener('polymer-ready', function(e) {
  console.log("Polymer ready");
});

addEventListener('template-bound', function(e) {
      var scope = e.target;

      console.log("TEMPLATE BOUND");

      console.log(scope);

      scope.back = function() {
        console.log("Back has been pressed");
        this.$.heroApp.menuTap();
      };

      console.log(scope.back);
    });

