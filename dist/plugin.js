var capacitorBinaryNativeClient = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
