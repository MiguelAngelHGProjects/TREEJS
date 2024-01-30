AFRAME.registerComponent('event-manager', {
  init: function () {
    this.bindMethods();

    this.lollipopEl = document.querySelector('#lollipop');
    this.boxGeometryEl = document.querySelector('#boxGeometry');
    this.sphereGeometryEl = document.querySelector('#sphereGeometry');
    this.torusGeometryEl = document.querySelector('#torusGeometry');
    this.animatorEl = document.querySelector('#Animator');

    this.lollipopbuttonEl = document.querySelector('#lollipopbutton');
    this.boxButtonEl = document.querySelector('#boxButton');
    this.sphereButtonEl = document.querySelector('#sphereButton');
    this.torusButtonEl = document.querySelector('#torusButton');
    this.darkModeButtonEl = document.querySelector('#darkModeButton');

    this.buttonToGeometry = {
      'lollipopbutton': this.lollipopEl,
      'boxButton': this.boxGeometryEl,
      'sphereButton': this.sphereGeometryEl,
      'torusButton': this.torusGeometryEl
    };

    this.lollipopbuttonEl.addEventListener('click', this.onClick);
    this.boxButtonEl.addEventListener('click', this.onClick);
    this.sphereButtonEl.addEventListener('click', this.onClick);
    this.torusButtonEl.addEventListener('click', this.onClick);
    this.darkModeButtonEl.addEventListener('click', this.onClick);
    this.animatorEl.addEventListener('click', this.toggleAnimation.bind(this));

    this.boxButtonEl.addState('pressed');

  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;
    if (targetEl === this.lollipopbuttonEl ||
        targetEl === this.boxButtonEl ||
        targetEl === this.sphereButtonEl ||
        targetEl === this.torusButtonEl) {
      this.lollipopbuttonEl.removeState('pressed');
      this.boxButtonEl.removeState('pressed');
      this.sphereButtonEl.removeState('pressed');
      this.torusButtonEl.removeState('pressed');
      this.lollipopEl.object3D.visible = false;
      this.boxGeometryEl.object3D.visible = false;
      this.sphereGeometryEl.object3D.visible = false;
      this.torusGeometryEl.object3D.visible = false;
      this.buttonToGeometry[targetEl.id].object3D.visible = true;
      this.lollipopEl.setAttribute('dynamic-body', 'enabled', false);
    }

    if (targetEl === this.darkModeButtonEl) {
      if (this.el.sceneEl.is('starry')) {
        targetEl.setAttribute('button', 'label', 'Dark Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'default'});
        this.el.sceneEl.removeState('starry');
      } else {
        targetEl.setAttribute('button', 'label', 'Light Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'starry'});
        this.el.sceneEl.addState('starry');
      }
    } else {
      targetEl.addState('pressed');
    }
  },

  toggleAnimation: function () {
    var visibleGeometry = Object.values(this.buttonToGeometry).find(el => el.object3D.visible);
    if (visibleGeometry) {
      var animation = visibleGeometry.getAttribute('animation');
      if (!animation) {
        visibleGeometry.setAttribute('animation', {
          property: 'rotation',
          to: '0 0 360',
          loop: true,
          easing: 'linear',
          dur: 2000
        });
      } else {
        visibleGeometry.removeAttribute('animation');
      }
    }
  },

});
