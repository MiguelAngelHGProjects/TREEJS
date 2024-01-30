AFRAME.registerComponent('your-component-name', {
    init: function () {
      this.el.addEventListener('handtrackingstart', this.yourHandTrackingStartFunction.bind(this));
      this.el.addEventListener('handtrackingend', this.yourHandTrackingEndFunction.bind(this));
    },
    yourHandTrackingStartFunction: function () {
      console.log('Hand detected!');
    },
    yourHandTrackingEndFunction: function () {
      console.log('Hand tracking ended!');
    }
  });
  