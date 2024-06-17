'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const BinaryNativeClient = core.registerPlugin('BinaryNativeClient', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BinaryNativeClientWeb()),
});

class BinaryNativeClientWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BinaryNativeClientWeb: BinaryNativeClientWeb
});

exports.BinaryNativeClient = BinaryNativeClient;
//# sourceMappingURL=plugin.cjs.js.map
