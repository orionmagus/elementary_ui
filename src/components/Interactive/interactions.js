const UIactions = {
  hover: {
    hoverable: true,
    init: {
      boxShadow: "0px 0px 0px rgba(0,0,0,0) "
    },
    hover: {
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
    }
  },
  focus: {
    focusable: true,
    init: {
      color: "#aaa",
      outlineWidth: "0px",
      outlineOffset: "0px"
    },
    focus: {
      color: "#000",
      outlineWidth: "12px",
      outlineOffset: "5px",
      outlineColor: "#AB36FF"
    }
  },
  drag: {},
  press: {
    pressable: true,
    init: {
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2), 0px 0px 0px rgba(0,0,0,0) inset"
    },
    press: {
      boxShadow: "0px 0px 0px rgba(0,0,0,0), 2px 2px 5px rgba(0,0,0,0.8) inset"
    }
    // onPressStart={ onStart } onPressEnd={ onEnd }
  }
};
