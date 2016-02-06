module.exports = function () {
  "use strict";

  return {
    options: {
      enabled: true,
      duration: 2
    },
    html: {
      options: {
        message: 'Html Generated!'
      }
    },
    js: {
      options: {
        message: 'JS Generated!'
      }
    },
    css: {
      options: {
        message: 'CSS Generated!'
      }
    },
    fonts: {
      options: {
        message: 'Fonts Generated!'
      }
    },
    skins: {
      options: {
        message: 'Skins Generated!'
      }
    },
    vendor: {
      options: {
        message: 'Vendor Generated!'
      }
    },
    examples: {
      options: {
        message: 'Examples Generated!'
      }
    },
    all: {
      options: {
        message: 'All Generated!'
      }
    }
  };
};
