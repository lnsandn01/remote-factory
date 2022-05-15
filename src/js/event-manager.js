AFRAME.registerComponent("event-manager", {
  init: function () {
    this.bindMethods();
    this.sphereButtonEl = document.querySelector("#sphereButton");  
    this.sphereButtonEl.addEventListener("click", this.onClick);
  },
  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },
  onClick: function (evt) {
    var targetEl = evt.target;
    if (targetEl === this.sphereButtonEl
    ) {
      this.sphereButtonEl.removeState("pressed");
    }
    targetEl.addState("pressed");
  },
});
