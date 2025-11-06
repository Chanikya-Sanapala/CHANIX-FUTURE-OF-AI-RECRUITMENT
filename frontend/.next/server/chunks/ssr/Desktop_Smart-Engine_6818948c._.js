module.exports = [
"[project]/Desktop/Smart-Engine/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce); // eslint-disable-line no-invalid-this
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/ms/index.js [app-ssr] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv)=>{
    argv = argv || process.argv;
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const pos = argv.indexOf(prefix + flag);
    const terminatorPos = argv.indexOf('--');
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const hasFlag = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
const env = process.env;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
    forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = true;
}
if ('FORCE_COLOR' in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(stream) {
    if (forceColor === false) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
    }
    const min = forceColor ? 1 : 0;
    if ("TURBOPACK compile-time truthy", 1) {
        // Node.js 7.5.0 is the first version of Node.js to include a patch to
        // libuv that enables 256 color output on Windows. Anything earlier and it
        // won't work. However, here we target Node.js 8 at minimum as it is an LTS
        // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
        // release that supports 256 colors. Windows 10 build 14931 is the first release
        // that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/Desktop/Smart-Engine/frontend/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = "undefined" !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/Smart-Engine/frontend/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bounce",
    ()=>lt,
    "Flip",
    ()=>uo,
    "Icons",
    ()=>W,
    "Slide",
    ()=>mo,
    "ToastContainer",
    ()=>Lt,
    "Zoom",
    ()=>po,
    "collapseToast",
    ()=>Z,
    "cssTransition",
    ()=>$,
    "toast",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Smart-Engine/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
"use client";
function Mt(t) {
    if (!t || typeof document == "undefined") return;
    let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
;
var L = (t)=>typeof t == "number" && !isNaN(t), N = (t)=>typeof t == "string", P = (t)=>typeof t == "function", mt = (t)=>N(t) || L(t), B = (t)=>N(t) || P(t) ? t : null, pt = (t, o)=>t === !1 || L(t) && t > 0 ? t : o, z = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(t) || N(t) || P(t) || L(t);
;
function Z(t, o, e = 300) {
    let { scrollHeight: r, style: s } = t;
    requestAnimationFrame(()=>{
        s.minHeight = "initial", s.height = r + "px", s.transition = `all ${e}ms`, requestAnimationFrame(()=>{
            s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
        });
    });
}
function $({ enter: t, exit: o, appendPosition: e = !1, collapse: r = !0, collapseDuration: s = 300 }) {
    return function({ children: a, position: d, preventExitTransition: c, done: T, nodeRef: g, isIn: v, playToast: x }) {
        let C = e ? `${t}--${d}` : t, S = e ? `${o}--${d}` : o, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
            let f = g.current, p = C.split(" "), b = (n)=>{
                n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
            };
            (()=>{
                f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
            })();
        }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            let f = g.current, p = ()=>{
                f.removeEventListener("animationend", p), r ? Z(f, T, s) : T();
            };
            v || (c ? p() : (()=>{
                E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
            })());
        }, [
            v
        ]), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, a);
    };
}
;
function J(t, o) {
    return {
        content: tt(t.content, t.props),
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        reason: t.removalReason,
        status: o
    };
}
function tt(t, o, e = !1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(t) && !N(t.type) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(t, {
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : P(t) ? t({
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : t;
}
;
function yt({ closeToast: t, theme: o, ariaLabel: e = "close" }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${o}`,
        type: "button",
        onClick: (r)=>{
            r.stopPropagation(), t(!0);
        },
        "aria-label": e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })));
}
;
;
function gt({ delay: t, isRunning: o, closeToast: e, type: r = "default", hide: s, className: l, controlledProgress: a, progress: d, rtl: c, isIn: T, theme: g }) {
    let v = s || a && d === 0, x = {
        animationDuration: `${t}ms`,
        animationPlayState: o ? "running" : "paused"
    };
    a && (x.transform = `scaleX(${d})`);
    let C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r}`, {
        ["Toastify__progress-bar--rtl"]: c
    }), S = P(l) ? l({
        rtl: c,
        type: r,
        defaultClassName: C
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(C, l), E = {
        [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : ()=>{
            T && e();
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": v
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "progressbar",
        "aria-hidden": v ? "true" : "false",
        "aria-label": "notification timer",
        className: S,
        style: x,
        ...E
    }));
}
;
;
var Xt = 1, at = ()=>`${Xt++}`;
function _t(t, o, e) {
    let r = 1, s = 0, l = [], a = [], d = o, c = new Map, T = new Set, g = (i)=>(T.add(i), ()=>T.delete(i)), v = ()=>{
        a = Array.from(c.values()), T.forEach((i)=>i());
    }, x = ({ containerId: i, toastId: n, updateId: u })=>{
        let h = i ? i !== t : t !== 1, m = c.has(n) && u == null;
        return h || m;
    }, C = (i, n)=>{
        c.forEach((u)=>{
            var h;
            (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
        });
    }, S = (i)=>{
        var n, u;
        (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = !1;
    }, E = (i)=>{
        if (i == null) c.forEach(S);
        else {
            let n = c.get(i);
            n && S(n);
        }
        v();
    }, f = ()=>{
        s -= l.length, l = [];
    }, p = (i)=>{
        var m, _;
        let { toastId: n, updateId: u } = i.props, h = u == null;
        i.staleId && c.delete(i.staleId), i.isActive = !0, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
    return {
        id: t,
        props: d,
        observe: g,
        toggle: C,
        removeToast: E,
        toasts: c,
        clearQueue: f,
        buildToast: (i, n)=>{
            if (x(n)) return;
            let { toastId: u, updateId: h, data: m, staleId: _, delay: k } = n, M = h == null;
            M && s++;
            let A = {
                ...d,
                style: d.toastStyle,
                key: r++,
                ...Object.fromEntries(Object.entries(n).filter(([D, Y])=>Y != null)),
                toastId: u,
                updateId: h,
                data: m,
                isIn: !1,
                className: B(n.className || d.toastClassName),
                progressClassName: B(n.progressClassName || d.progressClassName),
                autoClose: n.isLoading ? !1 : pt(n.autoClose, d.autoClose),
                closeToast (D) {
                    c.get(u).removalReason = D, E(u);
                },
                deleteToast () {
                    let D = c.get(u);
                    if (D != null) {
                        if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
                            p(l.shift());
                            return;
                        }
                        v();
                    }
                }
            };
            A.closeButton = d.closeButton, n.closeButton === !1 || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === !0 && (A.closeButton = z(d.closeButton) ? d.closeButton : !0);
            let R = {
                content: i,
                props: A,
                staleId: _
            };
            d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L(k) ? setTimeout(()=>{
                p(R);
            }, k) : p(R);
        },
        setProps (i) {
            d = i;
        },
        setToggle: (i, n)=>{
            let u = c.get(i);
            u && (u.toggle = n);
        },
        isToastActive: (i)=>{
            var n;
            return (n = c.get(i)) == null ? void 0 : n.isActive;
        },
        getSnapshot: ()=>a
    };
}
var I = new Map, F = [], st = new Set, Vt = (t)=>st.forEach((o)=>o(t)), bt = ()=>I.size > 0;
function Qt() {
    F.forEach((t)=>nt(t.content, t.options)), F = [];
}
var vt = (t, { containerId: o })=>{
    var e;
    return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
};
function X(t, o) {
    var r;
    if (o) return !!((r = I.get(o)) != null && r.isToastActive(t));
    let e = !1;
    return I.forEach((s)=>{
        s.isToastActive(t) && (e = !0);
    }), e;
}
function ht(t) {
    if (!bt()) {
        F = F.filter((o)=>t != null && o.options.toastId !== t);
        return;
    }
    if (t == null || mt(t)) I.forEach((o)=>{
        o.removeToast(t);
    });
    else if (t && ("containerId" in t || "id" in t)) {
        let o = I.get(t.containerId);
        o ? o.removeToast(t.id) : I.forEach((e)=>{
            e.removeToast(t.id);
        });
    }
}
var Ct = (t = {})=>{
    I.forEach((o)=>{
        o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
    });
};
function nt(t, o) {
    z(t) && (bt() || F.push({
        content: t,
        options: o
    }), I.forEach((e)=>{
        e.buildToast(t, o);
    }));
}
function xt(t) {
    var o;
    (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
}
function rt(t, o) {
    I.forEach((e)=>{
        (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
    });
}
function Et(t) {
    let o = t.containerId || 1;
    return {
        subscribe (e) {
            let r = _t(o, t, Vt);
            I.set(o, r);
            let s = r.observe(e);
            return Qt(), ()=>{
                s(), I.delete(o);
            };
        },
        setProps (e) {
            var r;
            (r = I.get(o)) == null || r.setProps(e);
        },
        getSnapshot () {
            var e;
            return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
        }
    };
}
function Pt(t) {
    return st.add(t), ()=>{
        st.delete(t);
    };
}
function Wt(t) {
    return t && (N(t.toastId) || L(t.toastId)) ? t.toastId : at();
}
function U(t, o) {
    return nt(t, o), o.toastId;
}
function V(t, o) {
    return {
        ...o,
        type: o && o.type || t,
        toastId: Wt(o)
    };
}
function Q(t) {
    return (o, e)=>U(o, V(t, e));
}
function y(t, o) {
    return U(t, V("default", o));
}
y.loading = (t, o)=>U(t, V("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...o
    }));
function Gt(t, { pending: o, error: e, success: r }, s) {
    let l;
    o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, {
        ...s,
        ...o
    }));
    let a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }, d = (T, g, v)=>{
        if (g == null) {
            y.dismiss(l);
            return;
        }
        let x = {
            type: T,
            ...a,
            ...s,
            data: v
        }, C = N(g) ? {
            render: g
        } : g;
        return l ? y.update(l, {
            ...x,
            ...C
        }) : y(C.render, {
            ...x,
            ...C
        }), v;
    }, c = P(t) ? t() : t;
    return c.then((T)=>d("success", r, T)).catch((T)=>d("error", e, T)), c;
}
y.promise = Gt;
y.success = Q("success");
y.info = Q("info");
y.error = Q("error");
y.warning = Q("warning");
y.warn = y.warning;
y.dark = (t, o)=>U(t, V("default", {
        theme: "dark",
        ...o
    }));
function qt(t) {
    ht(t);
}
y.dismiss = qt;
y.clearWaitingQueue = Ct;
y.isActive = X;
y.update = (t, o = {})=>{
    let e = vt(t, o);
    if (e) {
        let { props: r, content: s } = e, l = {
            delay: 100,
            ...r,
            ...o,
            toastId: o.toastId || t,
            updateId: at()
        };
        l.toastId !== t && (l.staleId = t);
        let a = l.render || s;
        delete l.render, U(a, l);
    }
};
y.done = (t)=>{
    y.update(t, {
        progress: 1
    });
};
y.onChange = Pt;
y.play = (t)=>rt(!0, t);
y.pause = (t)=>rt(!1, t);
;
function It(t) {
    var a;
    let { subscribe: o, getSnapshot: e, setProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Et(t)).current;
    r(t);
    let s = (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(o, e, e)) == null ? void 0 : a.slice();
    function l(d) {
        if (!s) return [];
        let c = new Map;
        return t.newestOnTop && s.reverse(), s.forEach((T)=>{
            let { position: g } = T.props;
            c.has(g) || c.set(g, []), c.get(g).push(T);
        }), Array.from(c, (T)=>d(T[0], T[1]));
    }
    return {
        getToastToRender: l,
        isToastActive: X,
        count: s == null ? void 0 : s.length
    };
}
;
function At(t) {
    let [o, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, { autoClose: d, pauseOnHover: c, closeToast: T, onClick: g, closeOnClick: v } = t;
    xt({
        id: t.toastId,
        containerId: t.containerId,
        fn: e
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t.pauseOnFocusLoss) return x(), ()=>{
            C();
        };
    }, [
        t.pauseOnFocusLoss
    ]);
    function x() {
        document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
    }
    function C() {
        window.removeEventListener("focus", f), window.removeEventListener("blur", p);
    }
    function S(m) {
        if (t.draggable === !0 || t.draggable === m.pointerType) {
            b();
            let _ = l.current;
            a.canCloseOnClick = !0, a.canDrag = !0, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
        }
    }
    function E(m) {
        let { top: _, bottom: k, left: M, right: A } = l.current.getBoundingClientRect();
        m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
    }
    function f() {
        e(!0);
    }
    function p() {
        e(!1);
    }
    function b() {
        a.didMove = !1, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
    }
    function i() {
        document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
    }
    function n(m) {
        let _ = l.current;
        if (a.canDrag && _) {
            a.didMove = !0, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = !1);
            let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
            _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
        }
    }
    function u() {
        i();
        let m = l.current;
        if (a.canDrag && a.didMove && m) {
            if (a.canDrag = !1, Math.abs(a.delta) > a.removalDistance) {
                s(!0), t.closeToast(!0), t.collapseAll();
                return;
            }
            m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
        }
    }
    let h = {
        onPointerDown: S,
        onPointerUp: E
    };
    return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = (m)=>{
        g && g(m), a.canCloseOnClick && T(!0);
    }), {
        playToast: f,
        pauseToast: p,
        isRunning: o,
        preventExitTransition: r,
        toastRef: l,
        eventHandlers: h
    };
}
;
var Ot = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
;
;
;
var G = ({ theme: t, type: o, isLoading: e, ...r })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`,
        ...r
    });
function ao(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }));
}
function so(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }));
}
function no(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }));
}
function ro(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }));
}
function io() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__spinner"
    });
}
var W = {
    info: so,
    warning: ao,
    success: no,
    error: ro,
    spinner: io
}, lo = (t)=>t in W;
function Nt({ theme: t, type: o, isLoading: e, icon: r }) {
    let s = null, l = {
        theme: t,
        type: o
    };
    return r === !1 || (P(r) ? s = r({
        ...l,
        isLoading: e
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(r) ? s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(r, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
}
var wt = (t)=>{
    let { isRunning: o, preventExitTransition: e, toastRef: r, eventHandlers: s, playToast: l } = At(t), { closeButton: a, children: d, autoClose: c, onClick: T, type: g, hideProgressBar: v, closeToast: x, transition: C, position: S, className: E, style: f, progressClassName: p, updateId: b, role: i, progress: n, rtl: u, toastId: h, deleteToast: m, isIn: _, isLoading: k, closeOnClick: M, theme: A, ariaLabel: R } = t, D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, {
        ["Toastify__toast--rtl"]: u
    }, {
        ["Toastify__toast--close-on-click"]: M
    }), Y = P(E) ? E({
        rtl: u,
        position: S,
        type: g,
        defaultClassName: D
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(D, E), ft = Nt(t), dt = !!n || !c, j = {
        closeToast: x,
        type: g,
        theme: A
    }, H = null;
    return a === !1 || (P(a) ? H = a(j) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(a) ? H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(a, j) : H = yt(j)), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(C, {
        isIn: _,
        done: m,
        position: S,
        preventExitTransition: e,
        nodeRef: r,
        playToast: l
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: h,
        tabIndex: 0,
        onClick: T,
        "data-in": _,
        className: Y,
        ...s,
        style: f,
        ref: r,
        ..._ && {
            role: i,
            "aria-label": R
        }
    }, ft != null && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-icon", {
            ["Toastify--animate-icon Toastify__zoom-enter"]: !k
        })
    }, ft), tt(d, t, !o), H, !t.customProgressBar && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(gt, {
        ...b && !dt ? {
            key: `p-${b}`
        } : {},
        rtl: u,
        theme: A,
        delay: c,
        isRunning: o,
        isIn: _,
        closeToast: x,
        hide: v,
        type: g,
        className: p,
        controlledProgress: dt,
        progress: n || 0
    })));
};
var K = (t, o = !1)=>({
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: o
    }), lt = $(K("bounce", !0)), mo = $(K("slide", !0)), po = $(K("zoom")), uo = $(K("flip"));
var _o = {
    position: "top-right",
    transition: lt,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (t)=>t.altKey && t.code === "KeyT"
};
function Lt(t) {
    let o = {
        ..._o,
        ...t
    }, e = t.stacked, [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!0), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), { getToastToRender: a, isToastActive: d, count: c } = It(o), { className: T, style: g, rtl: v, containerId: x, hotKeys: C } = o;
    function S(f) {
        let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-container", `Toastify__toast-container--${f}`, {
            ["Toastify__toast-container--rtl"]: v
        });
        return P(T) ? T({
            position: f,
            rtl: v,
            defaultClassName: p
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(p, B(T));
    }
    function E() {
        e && (s(!0), y.play());
    }
    return Ot(()=>{
        var f;
        if (e) {
            let p = l.current.querySelectorAll('[data-in="true"]'), b = 12, i = (f = o.position) == null ? void 0 : f.includes("top"), n = 0, u = 0;
            Array.from(p).reverse().forEach((h, m)=>{
                let _ = h;
                _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
                let k = n * (r ? .2 : 1) + (r ? 0 : b * m);
                _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r ? u : 0)}`), n += _.offsetHeight, u += .025;
            });
        }
    }, [
        r,
        c,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function f(p) {
            var i;
            let b = l.current;
            C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(!1), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(!0), y.play());
        }
        return document.addEventListener("keydown", f), ()=>{
            document.removeEventListener("keydown", f);
        };
    }, [
        C
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: l,
        className: "Toastify",
        id: x,
        onMouseEnter: ()=>{
            e && (s(!1), y.pause());
        },
        onMouseLeave: E,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": o["aria-label"]
    }, a((f, p)=>{
        let b = p.length ? {
            ...g
        } : {
            ...g,
            pointerEvents: "none"
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            tabIndex: -1,
            className: S(f),
            "data-stacked": e,
            style: b,
            key: `c-${f}`
        }, p.map(({ content: i, props: n })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Smart$2d$Engine$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(wt, {
                ...n,
                stacked: e,
                collapseAll: E,
                isIn: d(n.toastId, n.containerId),
                key: `t-${n.key}`
            }, i)));
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/punycode/punycode.es6.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encode",
    ()=>encode,
    "toASCII",
    ()=>toASCII,
    "toUnicode",
    ()=>toUnicode,
    "ucs2decode",
    ()=>ucs2decode,
    "ucs2encode",
    ()=>ucs2encode
]);
'use strict';
/** Highest positive signed 32-bit float value */ const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */ const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'
/** Regular expressions */ const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
/** Error messages */ const errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
};
/** Convenience shortcuts */ const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;
/*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function error(type) {
    throw new RangeError(errors[type]);
}
/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */ function map(array, callback) {
    const result = [];
    let length = array.length;
    while(length--){
        result[length] = callback(array[length]);
    }
    return result;
}
/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */ function mapDomain(domain, callback) {
    const parts = domain.split('@');
    let result = '';
    if (parts.length > 1) {
        // In email addresses, only the domain name should be punycoded. Leave
        // the local part (i.e. everything up to `@`) intact.
        result = parts[0] + '@';
        domain = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    domain = domain.replace(regexSeparators, '\x2E');
    const labels = domain.split('.');
    const encoded = map(labels, callback).join('.');
    return result + encoded;
}
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */ function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while(counter < length){
        const value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            const extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
                // It's an unmatched surrogate; only append this code unit, in case the
                // next code unit is the high surrogate of a surrogate pair.
                output.push(value);
                counter--;
            }
        } else {
            output.push(value);
        }
    }
    return output;
}
/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */ const ucs2encode = (codePoints)=>String.fromCodePoint(...codePoints);
/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */ const basicToDigit = function(codePoint) {
    if (codePoint >= 0x30 && codePoint < 0x3A) {
        return 26 + (codePoint - 0x30);
    }
    if (codePoint >= 0x41 && codePoint < 0x5B) {
        return codePoint - 0x41;
    }
    if (codePoint >= 0x61 && codePoint < 0x7B) {
        return codePoint - 0x61;
    }
    return base;
};
/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */ const digitToBasic = function(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */ const adapt = function(delta, numPoints, firstTime) {
    let k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for(; delta > baseMinusTMin * tMax >> 1; k += base){
        delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */ const decode = function(input) {
    // Don't use UCS-2.
    const output = [];
    const inputLength = input.length;
    let i = 0;
    let n = initialN;
    let bias = initialBias;
    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.
    let basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
        basic = 0;
    }
    for(let j = 0; j < basic; ++j){
        // if it's not a basic code point
        if (input.charCodeAt(j) >= 0x80) {
            error('not-basic');
        }
        output.push(input.charCodeAt(j));
    }
    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.
    for(let index = basic > 0 ? basic + 1 : 0; index < inputLength;){
        // `index` is the index of the next character to be consumed.
        // Decode a generalized variable-length integer into `delta`,
        // which gets added to `i`. The overflow checking is easier
        // if we increase `i` as we go, then subtract off its starting
        // value at the end to obtain `delta`.
        const oldi = i;
        for(let w = 1, k = base;; k += base){
            if (index >= inputLength) {
                error('invalid-input');
            }
            const digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base) {
                error('invalid-input');
            }
            if (digit > floor((maxInt - i) / w)) {
                error('overflow');
            }
            i += digit * w;
            const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
                break;
            }
            const baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
                error('overflow');
            }
            w *= baseMinusT;
        }
        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        // `i` was supposed to wrap around from `out` to `0`,
        // incrementing `n` each time, so we'll fix that now:
        if (floor(i / out) > maxInt - n) {
            error('overflow');
        }
        n += floor(i / out);
        i %= out;
        // Insert `n` at position `i` of the output.
        output.splice(i++, 0, n);
    }
    return String.fromCodePoint(...output);
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */ const encode = function(input) {
    const output = [];
    // Convert the input in UCS-2 to an array of Unicode code points.
    input = ucs2decode(input);
    // Cache the length.
    const inputLength = input.length;
    // Initialize the state.
    let n = initialN;
    let delta = 0;
    let bias = initialBias;
    // Handle the basic code points.
    for (const currentValue of input){
        if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
        }
    }
    const basicLength = output.length;
    let handledCPCount = basicLength;
    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string with a delimiter unless it's empty.
    if (basicLength) {
        output.push(delimiter);
    }
    // Main encoding loop:
    while(handledCPCount < inputLength){
        // All non-basic code points < n have been handled already. Find the next
        // larger one:
        let m = maxInt;
        for (const currentValue of input){
            if (currentValue >= n && currentValue < m) {
                m = currentValue;
            }
        }
        // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.
        const handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error('overflow');
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (const currentValue of input){
            if (currentValue < n && ++delta > maxInt) {
                error('overflow');
            }
            if (currentValue === n) {
                // Represent delta as a generalized variable-length integer.
                let q = delta;
                for(let k = base;; k += base){
                    const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                        break;
                    }
                    const qMinusT = q - t;
                    const baseMinusT = base - t;
                    output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                    q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
                delta = 0;
                ++handledCPCount;
            }
        }
        ++delta;
        ++n;
    }
    return output.join('');
};
/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */ const toUnicode = function(input) {
    return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
};
/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */ const toASCII = function(input) {
    return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
};
/*--------------------------------------------------------------------------*/ /** Define the public API */ const punycode = {
    /**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */ 'version': '2.3.1',
    /**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */ 'ucs2': {
        'decode': ucs2decode,
        'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
};
;
const __TURBOPACK__default__export__ = punycode;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/infra.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note that we take code points as JS numbers, not JS strings.
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
module.exports = {
    isASCIIDigit,
    isASCIIAlpha,
    isASCIIAlphanumeric,
    isASCIIHex
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder("utf-8", {
    ignoreBOM: true
});
function utf8Encode(string) {
    return utf8Encoder.encode(string);
}
function utf8DecodeWithoutBOM(bytes) {
    return utf8Decoder.decode(bytes);
}
module.exports = {
    utf8Encode,
    utf8DecodeWithoutBOM
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/percent-encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isASCIIHex } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/infra.js [app-ssr] (ecmascript)");
const { utf8Encode } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/encoding.js [app-ssr] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
// https://url.spec.whatwg.org/#percent-encode
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = `0${hex}`;
    }
    return `%${hex}`;
}
// https://url.spec.whatwg.org/#percent-decode
function percentDecodeBytes(input) {
    const output = new Uint8Array(input.byteLength);
    let outputIndex = 0;
    for(let i = 0; i < input.byteLength; ++i){
        const byte = input[i];
        if (byte !== 0x25) {
            output[outputIndex++] = byte;
        } else if (byte === 0x25 && (!isASCIIHex(input[i + 1]) || !isASCIIHex(input[i + 2]))) {
            output[outputIndex++] = byte;
        } else {
            const bytePoint = parseInt(String.fromCodePoint(input[i + 1], input[i + 2]), 16);
            output[outputIndex++] = bytePoint;
            i += 2;
        }
    }
    return output.slice(0, outputIndex);
}
// https://url.spec.whatwg.org/#string-percent-decode
function percentDecodeString(input) {
    const bytes = utf8Encode(input);
    return percentDecodeBytes(bytes);
}
// https://url.spec.whatwg.org/#c0-control-percent-encode-set
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
// https://url.spec.whatwg.org/#fragment-percent-encode-set
const extraFragmentPercentEncodeSet = new Set([
    p(" "),
    p("\""),
    p("<"),
    p(">"),
    p("`")
]);
function isFragmentPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraFragmentPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#query-percent-encode-set
const extraQueryPercentEncodeSet = new Set([
    p(" "),
    p("\""),
    p("#"),
    p("<"),
    p(">")
]);
function isQueryPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraQueryPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#special-query-percent-encode-set
function isSpecialQueryPercentEncode(c) {
    return isQueryPercentEncode(c) || c === p("'");
}
// https://url.spec.whatwg.org/#path-percent-encode-set
const extraPathPercentEncodeSet = new Set([
    p("?"),
    p("`"),
    p("{"),
    p("}"),
    p("^")
]);
function isPathPercentEncode(c) {
    return isQueryPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#userinfo-percent-encode-set
const extraUserinfoPercentEncodeSet = new Set([
    p("/"),
    p(":"),
    p(";"),
    p("="),
    p("@"),
    p("["),
    p("\\"),
    p("]"),
    p("|")
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#component-percent-encode-set
const extraComponentPercentEncodeSet = new Set([
    p("$"),
    p("%"),
    p("&"),
    p("+"),
    p(",")
]);
function isComponentPercentEncode(c) {
    return isUserinfoPercentEncode(c) || extraComponentPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set
const extraURLEncodedPercentEncodeSet = new Set([
    p("!"),
    p("'"),
    p("("),
    p(")"),
    p("~")
]);
function isURLEncodedPercentEncode(c) {
    return isComponentPercentEncode(c) || extraURLEncodedPercentEncodeSet.has(c);
}
// https://url.spec.whatwg.org/#code-point-percent-encode-after-encoding
// https://url.spec.whatwg.org/#utf-8-percent-encode
// Assuming encoding is always utf-8 allows us to trim one of the logic branches. TODO: support encoding.
// The "-Internal" variant here has code points as JS strings. The external version used by other files has code points
// as JS numbers, like the rest of the codebase.
function utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate) {
    const bytes = utf8Encode(codePoint);
    let output = "";
    for (const byte of bytes){
        // Our percentEncodePredicate operates on bytes, not code points, so this is slightly different from the spec.
        if (!percentEncodePredicate(byte)) {
            output += String.fromCharCode(byte);
        } else {
            output += percentEncode(byte);
        }
    }
    return output;
}
function utf8PercentEncodeCodePoint(codePoint, percentEncodePredicate) {
    return utf8PercentEncodeCodePointInternal(String.fromCodePoint(codePoint), percentEncodePredicate);
}
// https://url.spec.whatwg.org/#string-percent-encode-after-encoding
// https://url.spec.whatwg.org/#string-utf-8-percent-encode
function utf8PercentEncodeString(input, percentEncodePredicate, spaceAsPlus = false) {
    let output = "";
    for (const codePoint of input){
        if (spaceAsPlus && codePoint === " ") {
            output += "+";
        } else {
            output += utf8PercentEncodeCodePointInternal(codePoint, percentEncodePredicate);
        }
    }
    return output;
}
module.exports = {
    isC0ControlPercentEncode,
    isFragmentPercentEncode,
    isQueryPercentEncode,
    isSpecialQueryPercentEncode,
    isPathPercentEncode,
    isUserinfoPercentEncode,
    isURLEncodedPercentEncode,
    percentDecodeString,
    percentDecodeBytes,
    utf8PercentEncodeString,
    utf8PercentEncodeCodePoint
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const tr46 = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/tr46/index.js [app-ssr] (ecmascript)");
const infra = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/infra.js [app-ssr] (ecmascript)");
const { utf8DecodeWithoutBOM } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/encoding.js [app-ssr] (ecmascript)");
const { percentDecodeString, utf8PercentEncodeCodePoint, utf8PercentEncodeString, isC0ControlPercentEncode, isFragmentPercentEncode, isQueryPercentEncode, isSpecialQueryPercentEncode, isPathPercentEncode, isUserinfoPercentEncode } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/percent-encoding.js [app-ssr] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
const specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return [
        ...str
    ].length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return infra.isASCIIAlpha(cp1) && (cp2 === p(":") || cp2 === p("|"));
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|<|>|\?|@|\[|\\|\]|\^|\|/u) !== -1;
}
function containsForbiddenDomainCodePoint(string) {
    return containsForbiddenHostCodePoint(string) || string.search(/[\u0000-\u001F]|%|\u007F/u) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function isNotSpecial(url) {
    return !isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function parseIPv4Number(input) {
    if (input === "") {
        return failure;
    }
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    let regex = /[^0-7]/u;
    if (R === 10) {
        regex = /[^0-9]/u;
    }
    if (R === 16) {
        regex = /[^0-9A-Fa-f]/u;
    }
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return failure;
    }
    const numbers = [];
    for (const part of parts){
        const n = parseIPv4Number(part);
        if (n === failure) {
            return failure;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= 256 ** (5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * 256 ** (3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = `.${output}`;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = Array.from(input, (c)=>c.codePointAt(0));
    if (input[pointer] === p(":")) {
        if (input[pointer + 1] !== p(":")) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === p(":")) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && infra.isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === p(".")) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === p(".") && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!infra.isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(infra.isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === p(":")) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const compress = findTheIPv6AddressCompressedPieceIndex(address);
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isOpaque = false) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (isOpaque) {
        return parseOpaqueHost(input);
    }
    const domain = utf8DecodeWithoutBOM(percentDecodeString(input));
    const asciiDomain = domainToASCII(domain);
    if (asciiDomain === failure) {
        return failure;
    }
    if (endsInANumber(asciiDomain)) {
        return parseIPv4(asciiDomain);
    }
    return asciiDomain;
}
function endsInANumber(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length === 1) {
            return false;
        }
        parts.pop();
    }
    const last = parts[parts.length - 1];
    if (parseIPv4Number(last) !== failure) {
        return true;
    }
    if (/^[0-9]+$/u.test(last)) {
        return true;
    }
    return false;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePoint(input)) {
        return failure;
    }
    return utf8PercentEncodeString(input, isC0ControlPercentEncode);
}
function findTheIPv6AddressCompressedPieceIndex(address) {
    let longestIndex = null;
    let longestSize = 1; // only find elements > 1
    let foundIndex = null;
    let foundSize = 0;
    for(let pieceIndex = 0; pieceIndex < address.length; ++pieceIndex){
        if (address[pieceIndex] !== 0) {
            if (foundSize > longestSize) {
                longestIndex = foundIndex;
                longestSize = foundSize;
            }
            foundIndex = null;
            foundSize = 0;
        } else {
            if (foundIndex === null) {
                foundIndex = pieceIndex;
            }
            ++foundSize;
        }
    }
    if (foundSize > longestSize) {
        return foundIndex;
    }
    return longestIndex;
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return `[${serializeIPv6(host)}]`;
    }
    return host;
}
function domainToASCII(domain, beStrict = false) {
    const result = tr46.toASCII(domain, {
        checkHyphens: beStrict,
        checkBidi: true,
        checkJoiners: true,
        useSTD3ASCIIRules: beStrict,
        transitionalProcessing: false,
        verifyDNSLength: beStrict,
        ignoreInvalidPunycode: false
    });
    if (result === null) {
        return failure;
    }
    if (!beStrict) {
        if (result === "") {
            return failure;
        }
        if (containsForbiddenDomainCodePoint(result)) {
            return failure;
        }
    }
    return result;
}
function trimControlChars(string) {
    // Avoid using regexp because of this V8 bug: https://issues.chromium.org/issues/42204424
    let start = 0;
    let end = string.length;
    for(; start < end; ++start){
        if (string.charCodeAt(start) > 0x20) {
            break;
        }
    }
    for(; end > start; --end){
        if (string.charCodeAt(end - 1) > 0x20) {
            break;
        }
    }
    return string.substring(start, end);
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/ug, "");
}
function shortenPath(url) {
    const { path } = url;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.scheme === "file";
}
function hasAnOpaquePath(url) {
    return typeof url.path === "string";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/u.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = Array.from(this.input, (c)=>c.codePointAt(0));
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this[`parse ${this.state}`](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (infra.isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (infra.isASCIIAlphanumeric(c) || c === p("+") || c === p("-") || c === p(".")) {
        this.buffer += cStr.toLowerCase();
    } else if (c === p(":")) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && this.url.host === "") {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        if (this.stateOverride) {
            if (this.url.port === defaultPort(this.url.scheme)) {
                this.url.port = null;
            }
            return false;
        }
        this.buffer = "";
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== p("/") || this.input[this.pointer + 2] !== p("/")) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === p("/")) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.path = "";
            this.state = "opaque path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || hasAnOpaquePath(this.base) && c !== p("#")) {
        return failure;
    } else if (hasAnOpaquePath(this.base) && c === p("#")) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path;
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === p("/")) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (c === p("/")) {
        this.state = "relative slash";
    } else if (isSpecial(this.url) && c === p("\\")) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        } else if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        } else if (!isNaN(c)) {
            this.url.query = null;
            this.url.path.pop();
            this.state = "path";
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === p("/") || c === p("\\"))) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === p("/")) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === p("/") && this.input[this.pointer + 1] === p("/")) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== p("/") && c !== p("\\")) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === p("@")) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = `%40${this.buffer}`;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === p(":") && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = utf8PercentEncodeCodePoint(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\")) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === p(":") && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        if (this.stateOverride === "hostname") {
            return false;
        }
        const host = parseHost(this.buffer, isNotSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\")) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isNotSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === p("[")) {
            this.arrFlag = true;
        } else if (c === p("]")) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (infra.isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === p("/") || c === p("?") || c === p("#") || isSpecial(this.url) && c === p("\\") || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > 2 ** 16 - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    p("/"),
    p("\\"),
    p("?"),
    p("#")
]);
function startsWithWindowsDriveLetter(input, pointer) {
    const length = input.length - pointer;
    return length >= 2 && isWindowsDriveLetterCodePoints(input[pointer], input[pointer + 1]) && (length === 2 || fileOtherwiseCodePoints.has(input[pointer + 2]));
}
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    this.url.host = "";
    if (c === p("/") || c === p("\\")) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        this.url.host = this.base.host;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        } else if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        } else if (!isNaN(c)) {
            this.url.query = null;
            if (!startsWithWindowsDriveLetter(this.input, this.pointer)) {
                shortenPath(this.url);
            } else {
                this.parseError = true;
                this.url.path = [];
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === p("/") || c === p("\\")) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (!startsWithWindowsDriveLetter(this.input, this.pointer) && isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            }
            this.url.host = this.base.host;
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === p("/") || c === p("\\") || c === p("?") || c === p("#")) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isNotSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === p("\\")) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== p("/") && c !== p("\\")) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === p("?")) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== p("/")) {
            --this.pointer;
        }
    } else if (this.stateOverride && this.url.host === null) {
        this.url.path.push("");
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === p("/") || isSpecial(this.url) && c === p("\\") || !this.stateOverride && (c === p("?") || c === p("#"))) {
        if (isSpecial(this.url) && c === p("\\")) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== p("/") && !(isSpecial(this.url) && c === p("\\"))) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== p("/") && !(isSpecial(this.url) && c === p("\\"))) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                this.buffer = `${this.buffer[0]}:`;
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (c === p("?")) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += utf8PercentEncodeCodePoint(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse opaque path"] = function parseOpaquePath(c) {
    if (c === p("?")) {
        this.url.query = "";
        this.state = "query";
    } else if (c === p("#")) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c === p(" ")) {
        const remaining = this.input[this.pointer + 1];
        if (remaining === p("?") || remaining === p("#")) {
            this.url.path += "%20";
        } else {
            this.url.path += " ";
        }
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== p("%")) {
            this.parseError = true;
        }
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path += utf8PercentEncodeCodePoint(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
        this.encodingOverride = "utf-8";
    }
    if (!this.stateOverride && c === p("#") || isNaN(c)) {
        const queryPercentEncodePredicate = isSpecial(this.url) ? isSpecialQueryPercentEncode : isQueryPercentEncode;
        this.url.query += utf8PercentEncodeString(this.buffer, queryPercentEncodePredicate);
        this.buffer = "";
        if (c === p("#")) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else if (!isNaN(c)) {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (!isNaN(c)) {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === p("%") && (!infra.isASCIIHex(this.input[this.pointer + 1]) || !infra.isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += utf8PercentEncodeCodePoint(c, isFragmentPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = `${url.scheme}:`;
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += `:${url.password}`;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += `:${url.port}`;
        }
    }
    if (url.host === null && !hasAnOpaquePath(url) && url.path.length > 1 && url.path[0] === "") {
        output += "/.";
    }
    output += serializePath(url);
    if (url.query !== null) {
        output += `?${url.query}`;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += `#${url.fragment}`;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = `${tuple.scheme}://`;
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += `:${tuple.port}`;
    }
    return result;
}
function serializePath(url) {
    if (hasAnOpaquePath(url)) {
        return url.path;
    }
    let output = "";
    for (const segment of url.path){
        output += `/${segment}`;
    }
    return output;
}
module.exports.serializeURL = serializeURL;
module.exports.serializePath = serializePath;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            {
                const pathURL = module.exports.parseURL(serializePath(url));
                if (pathURL === null) {
                    return "null";
                }
                if (pathURL.scheme !== "http" && pathURL.scheme !== "https") {
                    return "null";
                }
                return module.exports.serializeURLOrigin(pathURL);
            }
        case "ftp":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // The spec says:
            // > Unfortunate as it is, this is left as an exercise to the reader. When in doubt, return a new opaque origin.
            // Browsers tested so far:
            // - Chrome says "file://", but treats file: URLs as cross-origin for most (all?) purposes; see e.g.
            //   https://bugs.chromium.org/p/chromium/issues/detail?id=37586
            // - Firefox says "null", but treats file: URLs as same-origin sometimes based on directory stuff; see
            //   https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs
            return "null";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return null;
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = utf8PercentEncodeString(username, isUserinfoPercentEncode);
};
module.exports.setThePassword = function(url, password) {
    url.password = utf8PercentEncodeString(password, isUserinfoPercentEncode);
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.hasAnOpaquePath = hasAnOpaquePath;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/urlencoded.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { utf8Encode, utf8DecodeWithoutBOM } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/encoding.js [app-ssr] (ecmascript)");
const { percentDecodeBytes, utf8PercentEncodeString, isURLEncodedPercentEncode } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/percent-encoding.js [app-ssr] (ecmascript)");
function p(char) {
    return char.codePointAt(0);
}
// https://url.spec.whatwg.org/#concept-urlencoded-parser
function parseUrlencoded(input) {
    const sequences = strictlySplitByteSequence(input, p("&"));
    const output = [];
    for (const bytes of sequences){
        if (bytes.length === 0) {
            continue;
        }
        let name, value;
        const indexOfEqual = bytes.indexOf(p("="));
        if (indexOfEqual >= 0) {
            name = bytes.slice(0, indexOfEqual);
            value = bytes.slice(indexOfEqual + 1);
        } else {
            name = bytes;
            value = new Uint8Array(0);
        }
        name = replaceByteInByteSequence(name, 0x2B, 0x20);
        value = replaceByteInByteSequence(value, 0x2B, 0x20);
        const nameString = utf8DecodeWithoutBOM(percentDecodeBytes(name));
        const valueString = utf8DecodeWithoutBOM(percentDecodeBytes(value));
        output.push([
            nameString,
            valueString
        ]);
    }
    return output;
}
// https://url.spec.whatwg.org/#concept-urlencoded-string-parser
function parseUrlencodedString(input) {
    return parseUrlencoded(utf8Encode(input));
}
// https://url.spec.whatwg.org/#concept-urlencoded-serializer
function serializeUrlencoded(tuples) {
    // TODO: accept and use encoding argument
    let output = "";
    for (const [i, tuple] of tuples.entries()){
        const name = utf8PercentEncodeString(tuple[0], isURLEncodedPercentEncode, true);
        const value = utf8PercentEncodeString(tuple[1], isURLEncodedPercentEncode, true);
        if (i !== 0) {
            output += "&";
        }
        output += `${name}=${value}`;
    }
    return output;
}
function strictlySplitByteSequence(buf, cp) {
    const list = [];
    let last = 0;
    let i = buf.indexOf(cp);
    while(i >= 0){
        list.push(buf.slice(last, i));
        last = i + 1;
        i = buf.indexOf(cp, last);
    }
    if (last !== buf.length) {
        list.push(buf.slice(last));
    }
    return list;
}
function replaceByteInByteSequence(buf, from, to) {
    let i = buf.indexOf(from);
    while(i >= 0){
        buf[i] = to;
        i = buf.indexOf(from, i + 1);
    }
    return buf;
}
module.exports = {
    parseUrlencodedString,
    serializeUrlencoded
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URLSearchParams-impl.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const urlencoded = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/urlencoded.js [app-ssr] (ecmascript)");
exports.implementation = class URLSearchParamsImpl {
    constructor(globalObject, constructorArgs, { doNotStripQMark = false }){
        let init = constructorArgs[0];
        this._list = [];
        this._url = null;
        if (!doNotStripQMark && typeof init === "string" && init[0] === "?") {
            init = init.slice(1);
        }
        if (Array.isArray(init)) {
            for (const pair of init){
                if (pair.length !== 2) {
                    throw new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not " + "contain exactly two elements.");
                }
                this._list.push([
                    pair[0],
                    pair[1]
                ]);
            }
        } else if (typeof init === "object" && Object.getPrototypeOf(init) === null) {
            for (const name of Object.keys(init)){
                const value = init[name];
                this._list.push([
                    name,
                    value
                ]);
            }
        } else {
            this._list = urlencoded.parseUrlencodedString(init);
        }
    }
    _updateSteps() {
        if (this._url !== null) {
            let serializedQuery = urlencoded.serializeUrlencoded(this._list);
            if (serializedQuery === "") {
                serializedQuery = null;
            }
            this._url._url.query = serializedQuery;
        }
    }
    get size() {
        return this._list.length;
    }
    append(name, value) {
        this._list.push([
            name,
            value
        ]);
        this._updateSteps();
    }
    delete(name, value) {
        let i = 0;
        while(i < this._list.length){
            if (this._list[i][0] === name && (value === undefined || this._list[i][1] === value)) {
                this._list.splice(i, 1);
            } else {
                i++;
            }
        }
        this._updateSteps();
    }
    get(name) {
        for (const tuple of this._list){
            if (tuple[0] === name) {
                return tuple[1];
            }
        }
        return null;
    }
    getAll(name) {
        const output = [];
        for (const tuple of this._list){
            if (tuple[0] === name) {
                output.push(tuple[1]);
            }
        }
        return output;
    }
    has(name, value) {
        for (const tuple of this._list){
            if (tuple[0] === name && (value === undefined || tuple[1] === value)) {
                return true;
            }
        }
        return false;
    }
    set(name, value) {
        let found = false;
        let i = 0;
        while(i < this._list.length){
            if (this._list[i][0] === name) {
                if (found) {
                    this._list.splice(i, 1);
                } else {
                    found = true;
                    this._list[i][1] = value;
                    i++;
                }
            } else {
                i++;
            }
        }
        if (!found) {
            this._list.push([
                name,
                value
            ]);
        }
        this._updateSteps();
    }
    sort() {
        this._list.sort((a, b)=>{
            if (a[0] < b[0]) {
                return -1;
            }
            if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        });
        this._updateSteps();
    }
    [Symbol.iterator]() {
        return this._list[Symbol.iterator]();
    }
    toString() {
        return urlencoded.serializeUrlencoded(this._list);
    }
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Returns "Type(value) is Object" in ES terminology.
function isObject(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
}
const hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
// Like `Object.assign`, but using `[[GetOwnProperty]]` and `[[DefineOwnProperty]]`
// instead of `[[Get]]` and `[[Set]]` and only allowing objects
function define(target, source) {
    for (const key of Reflect.ownKeys(source)){
        const descriptor = Reflect.getOwnPropertyDescriptor(source, key);
        if (descriptor && !Reflect.defineProperty(target, key, descriptor)) {
            throw new TypeError(`Cannot redefine property: ${String(key)}`);
        }
    }
}
function newObjectInRealm(globalObject, object) {
    const ctorRegistry = initCtorRegistry(globalObject);
    return Object.defineProperties(Object.create(ctorRegistry["%Object.prototype%"]), Object.getOwnPropertyDescriptors(object));
}
const wrapperSymbol = Symbol("wrapper");
const implSymbol = Symbol("impl");
const sameObjectCaches = Symbol("SameObject caches");
const ctorRegistrySymbol = Symbol.for("[webidl2js] constructor registry");
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);
function initCtorRegistry(globalObject) {
    if (hasOwn(globalObject, ctorRegistrySymbol)) {
        return globalObject[ctorRegistrySymbol];
    }
    const ctorRegistry = Object.create(null);
    // In addition to registering all the WebIDL2JS-generated types in the constructor registry,
    // we also register a few intrinsics that we make use of in generated code, since they are not
    // easy to grab from the globalObject variable.
    ctorRegistry["%Object.prototype%"] = globalObject.Object.prototype;
    ctorRegistry["%IteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(new globalObject.Array()[Symbol.iterator]()));
    try {
        ctorRegistry["%AsyncIteratorPrototype%"] = Object.getPrototypeOf(Object.getPrototypeOf(globalObject.eval("(async function* () {})").prototype));
    } catch  {
        ctorRegistry["%AsyncIteratorPrototype%"] = AsyncIteratorPrototype;
    }
    globalObject[ctorRegistrySymbol] = ctorRegistry;
    return ctorRegistry;
}
function getSameObject(wrapper, prop, creator) {
    if (!wrapper[sameObjectCaches]) {
        wrapper[sameObjectCaches] = Object.create(null);
    }
    if (prop in wrapper[sameObjectCaches]) {
        return wrapper[sameObjectCaches][prop];
    }
    wrapper[sameObjectCaches][prop] = creator();
    return wrapper[sameObjectCaches][prop];
}
function wrapperForImpl(impl) {
    return impl ? impl[wrapperSymbol] : null;
}
function implForWrapper(wrapper) {
    return wrapper ? wrapper[implSymbol] : null;
}
function tryWrapperForImpl(impl) {
    const wrapper = wrapperForImpl(impl);
    return wrapper ? wrapper : impl;
}
function tryImplForWrapper(wrapper) {
    const impl = implForWrapper(wrapper);
    return impl ? impl : wrapper;
}
const iterInternalSymbol = Symbol("internal");
function isArrayIndexPropName(P) {
    if (typeof P !== "string") {
        return false;
    }
    const i = P >>> 0;
    if (i === 2 ** 32 - 1) {
        return false;
    }
    const s = `${i}`;
    if (P !== s) {
        return false;
    }
    return true;
}
const byteLengthGetter = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
function isArrayBuffer(value) {
    try {
        byteLengthGetter.call(value);
        return true;
    } catch (e) {
        return false;
    }
}
function iteratorResult([key, value], kind) {
    let result;
    switch(kind){
        case "key":
            result = key;
            break;
        case "value":
            result = value;
            break;
        case "key+value":
            result = [
                key,
                value
            ];
            break;
    }
    return {
        value: result,
        done: false
    };
}
const supportsPropertyIndex = Symbol("supports property index");
const supportedPropertyIndices = Symbol("supported property indices");
const supportsPropertyName = Symbol("supports property name");
const supportedPropertyNames = Symbol("supported property names");
const indexedGet = Symbol("indexed property get");
const indexedSetNew = Symbol("indexed property set new");
const indexedSetExisting = Symbol("indexed property set existing");
const namedGet = Symbol("named property get");
const namedSetNew = Symbol("named property set new");
const namedSetExisting = Symbol("named property set existing");
const namedDelete = Symbol("named property delete");
const asyncIteratorNext = Symbol("async iterator get the next iteration result");
const asyncIteratorReturn = Symbol("async iterator return steps");
const asyncIteratorInit = Symbol("async iterator initialization steps");
const asyncIteratorEOI = Symbol("async iterator end of iteration");
module.exports = exports = {
    isObject,
    hasOwn,
    define,
    newObjectInRealm,
    wrapperSymbol,
    implSymbol,
    getSameObject,
    ctorRegistrySymbol,
    initCtorRegistry,
    wrapperForImpl,
    implForWrapper,
    tryWrapperForImpl,
    tryImplForWrapper,
    iterInternalSymbol,
    isArrayBuffer,
    isArrayIndexPropName,
    supportsPropertyIndex,
    supportedPropertyIndices,
    supportsPropertyName,
    supportedPropertyNames,
    indexedGet,
    indexedSetNew,
    indexedSetExisting,
    namedGet,
    namedSetNew,
    namedSetExisting,
    namedDelete,
    asyncIteratorNext,
    asyncIteratorReturn,
    asyncIteratorInit,
    asyncIteratorEOI,
    iteratorResult
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/Function.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)");
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (typeof value !== "function") {
        throw new globalObject.TypeError(context + " is not a function");
    }
    function invokeTheCallbackFunction(...args) {
        const thisArg = utils.tryWrapperForImpl(this);
        let callResult;
        for(let i = 0; i < args.length; i++){
            args[i] = utils.tryWrapperForImpl(args[i]);
        }
        callResult = Reflect.apply(value, thisArg, args);
        callResult = conversions["any"](callResult, {
            context: context,
            globals: globalObject
        });
        return callResult;
    }
    invokeTheCallbackFunction.construct = (...args)=>{
        for(let i = 0; i < args.length; i++){
            args[i] = utils.tryWrapperForImpl(args[i]);
        }
        let callResult = Reflect.construct(value, args);
        callResult = conversions["any"](callResult, {
            context: context,
            globals: globalObject
        });
        return callResult;
    };
    invokeTheCallbackFunction[utils.wrapperSymbol] = value;
    invokeTheCallbackFunction.objectReference = value;
    return invokeTheCallbackFunction;
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URLSearchParams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)");
const Function = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/Function.js [app-ssr] (ecmascript)");
const newObjectInRealm = utils.newObjectInRealm;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const interfaceName = "URLSearchParams";
exports.is = (value)=>{
    return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = (value)=>{
    return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (exports.is(value)) {
        return utils.implForWrapper(value);
    }
    throw new globalObject.TypeError(`${context} is not of type 'URLSearchParams'.`);
};
exports.createDefaultIterator = (globalObject, target, kind)=>{
    const ctorRegistry = globalObject[ctorRegistrySymbol];
    const iteratorPrototype = ctorRegistry["URLSearchParams Iterator"];
    const iterator = Object.create(iteratorPrototype);
    Object.defineProperty(iterator, utils.iterInternalSymbol, {
        value: {
            target,
            kind,
            index: 0
        },
        configurable: true
    });
    return iterator;
};
function makeWrapper(globalObject, newTarget) {
    let proto;
    if (newTarget !== undefined) {
        proto = newTarget.prototype;
    }
    if (!utils.isObject(proto)) {
        proto = globalObject[ctorRegistrySymbol]["URLSearchParams"].prototype;
    }
    return Object.create(proto);
}
exports.create = (globalObject, constructorArgs, privateData)=>{
    const wrapper = makeWrapper(globalObject);
    return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};
exports.createImpl = (globalObject, constructorArgs, privateData)=>{
    const wrapper = exports.create(globalObject, constructorArgs, privateData);
    return utils.implForWrapper(wrapper);
};
exports._internalSetup = (wrapper, globalObject)=>{};
exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {})=>{
    privateData.wrapper = wrapper;
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: new Impl.implementation(globalObject, constructorArgs, privateData),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper;
};
exports.new = (globalObject, newTarget)=>{
    const wrapper = makeWrapper(globalObject, newTarget);
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: Object.create(Impl.implementation.prototype),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper[implSymbol];
};
const exposed = new Set([
    "Window",
    "Worker"
]);
exports.install = (globalObject, globalNames)=>{
    if (!globalNames.some((globalName)=>exposed.has(globalName))) {
        return;
    }
    const ctorRegistry = utils.initCtorRegistry(globalObject);
    class URLSearchParams {
        constructor(){
            const args = [];
            {
                let curArg = arguments[0];
                if (curArg !== undefined) {
                    if (utils.isObject(curArg)) {
                        if (curArg[Symbol.iterator] !== undefined) {
                            if (!utils.isObject(curArg)) {
                                throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " sequence" + " is not an iterable object.");
                            } else {
                                const V = [];
                                const tmp = curArg;
                                for (let nextItem of tmp){
                                    if (!utils.isObject(nextItem)) {
                                        throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " sequence" + "'s element" + " is not an iterable object.");
                                    } else {
                                        const V = [];
                                        const tmp = nextItem;
                                        for (let nextItem of tmp){
                                            nextItem = conversions["USVString"](nextItem, {
                                                context: "Failed to construct 'URLSearchParams': parameter 1" + " sequence" + "'s element" + "'s element",
                                                globals: globalObject
                                            });
                                            V.push(nextItem);
                                        }
                                        nextItem = V;
                                    }
                                    V.push(nextItem);
                                }
                                curArg = V;
                            }
                        } else {
                            if (!utils.isObject(curArg)) {
                                throw new globalObject.TypeError("Failed to construct 'URLSearchParams': parameter 1" + " record" + " is not an object.");
                            } else {
                                const result = Object.create(null);
                                for (const key of Reflect.ownKeys(curArg)){
                                    const desc = Object.getOwnPropertyDescriptor(curArg, key);
                                    if (desc && desc.enumerable) {
                                        let typedKey = key;
                                        typedKey = conversions["USVString"](typedKey, {
                                            context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s key",
                                            globals: globalObject
                                        });
                                        let typedValue = curArg[key];
                                        typedValue = conversions["USVString"](typedValue, {
                                            context: "Failed to construct 'URLSearchParams': parameter 1" + " record" + "'s value",
                                            globals: globalObject
                                        });
                                        result[typedKey] = typedValue;
                                    }
                                }
                                curArg = result;
                            }
                        }
                    } else {
                        curArg = conversions["USVString"](curArg, {
                            context: "Failed to construct 'URLSearchParams': parameter 1",
                            globals: globalObject
                        });
                    }
                } else {
                    curArg = "";
                }
                args.push(curArg);
            }
            return exports.setup(Object.create(new.target.prototype), globalObject, args);
        }
        append(name, value) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'append' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 2) {
                throw new globalObject.TypeError(`Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].append(...args));
        }
        delete(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'delete' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'delete' on 'URLSearchParams': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].delete(...args));
        }
        get(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return esValue[implSymbol].get(...args);
        }
        getAll(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'getAll' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].getAll(...args));
        }
        has(name) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'has' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'has' on 'URLSearchParams': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return esValue[implSymbol].has(...args);
        }
        set(name, value) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 2) {
                throw new globalObject.TypeError(`Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
                    globals: globalObject
                });
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].set(...args));
        }
        sort() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'sort' called on an object that is not a valid instance of URLSearchParams.");
            }
            return utils.tryWrapperForImpl(esValue[implSymbol].sort());
        }
        toString() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of URLSearchParams.");
            }
            return esValue[implSymbol].toString();
        }
        keys() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'keys' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "key");
        }
        values() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'values' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "value");
        }
        entries() {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'entries' called on an object that is not a valid instance of URLSearchParams.");
            }
            return exports.createDefaultIterator(globalObject, this, "key+value");
        }
        forEach(callback) {
            if (!exports.is(this)) {
                throw new globalObject.TypeError("'forEach' called on an object that is not a valid instance of URLSearchParams.");
            }
            if (arguments.length < 1) {
                throw new globalObject.TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
            }
            callback = Function.convert(globalObject, callback, {
                context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
            });
            const thisArg = arguments[1];
            let pairs = Array.from(this[implSymbol]);
            let i = 0;
            while(i < pairs.length){
                const [key, value] = pairs[i].map(utils.tryWrapperForImpl);
                callback.call(thisArg, value, key, this);
                pairs = Array.from(this[implSymbol]);
                i++;
            }
        }
        get size() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get size' called on an object that is not a valid instance of URLSearchParams.");
            }
            return esValue[implSymbol]["size"];
        }
    }
    Object.defineProperties(URLSearchParams.prototype, {
        append: {
            enumerable: true
        },
        delete: {
            enumerable: true
        },
        get: {
            enumerable: true
        },
        getAll: {
            enumerable: true
        },
        has: {
            enumerable: true
        },
        set: {
            enumerable: true
        },
        sort: {
            enumerable: true
        },
        toString: {
            enumerable: true
        },
        keys: {
            enumerable: true
        },
        values: {
            enumerable: true
        },
        entries: {
            enumerable: true
        },
        forEach: {
            enumerable: true
        },
        size: {
            enumerable: true
        },
        [Symbol.toStringTag]: {
            value: "URLSearchParams",
            configurable: true
        },
        [Symbol.iterator]: {
            value: URLSearchParams.prototype.entries,
            configurable: true,
            writable: true
        }
    });
    ctorRegistry[interfaceName] = URLSearchParams;
    ctorRegistry["URLSearchParams Iterator"] = Object.create(ctorRegistry["%IteratorPrototype%"], {
        [Symbol.toStringTag]: {
            configurable: true,
            value: "URLSearchParams Iterator"
        }
    });
    utils.define(ctorRegistry["URLSearchParams Iterator"], {
        next () {
            const internal = this && this[utils.iterInternalSymbol];
            if (!internal) {
                throw new globalObject.TypeError("next() called on a value that is not a URLSearchParams iterator object");
            }
            const { target, kind, index } = internal;
            const values = Array.from(target[implSymbol]);
            const len = values.length;
            if (index >= len) {
                return newObjectInRealm(globalObject, {
                    value: undefined,
                    done: true
                });
            }
            const pair = values[index];
            internal.index = index + 1;
            return newObjectInRealm(globalObject, utils.iteratorResult(pair.map(utils.tryWrapperForImpl), kind));
        }
    });
    Object.defineProperty(globalObject, interfaceName, {
        configurable: true,
        writable: true,
        value: URLSearchParams
    });
};
const Impl = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URLSearchParams-impl.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)");
const urlencoded = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/urlencoded.js [app-ssr] (ecmascript)");
const URLSearchParams = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URLSearchParams.js [app-ssr] (ecmascript)");
exports.implementation = class URLImpl {
    // Unlike the spec, we duplicate some code between the constructor and canParse, because we want to give useful error
    // messages in the constructor that distinguish between the different causes of failure.
    constructor(globalObject, [url, base]){
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === null) {
                throw new TypeError(`Invalid base URL: ${base}`);
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === null) {
            throw new TypeError(`Invalid URL: ${url}`);
        }
        const query = parsedURL.query !== null ? parsedURL.query : "";
        this._url = parsedURL;
        // We cannot invoke the "new URLSearchParams object" algorithm without going through the constructor, which strips
        // question mark by default. Therefore the doNotStripQMark hack is used.
        this._query = URLSearchParams.createImpl(globalObject, [
            query
        ], {
            doNotStripQMark: true
        });
        this._query._url = this;
    }
    static parse(globalObject, input, base) {
        try {
            return new URLImpl(globalObject, [
                input,
                base
            ]);
        } catch  {
            return null;
        }
    }
    static canParse(url, base) {
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === null) {
                return false;
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === null) {
            return false;
        }
        return true;
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === null) {
            throw new TypeError(`Invalid URL: ${v}`);
        }
        this._url = parsedURL;
        this._query._list.splice(0);
        const { query } = parsedURL;
        if (query !== null) {
            this._query._list = urlencoded.parseUrlencodedString(query);
        }
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return `${this._url.scheme}:`;
    }
    set protocol(v) {
        usm.basicURLParse(`${v}:`, {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return `${usm.serializeHost(url.host)}:${usm.serializeInteger(url.port)}`;
    }
    set host(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        return usm.serializePath(this._url);
    }
    set pathname(v) {
        if (usm.hasAnOpaquePath(this._url)) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return `?${this._url.query}`;
    }
    set search(v) {
        const url = this._url;
        if (v === "") {
            url.query = null;
            this._query._list = [];
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
        this._query._list = urlencoded.parseUrlencodedString(input);
    }
    get searchParams() {
        return this._query;
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return `#${this._url.fragment}`;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)");
const utils = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/utils.js [app-ssr] (ecmascript)");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const interfaceName = "URL";
exports.is = (value)=>{
    return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = (value)=>{
    return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {})=>{
    if (exports.is(value)) {
        return utils.implForWrapper(value);
    }
    throw new globalObject.TypeError(`${context} is not of type 'URL'.`);
};
function makeWrapper(globalObject, newTarget) {
    let proto;
    if (newTarget !== undefined) {
        proto = newTarget.prototype;
    }
    if (!utils.isObject(proto)) {
        proto = globalObject[ctorRegistrySymbol]["URL"].prototype;
    }
    return Object.create(proto);
}
exports.create = (globalObject, constructorArgs, privateData)=>{
    const wrapper = makeWrapper(globalObject);
    return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};
exports.createImpl = (globalObject, constructorArgs, privateData)=>{
    const wrapper = exports.create(globalObject, constructorArgs, privateData);
    return utils.implForWrapper(wrapper);
};
exports._internalSetup = (wrapper, globalObject)=>{};
exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {})=>{
    privateData.wrapper = wrapper;
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: new Impl.implementation(globalObject, constructorArgs, privateData),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper;
};
exports.new = (globalObject, newTarget)=>{
    const wrapper = makeWrapper(globalObject, newTarget);
    exports._internalSetup(wrapper, globalObject);
    Object.defineProperty(wrapper, implSymbol, {
        value: Object.create(Impl.implementation.prototype),
        configurable: true
    });
    wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
    if (Impl.init) {
        Impl.init(wrapper[implSymbol]);
    }
    return wrapper[implSymbol];
};
const exposed = new Set([
    "Window",
    "Worker"
]);
exports.install = (globalObject, globalNames)=>{
    if (!globalNames.some((globalName)=>exposed.has(globalName))) {
        return;
    }
    const ctorRegistry = utils.initCtorRegistry(globalObject);
    class URL {
        constructor(url){
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to construct 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to construct 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to construct 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return exports.setup(Object.create(new.target.prototype), globalObject, args);
        }
        toJSON() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toJSON' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol].toJSON();
        }
        get href() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get href' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["href"];
        }
        set href(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set href' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'href' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["href"] = V;
        }
        toString() {
            const esValue = this;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'toString' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["href"];
        }
        get origin() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get origin' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["origin"];
        }
        get protocol() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get protocol' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["protocol"];
        }
        set protocol(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set protocol' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'protocol' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["protocol"] = V;
        }
        get username() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get username' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["username"];
        }
        set username(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set username' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'username' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["username"] = V;
        }
        get password() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get password' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["password"];
        }
        set password(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set password' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'password' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["password"] = V;
        }
        get host() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get host' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["host"];
        }
        set host(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set host' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'host' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["host"] = V;
        }
        get hostname() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get hostname' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["hostname"];
        }
        set hostname(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set hostname' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'hostname' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["hostname"] = V;
        }
        get port() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get port' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["port"];
        }
        set port(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set port' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'port' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["port"] = V;
        }
        get pathname() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get pathname' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["pathname"];
        }
        set pathname(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set pathname' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'pathname' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["pathname"] = V;
        }
        get search() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get search' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["search"];
        }
        set search(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set search' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'search' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["search"] = V;
        }
        get searchParams() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
            }
            return utils.getSameObject(this, "searchParams", ()=>{
                return utils.tryWrapperForImpl(esValue[implSymbol]["searchParams"]);
            });
        }
        get hash() {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'get hash' called on an object that is not a valid instance of URL.");
            }
            return esValue[implSymbol]["hash"];
        }
        set hash(V) {
            const esValue = this !== null && this !== undefined ? this : globalObject;
            if (!exports.is(esValue)) {
                throw new globalObject.TypeError("'set hash' called on an object that is not a valid instance of URL.");
            }
            V = conversions["USVString"](V, {
                context: "Failed to set the 'hash' property on 'URL': The provided value",
                globals: globalObject
            });
            esValue[implSymbol]["hash"] = V;
        }
        static parse(url) {
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'parse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'parse' on 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'parse' on 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return utils.tryWrapperForImpl(Impl.implementation.parse(globalObject, ...args));
        }
        static canParse(url) {
            if (arguments.length < 1) {
                throw new globalObject.TypeError(`Failed to execute 'canParse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
            }
            const args = [];
            {
                let curArg = arguments[0];
                curArg = conversions["USVString"](curArg, {
                    context: "Failed to execute 'canParse' on 'URL': parameter 1",
                    globals: globalObject
                });
                args.push(curArg);
            }
            {
                let curArg = arguments[1];
                if (curArg !== undefined) {
                    curArg = conversions["USVString"](curArg, {
                        context: "Failed to execute 'canParse' on 'URL': parameter 2",
                        globals: globalObject
                    });
                }
                args.push(curArg);
            }
            return Impl.implementation.canParse(...args);
        }
    }
    Object.defineProperties(URL.prototype, {
        toJSON: {
            enumerable: true
        },
        href: {
            enumerable: true
        },
        toString: {
            enumerable: true
        },
        origin: {
            enumerable: true
        },
        protocol: {
            enumerable: true
        },
        username: {
            enumerable: true
        },
        password: {
            enumerable: true
        },
        host: {
            enumerable: true
        },
        hostname: {
            enumerable: true
        },
        port: {
            enumerable: true
        },
        pathname: {
            enumerable: true
        },
        search: {
            enumerable: true
        },
        searchParams: {
            enumerable: true
        },
        hash: {
            enumerable: true
        },
        [Symbol.toStringTag]: {
            value: "URL",
            configurable: true
        }
    });
    Object.defineProperties(URL, {
        parse: {
            enumerable: true
        },
        canParse: {
            enumerable: true
        }
    });
    ctorRegistry[interfaceName] = URL;
    Object.defineProperty(globalObject, interfaceName, {
        configurable: true,
        writable: true,
        value: URL
    });
    if (globalNames.includes("Window")) {
        Object.defineProperty(globalObject, "webkitURL", {
            configurable: true,
            writable: true,
            value: URL
        });
    }
};
const Impl = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URL-impl.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/webidl2js-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const URL = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URL.js [app-ssr] (ecmascript)");
const URLSearchParams = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/URLSearchParams.js [app-ssr] (ecmascript)");
exports.URL = URL;
exports.URLSearchParams = URLSearchParams;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { URL, URLSearchParams } = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/webidl2js-wrapper.js [app-ssr] (ecmascript)");
const urlStateMachine = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/url-state-machine.js [app-ssr] (ecmascript)");
const percentEncoding = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/lib/percent-encoding.js [app-ssr] (ecmascript)");
const sharedGlobalObject = {
    Array,
    Object,
    Promise,
    String,
    TypeError
};
URL.install(sharedGlobalObject, [
    "Window"
]);
URLSearchParams.install(sharedGlobalObject, [
    "Window"
]);
exports.URL = sharedGlobalObject.URL;
exports.URLSearchParams = sharedGlobalObject.URLSearchParams;
exports.parseURL = urlStateMachine.parseURL;
exports.basicURLParse = urlStateMachine.basicURLParse;
exports.serializeURL = urlStateMachine.serializeURL;
exports.serializePath = urlStateMachine.serializePath;
exports.serializeHost = urlStateMachine.serializeHost;
exports.serializeInteger = urlStateMachine.serializeInteger;
exports.serializeURLOrigin = urlStateMachine.serializeURLOrigin;
exports.setTheUsername = urlStateMachine.setTheUsername;
exports.setThePassword = urlStateMachine.setThePassword;
exports.cannotHaveAUsernamePasswordPort = urlStateMachine.cannotHaveAUsernamePasswordPort;
exports.hasAnOpaquePath = urlStateMachine.hasAnOpaquePath;
exports.percentDecodeString = percentEncoding.percentDecodeString;
exports.percentDecodeBytes = percentEncoding.percentDecodeBytes;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/webidl-conversions/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function makeException(ErrorType, message, options) {
    if (options.globals) {
        ErrorType = options.globals[ErrorType.name];
    }
    return new ErrorType(`${options.context ? options.context : "Value"} ${message}.`);
}
function toNumber(value, options) {
    if (typeof value === "bigint") {
        throw makeException(TypeError, "is a BigInt which cannot be converted to a number", options);
    }
    if (!options.globals) {
        return Number(value);
    }
    return options.globals.Number(value);
}
// Round x to the nearest integer, choosing the even integer if it lies halfway between two.
function evenRound(x) {
    // There are four cases for numbers with fractional part being .5:
    //
    // case |     x     | floor(x) | round(x) | expected | x <> 0 | x % 1 | x & 1 |   example
    //   1  |  2n + 0.5 |  2n      |  2n + 1  |  2n      |   >    |  0.5  |   0   |  0.5 ->  0
    //   2  |  2n + 1.5 |  2n + 1  |  2n + 2  |  2n + 2  |   >    |  0.5  |   1   |  1.5 ->  2
    //   3  | -2n - 0.5 | -2n - 1  | -2n      | -2n      |   <    | -0.5  |   0   | -0.5 ->  0
    //   4  | -2n - 1.5 | -2n - 2  | -2n - 1  | -2n - 2  |   <    | -0.5  |   1   | -1.5 -> -2
    // (where n is a non-negative integer)
    //
    // Branch here for cases 1 and 4
    if (x > 0 && x % 1 === +0.5 && (x & 1) === 0 || x < 0 && x % 1 === -0.5 && (x & 1) === 1) {
        return censorNegativeZero(Math.floor(x));
    }
    return censorNegativeZero(Math.round(x));
}
function integerPart(n) {
    return censorNegativeZero(Math.trunc(n));
}
function sign(x) {
    return x < 0 ? -1 : 1;
}
function modulo(x, y) {
    // https://tc39.github.io/ecma262/#eqn-modulo
    // Note that http://stackoverflow.com/a/4467559/3191 does NOT work for large modulos
    const signMightNotMatch = x % y;
    if (sign(y) !== sign(signMightNotMatch)) {
        return signMightNotMatch + y;
    }
    return signMightNotMatch;
}
function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
}
function createIntegerConversion(bitLength, { unsigned }) {
    let lowerBound, upperBound;
    if (unsigned) {
        lowerBound = 0;
        upperBound = 2 ** bitLength - 1;
    } else {
        lowerBound = -(2 ** (bitLength - 1));
        upperBound = 2 ** (bitLength - 1) - 1;
    }
    const twoToTheBitLength = 2 ** bitLength;
    const twoToOneLessThanTheBitLength = 2 ** (bitLength - 1);
    return (value, options = {})=>{
        let x = toNumber(value, options);
        x = censorNegativeZero(x);
        if (options.enforceRange) {
            if (!Number.isFinite(x)) {
                throw makeException(TypeError, "is not a finite number", options);
            }
            x = integerPart(x);
            if (x < lowerBound || x > upperBound) {
                throw makeException(TypeError, `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`, options);
            }
            return x;
        }
        if (!Number.isNaN(x) && options.clamp) {
            x = Math.min(Math.max(x, lowerBound), upperBound);
            x = evenRound(x);
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = integerPart(x);
        // Math.pow(2, 64) is not accurately representable in JavaScript, so try to avoid these per-spec operations if
        // possible. Hopefully it's an optimization for the non-64-bitLength cases too.
        if (x >= lowerBound && x <= upperBound) {
            return x;
        }
        // These will not work great for bitLength of 64, but oh well. See the README for more details.
        x = modulo(x, twoToTheBitLength);
        if (!unsigned && x >= twoToOneLessThanTheBitLength) {
            return x - twoToTheBitLength;
        }
        return x;
    };
}
function createLongLongConversion(bitLength, { unsigned }) {
    const upperBound = Number.MAX_SAFE_INTEGER;
    const lowerBound = unsigned ? 0 : Number.MIN_SAFE_INTEGER;
    const asBigIntN = unsigned ? BigInt.asUintN : BigInt.asIntN;
    return (value, options = {})=>{
        let x = toNumber(value, options);
        x = censorNegativeZero(x);
        if (options.enforceRange) {
            if (!Number.isFinite(x)) {
                throw makeException(TypeError, "is not a finite number", options);
            }
            x = integerPart(x);
            if (x < lowerBound || x > upperBound) {
                throw makeException(TypeError, `is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`, options);
            }
            return x;
        }
        if (!Number.isNaN(x) && options.clamp) {
            x = Math.min(Math.max(x, lowerBound), upperBound);
            x = evenRound(x);
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        let xBigInt = BigInt(integerPart(x));
        xBigInt = asBigIntN(bitLength, xBigInt);
        return Number(xBigInt);
    };
}
exports.any = (value)=>{
    return value;
};
exports.undefined = ()=>{
    return undefined;
};
exports.boolean = (value)=>{
    return Boolean(value);
};
exports.byte = createIntegerConversion(8, {
    unsigned: false
});
exports.octet = createIntegerConversion(8, {
    unsigned: true
});
exports.short = createIntegerConversion(16, {
    unsigned: false
});
exports["unsigned short"] = createIntegerConversion(16, {
    unsigned: true
});
exports.long = createIntegerConversion(32, {
    unsigned: false
});
exports["unsigned long"] = createIntegerConversion(32, {
    unsigned: true
});
exports["long long"] = createLongLongConversion(64, {
    unsigned: false
});
exports["unsigned long long"] = createLongLongConversion(64, {
    unsigned: true
});
exports.double = (value, options = {})=>{
    const x = toNumber(value, options);
    if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite floating-point value", options);
    }
    return x;
};
exports["unrestricted double"] = (value, options = {})=>{
    const x = toNumber(value, options);
    return x;
};
exports.float = (value, options = {})=>{
    const x = toNumber(value, options);
    if (!Number.isFinite(x)) {
        throw makeException(TypeError, "is not a finite floating-point value", options);
    }
    if (Object.is(x, -0)) {
        return x;
    }
    const y = Math.fround(x);
    if (!Number.isFinite(y)) {
        throw makeException(TypeError, "is outside the range of a single-precision floating-point value", options);
    }
    return y;
};
exports["unrestricted float"] = (value, options = {})=>{
    const x = toNumber(value, options);
    if (isNaN(x)) {
        return x;
    }
    if (Object.is(x, -0)) {
        return x;
    }
    return Math.fround(x);
};
exports.DOMString = (value, options = {})=>{
    if (options.treatNullAsEmptyString && value === null) {
        return "";
    }
    if (typeof value === "symbol") {
        throw makeException(TypeError, "is a symbol, which cannot be converted to a string", options);
    }
    const StringCtor = options.globals ? options.globals.String : String;
    return StringCtor(value);
};
exports.ByteString = (value, options = {})=>{
    const x = exports.DOMString(value, options);
    let c;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw makeException(TypeError, "is not a valid ByteString", options);
        }
    }
    return x;
};
exports.USVString = (value, options = {})=>{
    const S = exports.DOMString(value, options);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else if (i === n - 1) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            const d = S.charCodeAt(i + 1);
            if (0xDC00 <= d && d <= 0xDFFF) {
                const a = c & 0x3FF;
                const b = d & 0x3FF;
                U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                ++i;
            } else {
                U.push(String.fromCodePoint(0xFFFD));
            }
        }
    }
    return U.join("");
};
exports.object = (value, options = {})=>{
    if (value === null || typeof value !== "object" && typeof value !== "function") {
        throw makeException(TypeError, "is not an object", options);
    }
    return value;
};
const abByteLengthGetter = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const sabByteLengthGetter = typeof SharedArrayBuffer === "function" ? Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, "byteLength").get : null;
function isNonSharedArrayBuffer(value) {
    try {
        // This will throw on SharedArrayBuffers, but not detached ArrayBuffers.
        // (The spec says it should throw, but the spec conflicts with implementations: https://github.com/tc39/ecma262/issues/678)
        abByteLengthGetter.call(value);
        return true;
    } catch  {
        return false;
    }
}
function isSharedArrayBuffer(value) {
    try {
        sabByteLengthGetter.call(value);
        return true;
    } catch  {
        return false;
    }
}
function isArrayBufferDetached(value) {
    try {
        // eslint-disable-next-line no-new
        new Uint8Array(value);
        return false;
    } catch  {
        return true;
    }
}
exports.ArrayBuffer = (value, options = {})=>{
    if (!isNonSharedArrayBuffer(value)) {
        if (options.allowShared && !isSharedArrayBuffer(value)) {
            throw makeException(TypeError, "is not an ArrayBuffer or SharedArrayBuffer", options);
        }
        throw makeException(TypeError, "is not an ArrayBuffer", options);
    }
    if (isArrayBufferDetached(value)) {
        throw makeException(TypeError, "is a detached ArrayBuffer", options);
    }
    return value;
};
const dvByteLengthGetter = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
exports.DataView = (value, options = {})=>{
    try {
        dvByteLengthGetter.call(value);
    } catch (e) {
        throw makeException(TypeError, "is not a DataView", options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
        throw makeException(TypeError, "is backed by a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
        throw makeException(TypeError, "is backed by a detached ArrayBuffer", options);
    }
    return value;
};
// Returns the unforgeable `TypedArray` constructor name or `undefined`,
// if the `this` value isn't a valid `TypedArray` object.
//
// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
const typedArrayNameGetter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
[
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Float32Array,
    Float64Array
].forEach((func)=>{
    const { name } = func;
    const article = /^[AEIOU]/u.test(name) ? "an" : "a";
    exports[name] = (value, options = {})=>{
        if (!ArrayBuffer.isView(value) || typedArrayNameGetter.call(value) !== name) {
            throw makeException(TypeError, `is not ${article} ${name} object`, options);
        }
        if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
            throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
        }
        if (isArrayBufferDetached(value.buffer)) {
            throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
        }
        return value;
    };
});
// Common definitions
exports.ArrayBufferView = (value, options = {})=>{
    if (!ArrayBuffer.isView(value)) {
        throw makeException(TypeError, "is not a view on an ArrayBuffer or SharedArrayBuffer", options);
    }
    if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
        throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
    }
    if (isArrayBufferDetached(value.buffer)) {
        throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
    }
    return value;
};
exports.BufferSource = (value, options = {})=>{
    if (ArrayBuffer.isView(value)) {
        if (!options.allowShared && isSharedArrayBuffer(value.buffer)) {
            throw makeException(TypeError, "is a view on a SharedArrayBuffer, which is not allowed", options);
        }
        if (isArrayBufferDetached(value.buffer)) {
            throw makeException(TypeError, "is a view on a detached ArrayBuffer", options);
        }
        return value;
    }
    if (!options.allowShared && !isNonSharedArrayBuffer(value)) {
        throw makeException(TypeError, "is not an ArrayBuffer or a view on one", options);
    }
    if (options.allowShared && !isSharedArrayBuffer(value) && !isNonSharedArrayBuffer(value)) {
        throw makeException(TypeError, "is not an ArrayBuffer, SharedArrayBuffer, or a view on one", options);
    }
    if (isArrayBufferDetached(value)) {
        throw makeException(TypeError, "is a detached ArrayBuffer", options);
    }
    return value;
};
exports.DOMTimeStamp = exports["unsigned long long"];
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mongodb-connection-string-url/lib/redact.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redactConnectionString = exports.redactValidConnectionString = void 0;
const index_1 = __importStar(__turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mongodb-connection-string-url/lib/index.js [app-ssr] (ecmascript)"));
function redactValidConnectionString(inputUrl, options) {
    var _a, _b;
    const url = inputUrl.clone();
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '_credentials_';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    if ((url.username || url.password) && redactUsernames) {
        url.username = replacementString;
        url.password = '';
    } else if (url.password) {
        url.password = replacementString;
    }
    if (url.searchParams.has('authMechanismProperties')) {
        const props = new index_1.CommaAndColonSeparatedRecord(url.searchParams.get('authMechanismProperties'));
        if (props.get('AWS_SESSION_TOKEN')) {
            props.set('AWS_SESSION_TOKEN', replacementString);
            url.searchParams.set('authMechanismProperties', props.toString());
        }
    }
    if (url.searchParams.has('tlsCertificateKeyFilePassword')) {
        url.searchParams.set('tlsCertificateKeyFilePassword', replacementString);
    }
    if (url.searchParams.has('proxyUsername') && redactUsernames) {
        url.searchParams.set('proxyUsername', replacementString);
    }
    if (url.searchParams.has('proxyPassword')) {
        url.searchParams.set('proxyPassword', replacementString);
    }
    return url;
}
exports.redactValidConnectionString = redactValidConnectionString;
function redactConnectionString(uri, options) {
    var _a, _b;
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '<credentials>';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    let parsed;
    try {
        parsed = new index_1.default(uri);
    } catch (_c) {}
    if (parsed) {
        options = {
            ...options,
            replacementString: '___credentials___'
        };
        return parsed.redact(options).toString().replace(/___credentials___/g, replacementString);
    }
    const R = replacementString;
    const replacements = [
        (uri)=>uri.replace(redactUsernames ? /(\/\/)(.*)(@)/g : /(\/\/[^@]*:)(.*)(@)/g, `$1${R}$3`),
        (uri)=>uri.replace(/(AWS_SESSION_TOKEN(:|%3A))([^,&]+)/gi, `$1${R}`),
        (uri)=>uri.replace(/(tlsCertificateKeyFilePassword=)([^&]+)/gi, `$1${R}`),
        (uri)=>redactUsernames ? uri.replace(/(proxyUsername=)([^&]+)/gi, `$1${R}`) : uri,
        (uri)=>uri.replace(/(proxyPassword=)([^&]+)/gi, `$1${R}`)
    ];
    for (const replacer of replacements){
        uri = replacer(uri);
    }
    return uri;
}
exports.redactConnectionString = redactConnectionString; //# sourceMappingURL=redact.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mongodb-connection-string-url/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommaAndColonSeparatedRecord = exports.ConnectionString = exports.redactConnectionString = void 0;
const whatwg_url_1 = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/whatwg-url/index.js [app-ssr] (ecmascript)");
const redact_1 = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mongodb-connection-string-url/lib/redact.js [app-ssr] (ecmascript)");
Object.defineProperty(exports, "redactConnectionString", {
    enumerable: true,
    get: function() {
        return redact_1.redactConnectionString;
    }
});
const DUMMY_HOSTNAME = '__this_is_a_placeholder__';
function connectionStringHasValidScheme(connectionString) {
    return connectionString.startsWith('mongodb://') || connectionString.startsWith('mongodb+srv://');
}
const HOSTS_REGEX = /^(?<protocol>[^/]+):\/\/(?:(?<username>[^:@]*)(?::(?<password>[^@]*))?@)?(?<hosts>(?!:)[^/?@]*)(?<rest>.*)/;
class CaseInsensitiveMap extends Map {
    delete(name) {
        return super.delete(this._normalizeKey(name));
    }
    get(name) {
        return super.get(this._normalizeKey(name));
    }
    has(name) {
        return super.has(this._normalizeKey(name));
    }
    set(name, value) {
        return super.set(this._normalizeKey(name), value);
    }
    _normalizeKey(name) {
        name = `${name}`;
        for (const key of this.keys()){
            if (key.toLowerCase() === name.toLowerCase()) {
                name = key;
                break;
            }
        }
        return name;
    }
}
function caseInsenstiveURLSearchParams(Ctor) {
    return class CaseInsenstiveURLSearchParams extends Ctor {
        append(name, value) {
            return super.append(this._normalizeKey(name), value);
        }
        delete(name) {
            return super.delete(this._normalizeKey(name));
        }
        get(name) {
            return super.get(this._normalizeKey(name));
        }
        getAll(name) {
            return super.getAll(this._normalizeKey(name));
        }
        has(name) {
            return super.has(this._normalizeKey(name));
        }
        set(name, value) {
            return super.set(this._normalizeKey(name), value);
        }
        keys() {
            return super.keys();
        }
        values() {
            return super.values();
        }
        entries() {
            return super.entries();
        }
        [Symbol.iterator]() {
            return super[Symbol.iterator]();
        }
        _normalizeKey(name) {
            return CaseInsensitiveMap.prototype._normalizeKey.call(this, name);
        }
    };
}
class URLWithoutHost extends whatwg_url_1.URL {
}
class MongoParseError extends Error {
    get name() {
        return 'MongoParseError';
    }
}
class ConnectionString extends URLWithoutHost {
    constructor(uri, options = {}){
        var _a;
        const { looseValidation } = options;
        if (!looseValidation && !connectionStringHasValidScheme(uri)) {
            throw new MongoParseError('Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"');
        }
        const match = uri.match(HOSTS_REGEX);
        if (!match) {
            throw new MongoParseError(`Invalid connection string "${uri}"`);
        }
        const { protocol, username, password, hosts, rest } = (_a = match.groups) !== null && _a !== void 0 ? _a : {};
        if (!looseValidation) {
            if (!protocol || !hosts) {
                throw new MongoParseError(`Protocol and host list are required in "${uri}"`);
            }
            try {
                decodeURIComponent(username !== null && username !== void 0 ? username : '');
                decodeURIComponent(password !== null && password !== void 0 ? password : '');
            } catch (err) {
                throw new MongoParseError(err.message);
            }
            const illegalCharacters = /[:/?#[\]@]/gi;
            if (username === null || username === void 0 ? void 0 : username.match(illegalCharacters)) {
                throw new MongoParseError(`Username contains unescaped characters ${username}`);
            }
            if (!username || !password) {
                const uriWithoutProtocol = uri.replace(`${protocol}://`, '');
                if (uriWithoutProtocol.startsWith('@') || uriWithoutProtocol.startsWith(':')) {
                    throw new MongoParseError('URI contained empty userinfo section');
                }
            }
            if (password === null || password === void 0 ? void 0 : password.match(illegalCharacters)) {
                throw new MongoParseError('Password contains unescaped characters');
            }
        }
        let authString = '';
        if (typeof username === 'string') authString += username;
        if (typeof password === 'string') authString += `:${password}`;
        if (authString) authString += '@';
        try {
            super(`${protocol.toLowerCase()}://${authString}${DUMMY_HOSTNAME}${rest}`);
        } catch (err) {
            if (looseValidation) {
                new ConnectionString(uri, {
                    ...options,
                    looseValidation: false
                });
            }
            if (typeof err.message === 'string') {
                err.message = err.message.replace(DUMMY_HOSTNAME, hosts);
            }
            throw err;
        }
        this._hosts = hosts.split(',');
        if (!looseValidation) {
            if (this.isSRV && this.hosts.length !== 1) {
                throw new MongoParseError('mongodb+srv URI cannot have multiple service names');
            }
            if (this.isSRV && this.hosts.some((host)=>host.includes(':'))) {
                throw new MongoParseError('mongodb+srv URI cannot have port number');
            }
        }
        if (!this.pathname) {
            this.pathname = '/';
        }
        Object.setPrototypeOf(this.searchParams, caseInsenstiveURLSearchParams(this.searchParams.constructor).prototype);
    }
    get host() {
        return DUMMY_HOSTNAME;
    }
    set host(_ignored) {
        throw new Error('No single host for connection string');
    }
    get hostname() {
        return DUMMY_HOSTNAME;
    }
    set hostname(_ignored) {
        throw new Error('No single host for connection string');
    }
    get port() {
        return '';
    }
    set port(_ignored) {
        throw new Error('No single host for connection string');
    }
    get href() {
        return this.toString();
    }
    set href(_ignored) {
        throw new Error('Cannot set href for connection strings');
    }
    get isSRV() {
        return this.protocol.includes('srv');
    }
    get hosts() {
        return this._hosts;
    }
    set hosts(list) {
        this._hosts = list;
    }
    toString() {
        return super.toString().replace(DUMMY_HOSTNAME, this.hosts.join(','));
    }
    clone() {
        return new ConnectionString(this.toString(), {
            looseValidation: true
        });
    }
    redact(options) {
        return (0, redact_1.redactValidConnectionString)(this, options);
    }
    typedSearchParams() {
        const sametype = false && new (caseInsenstiveURLSearchParams(whatwg_url_1.URLSearchParams))();
        return this.searchParams;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash } = this;
        return {
            href,
            origin,
            protocol,
            username,
            password,
            hosts,
            pathname,
            search,
            searchParams,
            hash
        };
    }
}
exports.ConnectionString = ConnectionString;
class CommaAndColonSeparatedRecord extends CaseInsensitiveMap {
    constructor(from){
        super();
        for (const entry of (from !== null && from !== void 0 ? from : '').split(',')){
            if (!entry) continue;
            const colonIndex = entry.indexOf(':');
            if (colonIndex === -1) {
                this.set(entry, '');
            } else {
                this.set(entry.slice(0, colonIndex), entry.slice(colonIndex + 1));
            }
        }
    }
    toString() {
        return [
            ...this
        ].map((entry)=>entry.join(':')).join(',');
    }
}
exports.CommaAndColonSeparatedRecord = CommaAndColonSeparatedRecord;
exports.default = ConnectionString; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const getCodePoint = (character)=>character.codePointAt(0);
const first = (x)=>x[0];
const last = (x)=>x[x.length - 1];
function toCodePoints(input) {
    const codepoints = [];
    const size = input.length;
    for(let i = 0; i < size; i += 1){
        const before = input.charCodeAt(i);
        if (before >= 0xd800 && before <= 0xdbff && size > i + 1) {
            const next = input.charCodeAt(i + 1);
            if (next >= 0xdc00 && next <= 0xdfff) {
                codepoints.push((before - 0xd800) * 0x400 + next - 0xdc00 + 0x10000);
                i += 1;
                continue;
            }
        }
        codepoints.push(before);
    }
    return codepoints;
}
function saslprep({ unassigned_code_points, commonly_mapped_to_nothing, non_ASCII_space_characters, prohibited_characters, bidirectional_r_al, bidirectional_l }, input, opts = {}) {
    const mapping2space = non_ASCII_space_characters;
    const mapping2nothing = commonly_mapped_to_nothing;
    if (typeof input !== 'string') {
        throw new TypeError('Expected string.');
    }
    if (input.length === 0) {
        return '';
    }
    const mapped_input = toCodePoints(input).map((character)=>mapping2space.get(character) ? 0x20 : character).filter((character)=>!mapping2nothing.get(character));
    const normalized_input = String.fromCodePoint.apply(null, mapped_input).normalize('NFKC');
    const normalized_map = toCodePoints(normalized_input);
    const hasProhibited = normalized_map.some((character)=>prohibited_characters.get(character));
    if (hasProhibited) {
        throw new Error('Prohibited character, see https://tools.ietf.org/html/rfc4013#section-2.3');
    }
    if (opts.allowUnassigned !== true) {
        const hasUnassigned = normalized_map.some((character)=>unassigned_code_points.get(character));
        if (hasUnassigned) {
            throw new Error('Unassigned code point, see https://tools.ietf.org/html/rfc4013#section-2.5');
        }
    }
    const hasBidiRAL = normalized_map.some((character)=>bidirectional_r_al.get(character));
    const hasBidiL = normalized_map.some((character)=>bidirectional_l.get(character));
    if (hasBidiRAL && hasBidiL) {
        throw new Error('String must not contain RandALCat and LCat at the same time,' + ' see https://tools.ietf.org/html/rfc3454#section-6');
    }
    const isFirstBidiRAL = bidirectional_r_al.get(getCodePoint(first(normalized_input)));
    const isLastBidiRAL = bidirectional_r_al.get(getCodePoint(last(normalized_input)));
    if (hasBidiRAL && !(isFirstBidiRAL && isLastBidiRAL)) {
        throw new Error('Bidirectional RandALCat character must be the first and the last' + ' character of the string, see https://tools.ietf.org/html/rfc3454#section-6');
    }
    return normalized_input;
}
saslprep.saslprep = saslprep;
saslprep.default = saslprep;
module.exports = saslprep; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/memory-code-points.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createMemoryCodePoints = createMemoryCodePoints;
const sparse_bitfield_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/sparse-bitfield/index.js [app-ssr] (ecmascript)"));
function createMemoryCodePoints(data) {
    let offset = 0;
    function read() {
        const size = data.readUInt32BE(offset);
        offset += 4;
        const codepoints = data.slice(offset, offset + size);
        offset += size;
        return (0, sparse_bitfield_1.default)({
            buffer: codepoints
        });
    }
    const unassigned_code_points = read();
    const commonly_mapped_to_nothing = read();
    const non_ASCII_space_characters = read();
    const prohibited_characters = read();
    const bidirectional_r_al = read();
    const bidirectional_l = read();
    return {
        unassigned_code_points,
        commonly_mapped_to_nothing,
        non_ASCII_space_characters,
        prohibited_characters,
        bidirectional_r_al,
        bidirectional_l
    };
} //# sourceMappingURL=memory-code-points.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/code-points-data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const zlib_1 = __turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)");
exports.default = (0, zlib_1.gunzipSync)(Buffer.from('H4sIAAAAAAACA+3dTYgcaRkA4LemO9Mhxm0FITnE9Cwr4jHgwgZ22B6YywqCJ0HQg5CL4sGTuOjCtGSF4CkHEW856MlTQHD3EJnWkU0Owh5VxE3LHlYQdNxd2U6mU59UV/d09fw4M2EySSXPAzNdP1/9fX/99bzVNZEN4jisRDulVFnQmLxm1aXF9Id/2/xMxNJ4XZlg576yuYlGt9gupV6xoFf8jhu9YvulVrFlp5XSx+lfvYhORGPXvqIRWSxERKtIm8bKFd10WNfKDS5Fo9jJWrq2+M2IlW+8uHgl/+BsROfPF4v5L7148Ur68Sha6dqZpYiVVy8tvLCWXo80Sf/lS89dGX2wHGvpzoXVn75/YWH5wmqe8uika82ViJXTy83Ve2k5Urozm38wm4/ls6t5uT6yfsTSJ7J3T0VKt8c5ExEXI8aFkH729c3eT+7EC6ca8cVULZUiYacX0R5PNWNxlh9L1y90q5kyzrpyy+9WcvOV6URntqw7La9sNVstXyczWVaWYbaaTYqzOHpr7pyiNT3/YzKuT63Z/FqKZlFTiuXtFM2vVOtIq7jiyKJbWZaOWD0euz0yoV2Z7kY0xq2x0YhfzVpmM5px9nTEH7JZ0ot5u39p0ma75Z472/s/H+2yr2inYyuq7fMvJivH2rM72N/Z3lyL31F2b1ya1P0zn816k2KP6JU9UzseucdQH5YqVeH/lFajSN2udg+TLJ9rksNxlvV2lki19rXKI43TPLejFu4ov7k3nMbhyhfY3Xb37f8BAGCf0eMTOH5szf154KmnNgKcnLb+Fzi2AfXktbN7fJelwTAiO/W5uQ2KINXRYu+znqo/WTAdLadURHmy3qciazd3bra4T3w16/f7t7Ms9U5gfJu10955sx1r3vmhBAAAAAAAgId20J1iZbDowNvIjuH427Gr5l/eiC+8OplZON8sVjx/qr9y+Pj+YRItT+NqAM+kkZs3AAAAAID6yfx1FwCAI97/dCh1/ub6SA0AAAAAAAAAgNoT/wcAAAAAAACA+hP/BwAAAAAAAID6E/8HAAAAAAAAgPoT/wcAAAAAAACA+hP/BwAAAAAAAID6E/8HAAAAAAAAgPoT/wcAAAAAAACA+hP/BwAAAAAAAID6E/8HAAAAAAAAgPoT/wcAAAAAAACA+hutp5SiQpYAAAAAAAAAQO2MIpZiT804flnAE2fhwjOeAZXr76kOAAAAAAAA8FjNf4N/l0NE3U/vuVQskLpSd4/Yh2xu9xTu0tFeeNYsLI2f/VMdNxTzj6Je9E/+6pp6Nn3awW3A54goe4Bss6v+PGsjQGMAAAAAAOBp5XEgwH6e7J7rwEQHRb/XvAMAAAAAAAA8yzoDeQDwVGjIAgAAAAAAAACoPfF/AAAAAAAAAKg/8X8AAAAAAAAAqD/xfwAAAAAAAACoP/F/AAAAAAAAAKg/8X8AAAAAAAAAqD/xfwAAAAAAAACoP/F/AAAAAAAAAKg/8X8AAAAAAAAAqD/xfwAAAAAAAACoP/F/AAAAAAAAAKg/8X8AAAAAAAAAqL/GSkSkClkCAAAAAAAAALXTSAAAAAAAAABA3Y1kAQAAAAAAAADUX8RSXZ9dsHC9+M8Fg2Ex/em1lAZpEBGttcrVjZqLEa+k0XpKw9mG4zWx4ukPUMhkAQAAAAAAABzBqbSe3//rXOS9HxGdo4TqR2XkutCdBu+LaPZw/lBbO7cbHnh2C7N7AIo4evEznllqLqWUp/LnYOtpM2bnOH66wI1+9GO4sOuISwv/TOlumu56FDv3NZhc4mR9v7zYIrafr40j/Cccvj9Xns3t3mu99E7qxUv3bqS0/ouNH/08++RGemfQ+nsx/5uNXsQPGulynPvv3ZTW37zd+1ovrqaYpP/122X6Xpx779Z3zr/3YOPKW1lkaRDf31pPaf3j/msRsVGkL+d/f+/m4sJsPm1cfSsr16e8m9Ldj/KsnyIuR3nXw83Is3EhxLd/2V773ks3m/cj/THKUummdP9qKhIOImuOU0Xjwb3y+oqt735rpTetVbF9n8R4x9crRfO77TKqVOZpDclv5bfK18lMnk+q0K18UpxF/RrGXE0Zxtqx3tWSj+vxbL4XaasfKb0dRbtLW73JsfPGg177H+OmGKlfvS1msllt7JEJm9XOJqXR+Fkfo1H66uy5H1v3Xx5+uJmGLw9jro2u7Loj4PnuR6+f+e3d261+eazNhzrL7X83MohoHpS4PddV8ki1it61//pw1g7z6p1U/26Nm2llST57B5rUvuG0XqSU/rPd7jYrqWcbd+beJQ77BgPMDwn37/8BAGCf0eMTOH4cPlufv9VGgJOzqf8Fjm1APXkd7B7f5dF57GPMaWy/MTvjvNvtXj6h8W2+GXvnzXaseeeHEgAAAAAAAB7aQXeKlcGiadBoEOeLb2dtpGOL2MyOtf391a3P/zD96c3JzIP3t4oV797vrh8+vn+YRL5bBuj/AQAAAABqJvfHXQAAHkX82zfXAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACeAgkAAAAAAAAAqLuRLAAAAAAAAACA2hv9D1iu/VAYaAYA', 'base64')); //# sourceMappingURL=code-points-data.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const index_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/index.js [app-ssr] (ecmascript)"));
const memory_code_points_1 = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/memory-code-points.js [app-ssr] (ecmascript)");
const code_points_data_1 = __importDefault(__turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/@mongodb-js/saslprep/dist/code-points-data.js [app-ssr] (ecmascript)"));
const codePoints = (0, memory_code_points_1.createMemoryCodePoints)(code_points_data_1.default);
function saslprep(input, opts) {
    return (0, index_1.default)(codePoints, input, opts);
}
saslprep.saslprep = saslprep;
saslprep.default = saslprep;
module.exports = saslprep; //# sourceMappingURL=node.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/memory-pager/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Pager;
function Pager(pageSize, opts) {
    if (!(this instanceof Pager)) return new Pager(pageSize, opts);
    this.length = 0;
    this.updates = [];
    this.path = new Uint16Array(4);
    this.pages = new Array(32768);
    this.maxPages = this.pages.length;
    this.level = 0;
    this.pageSize = pageSize || 1024;
    this.deduplicate = opts ? opts.deduplicate : null;
    this.zeros = this.deduplicate ? alloc(this.deduplicate.length) : null;
}
Pager.prototype.updated = function(page) {
    while(this.deduplicate && page.buffer[page.deduplicate] === this.deduplicate[page.deduplicate]){
        page.deduplicate++;
        if (page.deduplicate === this.deduplicate.length) {
            page.deduplicate = 0;
            if (page.buffer.equals && page.buffer.equals(this.deduplicate)) page.buffer = this.deduplicate;
            break;
        }
    }
    if (page.updated || !this.updates) return;
    page.updated = true;
    this.updates.push(page);
};
Pager.prototype.lastUpdate = function() {
    if (!this.updates || !this.updates.length) return null;
    var page = this.updates.pop();
    page.updated = false;
    return page;
};
Pager.prototype._array = function(i, noAllocate) {
    if (i >= this.maxPages) {
        if (noAllocate) return;
        grow(this, i);
    }
    factor(i, this.path);
    var arr = this.pages;
    for(var j = this.level; j > 0; j--){
        var p = this.path[j];
        var next = arr[p];
        if (!next) {
            if (noAllocate) return;
            next = arr[p] = new Array(32768);
        }
        arr = next;
    }
    return arr;
};
Pager.prototype.get = function(i, noAllocate) {
    var arr = this._array(i, noAllocate);
    var first = this.path[0];
    var page = arr && arr[first];
    if (!page && !noAllocate) {
        page = arr[first] = new Page(i, alloc(this.pageSize));
        if (i >= this.length) this.length = i + 1;
    }
    if (page && page.buffer === this.deduplicate && this.deduplicate && !noAllocate) {
        page.buffer = copy(page.buffer);
        page.deduplicate = 0;
    }
    return page;
};
Pager.prototype.set = function(i, buf) {
    var arr = this._array(i, false);
    var first = this.path[0];
    if (i >= this.length) this.length = i + 1;
    if (!buf || this.zeros && buf.equals && buf.equals(this.zeros)) {
        arr[first] = undefined;
        return;
    }
    if (this.deduplicate && buf.equals && buf.equals(this.deduplicate)) {
        buf = this.deduplicate;
    }
    var page = arr[first];
    var b = truncate(buf, this.pageSize);
    if (page) page.buffer = b;
    else arr[first] = new Page(i, b);
};
Pager.prototype.toBuffer = function() {
    var list = new Array(this.length);
    var empty = alloc(this.pageSize);
    var ptr = 0;
    while(ptr < list.length){
        var arr = this._array(ptr, true);
        for(var i = 0; i < 32768 && ptr < list.length; i++){
            list[ptr++] = arr && arr[i] ? arr[i].buffer : empty;
        }
    }
    return Buffer.concat(list);
};
function grow(pager, index) {
    while(pager.maxPages < index){
        var old = pager.pages;
        pager.pages = new Array(32768);
        pager.pages[0] = old;
        pager.level++;
        pager.maxPages *= 32768;
    }
}
function truncate(buf, len) {
    if (buf.length === len) return buf;
    if (buf.length > len) return buf.slice(0, len);
    var cpy = alloc(len);
    buf.copy(cpy);
    return cpy;
}
function alloc(size) {
    if (Buffer.alloc) return Buffer.alloc(size);
    var buf = new Buffer(size);
    buf.fill(0);
    return buf;
}
function copy(buf) {
    var cpy = Buffer.allocUnsafe ? Buffer.allocUnsafe(buf.length) : new Buffer(buf.length);
    buf.copy(cpy);
    return cpy;
}
function Page(i, buf) {
    this.offset = i * buf.length;
    this.buffer = buf;
    this.updated = false;
    this.deduplicate = 0;
}
function factor(n, out) {
    n = (n - (out[0] = n & 32767)) / 32768;
    n = (n - (out[1] = n & 32767)) / 32768;
    out[3] = (n - (out[2] = n & 32767)) / 32768 & 32767;
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/sparse-bitfield/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var pager = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/memory-pager/index.js [app-ssr] (ecmascript)");
module.exports = Bitfield;
function Bitfield(opts) {
    if (!(this instanceof Bitfield)) return new Bitfield(opts);
    if (!opts) opts = {};
    if (Buffer.isBuffer(opts)) opts = {
        buffer: opts
    };
    this.pageOffset = opts.pageOffset || 0;
    this.pageSize = opts.pageSize || 1024;
    this.pages = opts.pages || pager(this.pageSize);
    this.byteLength = this.pages.length * this.pageSize;
    this.length = 8 * this.byteLength;
    if (!powerOfTwo(this.pageSize)) throw new Error('The page size should be a power of two');
    this._trackUpdates = !!opts.trackUpdates;
    this._pageMask = this.pageSize - 1;
    if (opts.buffer) {
        for(var i = 0; i < opts.buffer.length; i += this.pageSize){
            this.pages.set(i / this.pageSize, opts.buffer.slice(i, i + this.pageSize));
        }
        this.byteLength = opts.buffer.length;
        this.length = 8 * this.byteLength;
    }
}
Bitfield.prototype.get = function(i) {
    var o = i & 7;
    var j = (i - o) / 8;
    return !!(this.getByte(j) & 128 >> o);
};
Bitfield.prototype.getByte = function(i) {
    var o = i & this._pageMask;
    var j = (i - o) / this.pageSize;
    var page = this.pages.get(j, true);
    return page ? page.buffer[o + this.pageOffset] : 0;
};
Bitfield.prototype.set = function(i, v) {
    var o = i & 7;
    var j = (i - o) / 8;
    var b = this.getByte(j);
    return this.setByte(j, v ? b | 128 >> o : b & (255 ^ 128 >> o));
};
Bitfield.prototype.toBuffer = function() {
    var all = alloc(this.pages.length * this.pageSize);
    for(var i = 0; i < this.pages.length; i++){
        var next = this.pages.get(i, true);
        var allOffset = i * this.pageSize;
        if (next) next.buffer.copy(all, allOffset, this.pageOffset, this.pageOffset + this.pageSize);
    }
    return all;
};
Bitfield.prototype.setByte = function(i, b) {
    var o = i & this._pageMask;
    var j = (i - o) / this.pageSize;
    var page = this.pages.get(j, false);
    o += this.pageOffset;
    if (page.buffer[o] === b) return false;
    page.buffer[o] = b;
    if (i >= this.byteLength) {
        this.byteLength = i + 1;
        this.length = this.byteLength * 8;
    }
    if (this._trackUpdates) this.pages.updated(page);
    return true;
};
function alloc(n) {
    if (Buffer.alloc) return Buffer.alloc(n);
    var b = new Buffer(n);
    b.fill(0);
    return b;
}
function powerOfTwo(x) {
    return !(x & x - 1);
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mpath/lib/stringToParts.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = function stringToParts(str) {
    const result = [];
    let curPropertyName = '';
    let state = 'DEFAULT';
    for(let i = 0; i < str.length; ++i){
        // Fall back to treating as property name rather than bracket notation if
        // square brackets contains something other than a number.
        if (state === 'IN_SQUARE_BRACKETS' && !/\d/.test(str[i]) && str[i] !== ']') {
            state = 'DEFAULT';
            curPropertyName = result[result.length - 1] + '[' + curPropertyName;
            result.splice(result.length - 1, 1);
        }
        if (str[i] === '[') {
            if (state !== 'IMMEDIATELY_AFTER_SQUARE_BRACKETS') {
                result.push(curPropertyName);
                curPropertyName = '';
            }
            state = 'IN_SQUARE_BRACKETS';
        } else if (str[i] === ']') {
            if (state === 'IN_SQUARE_BRACKETS') {
                state = 'IMMEDIATELY_AFTER_SQUARE_BRACKETS';
                result.push(curPropertyName);
                curPropertyName = '';
            } else {
                state = 'DEFAULT';
                curPropertyName += str[i];
            }
        } else if (str[i] === '.') {
            if (state !== 'IMMEDIATELY_AFTER_SQUARE_BRACKETS') {
                result.push(curPropertyName);
                curPropertyName = '';
            }
            state = 'DEFAULT';
        } else {
            curPropertyName += str[i];
        }
    }
    if (state !== 'IMMEDIATELY_AFTER_SQUARE_BRACKETS') {
        result.push(curPropertyName);
    }
    return result;
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mpath/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint strict:off */ /* eslint no-var: off */ /* eslint no-redeclare: off */ var stringToParts = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mpath/lib/stringToParts.js [app-ssr] (ecmascript)");
// These properties are special and can open client libraries to security
// issues
var ignoreProperties = [
    '__proto__',
    'constructor',
    'prototype'
];
/**
 * Returns the value of object `o` at the given `path`.
 *
 * ####Example:
 *
 *     var obj = {
 *         comments: [
 *             { title: 'exciting!', _doc: { title: 'great!' }}
 *           , { title: 'number dos' }
 *         ]
 *     }
 *
 *     mpath.get('comments.0.title', o)         // 'exciting!'
 *     mpath.get('comments.0.title', o, '_doc') // 'great!'
 *     mpath.get('comments.title', o)           // ['exciting!', 'number dos']
 *
 *     // summary
 *     mpath.get(path, o)
 *     mpath.get(path, o, special)
 *     mpath.get(path, o, map)
 *     mpath.get(path, o, special, map)
 *
 * @param {String} path
 * @param {Object} o
 * @param {String} [special] When this property name is present on any object in the path, walking will continue on the value of this property.
 * @param {Function} [map] Optional function which receives each individual found value. The value returned from `map` is used in the original values place.
 */ exports.get = function(path, o, special, map) {
    var lookup;
    if ('function' == typeof special) {
        if (special.length < 2) {
            map = special;
            special = undefined;
        } else {
            lookup = special;
            special = undefined;
        }
    }
    map || (map = K);
    var parts = 'string' == typeof path ? stringToParts(path) : path;
    if (!Array.isArray(parts)) {
        throw new TypeError('Invalid `path`. Must be either string or array');
    }
    var obj = o, part;
    for(var i = 0; i < parts.length; ++i){
        part = parts[i];
        if (typeof parts[i] !== 'string' && typeof parts[i] !== 'number') {
            throw new TypeError('Each segment of path to `get()` must be a string or number, got ' + typeof parts[i]);
        }
        if (Array.isArray(obj) && !/^\d+$/.test(part)) {
            // reading a property from the array items
            var paths = parts.slice(i);
            // Need to `concat()` to avoid `map()` calling a constructor of an array
            // subclass
            return [].concat(obj).map(function(item) {
                return item ? exports.get(paths, item, special || lookup, map) : map(undefined);
            });
        }
        if (lookup) {
            obj = lookup(obj, part);
        } else {
            var _from = special && obj[special] ? obj[special] : obj;
            obj = _from instanceof Map ? _from.get(part) : _from[part];
        }
        if (!obj) return map(obj);
    }
    return map(obj);
};
/**
 * Returns true if `in` returns true for every piece of the path
 *
 * @param {String} path
 * @param {Object} o
 */ exports.has = function(path, o) {
    var parts = typeof path === 'string' ? stringToParts(path) : path;
    if (!Array.isArray(parts)) {
        throw new TypeError('Invalid `path`. Must be either string or array');
    }
    var len = parts.length;
    var cur = o;
    for(var i = 0; i < len; ++i){
        if (typeof parts[i] !== 'string' && typeof parts[i] !== 'number') {
            throw new TypeError('Each segment of path to `has()` must be a string or number, got ' + typeof parts[i]);
        }
        if (cur == null || typeof cur !== 'object' || !(parts[i] in cur)) {
            return false;
        }
        cur = cur[parts[i]];
    }
    return true;
};
/**
 * Deletes the last piece of `path`
 *
 * @param {String} path
 * @param {Object} o
 */ exports.unset = function(path, o) {
    var parts = typeof path === 'string' ? stringToParts(path) : path;
    if (!Array.isArray(parts)) {
        throw new TypeError('Invalid `path`. Must be either string or array');
    }
    var len = parts.length;
    var cur = o;
    for(var i = 0; i < len; ++i){
        if (cur == null || typeof cur !== 'object' || !(parts[i] in cur)) {
            return false;
        }
        if (typeof parts[i] !== 'string' && typeof parts[i] !== 'number') {
            throw new TypeError('Each segment of path to `unset()` must be a string or number, got ' + typeof parts[i]);
        }
        // Disallow any updates to __proto__ or special properties.
        if (ignoreProperties.indexOf(parts[i]) !== -1) {
            return false;
        }
        if (i === len - 1) {
            delete cur[parts[i]];
            return true;
        }
        cur = cur instanceof Map ? cur.get(parts[i]) : cur[parts[i]];
    }
    return true;
};
/**
 * Sets the `val` at the given `path` of object `o`.
 *
 * @param {String} path
 * @param {Anything} val
 * @param {Object} o
 * @param {String} [special] When this property name is present on any object in the path, walking will continue on the value of this property.
 * @param {Function} [map] Optional function which is passed each individual value before setting it. The value returned from `map` is used in the original values place.
 */ exports.set = function(path, val, o, special, map, _copying) {
    var lookup;
    if ('function' == typeof special) {
        if (special.length < 2) {
            map = special;
            special = undefined;
        } else {
            lookup = special;
            special = undefined;
        }
    }
    map || (map = K);
    var parts = 'string' == typeof path ? stringToParts(path) : path;
    if (!Array.isArray(parts)) {
        throw new TypeError('Invalid `path`. Must be either string or array');
    }
    if (null == o) return;
    for(var i = 0; i < parts.length; ++i){
        if (typeof parts[i] !== 'string' && typeof parts[i] !== 'number') {
            throw new TypeError('Each segment of path to `set()` must be a string or number, got ' + typeof parts[i]);
        }
        // Silently ignore any updates to `__proto__`, these are potentially
        // dangerous if using mpath with unsanitized data.
        if (ignoreProperties.indexOf(parts[i]) !== -1) {
            return;
        }
    }
    // the existance of $ in a path tells us if the user desires
    // the copying of an array instead of setting each value of
    // the array to the one by one to matching positions of the
    // current array. Unless the user explicitly opted out by passing
    // false, see Automattic/mongoose#6273
    var copy = _copying || /\$/.test(path) && _copying !== false, obj = o, part;
    for(var i = 0, len = parts.length - 1; i < len; ++i){
        part = parts[i];
        if ('$' == part) {
            if (i == len - 1) {
                break;
            } else {
                continue;
            }
        }
        if (Array.isArray(obj) && !/^\d+$/.test(part)) {
            var paths = parts.slice(i);
            if (!copy && Array.isArray(val)) {
                for(var j = 0; j < obj.length && j < val.length; ++j){
                    // assignment of single values of array
                    exports.set(paths, val[j], obj[j], special || lookup, map, copy);
                }
            } else {
                for(var j = 0; j < obj.length; ++j){
                    // assignment of entire value
                    exports.set(paths, val, obj[j], special || lookup, map, copy);
                }
            }
            return;
        }
        if (lookup) {
            obj = lookup(obj, part);
        } else {
            var _to = special && obj[special] ? obj[special] : obj;
            obj = _to instanceof Map ? _to.get(part) : _to[part];
        }
        if (!obj) return;
    }
    // process the last property of the path
    part = parts[len];
    // use the special property if exists
    if (special && obj[special]) {
        obj = obj[special];
    }
    // set the value on the last branch
    if (Array.isArray(obj) && !/^\d+$/.test(part)) {
        if (!copy && Array.isArray(val)) {
            _setArray(obj, val, part, lookup, special, map);
        } else {
            for(var j = 0; j < obj.length; ++j){
                var item = obj[j];
                if (item) {
                    if (lookup) {
                        lookup(item, part, map(val));
                    } else {
                        if (item[special]) item = item[special];
                        item[part] = map(val);
                    }
                }
            }
        }
    } else {
        if (lookup) {
            lookup(obj, part, map(val));
        } else if (obj instanceof Map) {
            obj.set(part, map(val));
        } else {
            obj[part] = map(val);
        }
    }
};
/*!
 * Split a string path into components delimited by '.' or
 * '[\d+]'
 *
 * #### Example:
 *     stringToParts('foo[0].bar.1'); // ['foo', '0', 'bar', '1']
 */ exports.stringToParts = stringToParts;
/*!
 * Recursively set nested arrays
 */ function _setArray(obj, val, part, lookup, special, map) {
    for(var item, j = 0; j < obj.length && j < val.length; ++j){
        item = obj[j];
        if (Array.isArray(item) && Array.isArray(val[j])) {
            _setArray(item, val[j], part, lookup, special, map);
        } else if (item) {
            if (lookup) {
                lookup(item, part, map(val[j]));
            } else {
                if (item[special]) item = item[special];
                item[part] = map(val[j]);
            }
        }
    }
}
/*!
 * Returns the value passed to it.
 */ function K(v) {
    return v;
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mpath/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = exports = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mpath/lib/index.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/kareem/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Create a new instance
 */ function Kareem() {
    this._pres = new Map();
    this._posts = new Map();
}
Kareem.skipWrappedFunction = function skipWrappedFunction() {
    if (!(this instanceof Kareem.skipWrappedFunction)) {
        return new Kareem.skipWrappedFunction(...arguments);
    }
    this.args = [
        ...arguments
    ];
};
Kareem.overwriteResult = function overwriteResult() {
    if (!(this instanceof Kareem.overwriteResult)) {
        return new Kareem.overwriteResult(...arguments);
    }
    this.args = [
        ...arguments
    ];
};
/**
 * Execute all "pre" hooks for "name"
 * @param {String} name The hook name to execute
 * @param {*} context Overwrite the "this" for the hook
 * @param {Array|Function} args Optional arguments or directly the callback
 * @param {Function} [callback] The callback to call when executing all hooks are finished
 * @returns {void}
 */ Kareem.prototype.execPre = function(name, context, args, callback) {
    if (arguments.length === 3) {
        callback = args;
        args = [];
    }
    const pres = this._pres.get(name) || [];
    const numPres = pres.length;
    const numAsyncPres = pres.numAsync || 0;
    let currentPre = 0;
    let asyncPresLeft = numAsyncPres;
    let done = false;
    const $args = args;
    let shouldSkipWrappedFunction = null;
    if (!numPres) {
        return nextTick(function() {
            callback(null);
        });
    }
    function next() {
        if (currentPre >= numPres) {
            return;
        }
        const pre = pres[currentPre];
        if (pre.isAsync) {
            const args = [
                decorateNextFn(_next),
                decorateNextFn(function(error) {
                    if (error) {
                        if (done) {
                            return;
                        }
                        if (error instanceof Kareem.skipWrappedFunction) {
                            shouldSkipWrappedFunction = error;
                        } else {
                            done = true;
                            return callback(error);
                        }
                    }
                    if (--asyncPresLeft === 0 && currentPre >= numPres) {
                        return callback(shouldSkipWrappedFunction);
                    }
                })
            ];
            callMiddlewareFunction(pre.fn, context, args, args[0]);
        } else if (pre.fn.length > 0) {
            const args = [
                decorateNextFn(_next)
            ];
            const _args = arguments.length >= 2 ? arguments : [
                null
            ].concat($args);
            for(let i = 1; i < _args.length; ++i){
                if (i === _args.length - 1 && typeof _args[i] === 'function') {
                    continue; // skip callbacks to avoid accidentally calling the callback from a hook
                }
                args.push(_args[i]);
            }
            callMiddlewareFunction(pre.fn, context, args, args[0]);
        } else {
            let maybePromiseLike = null;
            try {
                maybePromiseLike = pre.fn.call(context);
            } catch (err) {
                if (err != null) {
                    return callback(err);
                }
            }
            if (isPromiseLike(maybePromiseLike)) {
                maybePromiseLike.then(()=>_next(), (err)=>_next(err));
            } else {
                if (++currentPre >= numPres) {
                    if (asyncPresLeft > 0) {
                        // Leave parallel hooks to run
                        return;
                    } else {
                        return nextTick(function() {
                            callback(shouldSkipWrappedFunction);
                        });
                    }
                }
                next();
            }
        }
    }
    next.apply(null, [
        null
    ].concat(args));
    function _next(error) {
        if (error) {
            if (done) {
                return;
            }
            if (error instanceof Kareem.skipWrappedFunction) {
                shouldSkipWrappedFunction = error;
            } else {
                done = true;
                return callback(error);
            }
        }
        if (++currentPre >= numPres) {
            if (asyncPresLeft > 0) {
                // Leave parallel hooks to run
                return;
            } else {
                return callback(shouldSkipWrappedFunction);
            }
        }
        next.apply(context, arguments);
    }
};
/**
 * Execute all "pre" hooks for "name" synchronously
 * @param {String} name The hook name to execute
 * @param {*} context Overwrite the "this" for the hook
 * @param {Array} [args] Apply custom arguments to the hook
 * @returns {void}
 */ Kareem.prototype.execPreSync = function(name, context, args) {
    const pres = this._pres.get(name) || [];
    const numPres = pres.length;
    for(let i = 0; i < numPres; ++i){
        pres[i].fn.apply(context, args || []);
    }
};
/**
 * Execute all "post" hooks for "name"
 * @param {String} name The hook name to execute
 * @param {*} context Overwrite the "this" for the hook
 * @param {Array|Function} args Apply custom arguments to the hook
 * @param {*} options Optional options or directly the callback
 * @param {Function} [callback] The callback to call when executing all hooks are finished
 * @returns {void}
 */ Kareem.prototype.execPost = function(name, context, args, options, callback) {
    if (arguments.length < 5) {
        callback = options;
        options = null;
    }
    const posts = this._posts.get(name) || [];
    const numPosts = posts.length;
    let currentPost = 0;
    let firstError = null;
    if (options && options.error) {
        firstError = options.error;
    }
    if (!numPosts) {
        return nextTick(function() {
            callback.apply(null, [
                firstError
            ].concat(args));
        });
    }
    function next() {
        const post = posts[currentPost].fn;
        let numArgs = 0;
        const argLength = args.length;
        const newArgs = [];
        for(let i = 0; i < argLength; ++i){
            numArgs += args[i] && args[i]._kareemIgnore ? 0 : 1;
            if (!args[i] || !args[i]._kareemIgnore) {
                newArgs.push(args[i]);
            }
        }
        if (firstError) {
            if (isErrorHandlingMiddleware(posts[currentPost], numArgs)) {
                const _cb = decorateNextFn(function(error) {
                    if (error) {
                        if (error instanceof Kareem.overwriteResult) {
                            args = error.args;
                            if (++currentPost >= numPosts) {
                                return callback.call(null, firstError);
                            }
                            return next();
                        }
                        firstError = error;
                    }
                    if (++currentPost >= numPosts) {
                        return callback.call(null, firstError);
                    }
                    next();
                });
                callMiddlewareFunction(post, context, [
                    firstError
                ].concat(newArgs).concat([
                    _cb
                ]), _cb);
            } else {
                if (++currentPost >= numPosts) {
                    return callback.call(null, firstError);
                }
                next();
            }
        } else {
            const _cb = decorateNextFn(function(error) {
                if (error) {
                    if (error instanceof Kareem.overwriteResult) {
                        args = error.args;
                        if (++currentPost >= numPosts) {
                            return callback.apply(null, [
                                null
                            ].concat(args));
                        }
                        return next();
                    }
                    firstError = error;
                    return next();
                }
                if (++currentPost >= numPosts) {
                    return callback.apply(null, [
                        null
                    ].concat(args));
                }
                next();
            });
            if (isErrorHandlingMiddleware(posts[currentPost], numArgs)) {
                // Skip error handlers if no error
                if (++currentPost >= numPosts) {
                    return callback.apply(null, [
                        null
                    ].concat(args));
                }
                return next();
            }
            if (post.length === numArgs + 1) {
                callMiddlewareFunction(post, context, newArgs.concat([
                    _cb
                ]), _cb);
            } else {
                let error;
                let maybePromiseLike;
                try {
                    maybePromiseLike = post.apply(context, newArgs);
                } catch (err) {
                    error = err;
                    firstError = err;
                }
                if (isPromiseLike(maybePromiseLike)) {
                    return maybePromiseLike.then((res)=>{
                        _cb(res instanceof Kareem.overwriteResult ? res : null);
                    }, (err)=>_cb(err));
                }
                if (maybePromiseLike instanceof Kareem.overwriteResult) {
                    args = maybePromiseLike.args;
                }
                if (++currentPost >= numPosts) {
                    return callback.apply(null, [
                        error
                    ].concat(args));
                }
                next();
            }
        }
    }
    next();
};
/**
 * Execute all "post" hooks for "name" synchronously
 * @param {String} name The hook name to execute
 * @param {*} context Overwrite the "this" for the hook
 * @param {Array|Function} args Apply custom arguments to the hook
 * @returns {Array} The used arguments
 */ Kareem.prototype.execPostSync = function(name, context, args) {
    const posts = this._posts.get(name) || [];
    const numPosts = posts.length;
    for(let i = 0; i < numPosts; ++i){
        const res = posts[i].fn.apply(context, args || []);
        if (res instanceof Kareem.overwriteResult) {
            args = res.args;
        }
    }
    return args;
};
/**
 * Create a synchronous wrapper for "fn"
 * @param {String} name The name of the hook
 * @param {Function} fn The function to wrap
 * @returns {Function} The wrapped function
 */ Kareem.prototype.createWrapperSync = function(name, fn) {
    const _this = this;
    return function syncWrapper() {
        _this.execPreSync(name, this, arguments);
        const toReturn = fn.apply(this, arguments);
        const result = _this.execPostSync(name, this, [
            toReturn
        ]);
        return result[0];
    };
};
function _handleWrapError(instance, error, name, context, args, options, callback) {
    if (options.useErrorHandlers) {
        return instance.execPost(name, context, args, {
            error: error
        }, function(error) {
            return typeof callback === 'function' && callback(error);
        });
    } else {
        return typeof callback === 'function' && callback(error);
    }
}
/**
 * Executes pre hooks, followed by the wrapped function, followed by post hooks.
 * @param {String} name The name of the hook
 * @param {Function} fn The function for the hook
 * @param {*} context Overwrite the "this" for the hook
 * @param {Array} args Apply custom arguments to the hook
 * @param {Object} [options]
 * @param {Boolean} [options.checkForPromise]
 * @returns {void}
 */ Kareem.prototype.wrap = function(name, fn, context, args, options) {
    const lastArg = args.length > 0 ? args[args.length - 1] : null;
    const argsWithoutCb = Array.from(args);
    typeof lastArg === 'function' && argsWithoutCb.pop();
    const _this = this;
    options = options || {};
    const checkForPromise = options.checkForPromise;
    this.execPre(name, context, args, function(error) {
        if (error && !(error instanceof Kareem.skipWrappedFunction)) {
            const numCallbackParams = options.numCallbackParams || 0;
            const errorArgs = options.contextParameter ? [
                context
            ] : [];
            for(let i = errorArgs.length; i < numCallbackParams; ++i){
                errorArgs.push(null);
            }
            return _handleWrapError(_this, error, name, context, errorArgs, options, lastArg);
        }
        const numParameters = fn.length;
        let ret;
        if (error instanceof Kareem.skipWrappedFunction) {
            ret = error.args[0];
            return _cb(null, ...error.args);
        } else {
            try {
                ret = fn.apply(context, argsWithoutCb.concat(_cb));
            } catch (err) {
                return _cb(err);
            }
        }
        if (checkForPromise) {
            if (isPromiseLike(ret)) {
                // Thenable, use it
                return ret.then((res)=>_cb(null, res), (err)=>_cb(err));
            }
            // If `fn()` doesn't have a callback argument and doesn't return a
            // promise, assume it is sync
            if (numParameters < argsWithoutCb.length + 1) {
                return _cb(null, ret);
            }
        }
        function _cb() {
            const argsWithoutError = Array.from(arguments);
            argsWithoutError.shift();
            if (options.nullResultByDefault && argsWithoutError.length === 0) {
                argsWithoutError.push(null);
            }
            if (arguments[0]) {
                // Assume error
                return _handleWrapError(_this, arguments[0], name, context, argsWithoutError, options, lastArg);
            } else {
                _this.execPost(name, context, argsWithoutError, function() {
                    if (lastArg === null) {
                        return;
                    }
                    arguments[0] ? lastArg(arguments[0]) : lastArg.apply(context, arguments);
                });
            }
        }
    });
};
/**
 * Filter current instance for something specific and return the filtered clone
 * @param {Function} fn The filter function
 * @returns {Kareem} The cloned and filtered instance
 */ Kareem.prototype.filter = function(fn) {
    const clone = this.clone();
    const pres = Array.from(clone._pres.keys());
    for (const name of pres){
        const hooks = this._pres.get(name).map((h)=>Object.assign({}, h, {
                name: name
            })).filter(fn);
        if (hooks.length === 0) {
            clone._pres.delete(name);
            continue;
        }
        hooks.numAsync = hooks.filter((h)=>h.isAsync).length;
        clone._pres.set(name, hooks);
    }
    const posts = Array.from(clone._posts.keys());
    for (const name of posts){
        const hooks = this._posts.get(name).map((h)=>Object.assign({}, h, {
                name: name
            })).filter(fn);
        if (hooks.length === 0) {
            clone._posts.delete(name);
            continue;
        }
        clone._posts.set(name, hooks);
    }
    return clone;
};
/**
 * Check for a "name" to exist either in pre or post hooks
 * @param {String} name The name of the hook
 * @returns {Boolean} "true" if found, "false" otherwise
 */ Kareem.prototype.hasHooks = function(name) {
    return this._pres.has(name) || this._posts.has(name);
};
/**
 * Create a Wrapper for "fn" on "name" and return the wrapped function
 * @param {String} name The name of the hook
 * @param {Function} fn The function to wrap
 * @param {*} context Overwrite the "this" for the hook
 * @param {Object} [options]
 * @returns {Function} The wrapped function
 */ Kareem.prototype.createWrapper = function(name, fn, context, options) {
    const _this = this;
    if (!this.hasHooks(name)) {
        // Fast path: if there's no hooks for this function, just return the
        // function wrapped in a nextTick()
        return function() {
            nextTick(()=>fn.apply(this, arguments));
        };
    }
    return function() {
        const _context = context || this;
        _this.wrap(name, fn, _context, Array.from(arguments), options);
    };
};
/**
 * Register a new hook for "pre"
 * @param {String} name The name of the hook
 * @param {Boolean} [isAsync]
 * @param {Function} fn The function to register for "name"
 * @param {never} error Unused
 * @param {Boolean} [unshift] Wheter to "push" or to "unshift" the new hook
 * @returns {Kareem}
 */ Kareem.prototype.pre = function(name, isAsync, fn, error, unshift) {
    let options = {};
    if (typeof isAsync === 'object' && isAsync !== null) {
        options = isAsync;
        isAsync = options.isAsync;
    } else if (typeof arguments[1] !== 'boolean') {
        fn = isAsync;
        isAsync = false;
    }
    const pres = this._pres.get(name) || [];
    this._pres.set(name, pres);
    if (isAsync) {
        pres.numAsync = pres.numAsync || 0;
        ++pres.numAsync;
    }
    if (typeof fn !== 'function') {
        throw new Error('pre() requires a function, got "' + typeof fn + '"');
    }
    if (unshift) {
        pres.unshift(Object.assign({}, options, {
            fn: fn,
            isAsync: isAsync
        }));
    } else {
        pres.push(Object.assign({}, options, {
            fn: fn,
            isAsync: isAsync
        }));
    }
    return this;
};
/**
 * Register a new hook for "post"
 * @param {String} name The name of the hook
 * @param {Object} [options]
 * @param {Function} fn The function to register for "name"
 * @param {Boolean} [unshift] Wheter to "push" or to "unshift" the new hook
 * @returns {Kareem}
 */ Kareem.prototype.post = function(name, options, fn, unshift) {
    const posts = this._posts.get(name) || [];
    if (typeof options === 'function') {
        unshift = !!fn;
        fn = options;
        options = {};
    }
    if (typeof fn !== 'function') {
        throw new Error('post() requires a function, got "' + typeof fn + '"');
    }
    if (unshift) {
        posts.unshift(Object.assign({}, options, {
            fn: fn
        }));
    } else {
        posts.push(Object.assign({}, options, {
            fn: fn
        }));
    }
    this._posts.set(name, posts);
    return this;
};
/**
 * Clone the current instance
 * @returns {Kareem} The cloned instance
 */ Kareem.prototype.clone = function() {
    const n = new Kareem();
    for (const key of this._pres.keys()){
        const clone = this._pres.get(key).slice();
        clone.numAsync = this._pres.get(key).numAsync;
        n._pres.set(key, clone);
    }
    for (const key of this._posts.keys()){
        n._posts.set(key, this._posts.get(key).slice());
    }
    return n;
};
/**
 * Merge "other" into self or "clone"
 * @param {Kareem} other The instance to merge with
 * @param {Kareem} [clone] The instance to merge onto (if not defined, using "this")
 * @returns {Kareem} The merged instance
 */ Kareem.prototype.merge = function(other, clone) {
    clone = arguments.length === 1 ? true : clone;
    const ret = clone ? this.clone() : this;
    for (const key of other._pres.keys()){
        const sourcePres = ret._pres.get(key) || [];
        const deduplicated = other._pres.get(key).// Deduplicate based on `fn`
        filter((p)=>sourcePres.map((_p)=>_p.fn).indexOf(p.fn) === -1);
        const combined = sourcePres.concat(deduplicated);
        combined.numAsync = sourcePres.numAsync || 0;
        combined.numAsync += deduplicated.filter((p)=>p.isAsync).length;
        ret._pres.set(key, combined);
    }
    for (const key of other._posts.keys()){
        const sourcePosts = ret._posts.get(key) || [];
        const deduplicated = other._posts.get(key).filter((p)=>sourcePosts.indexOf(p) === -1);
        ret._posts.set(key, sourcePosts.concat(deduplicated));
    }
    return ret;
};
function callMiddlewareFunction(fn, context, args, next) {
    let maybePromiseLike;
    try {
        maybePromiseLike = fn.apply(context, args);
    } catch (error) {
        return next(error);
    }
    if (isPromiseLike(maybePromiseLike)) {
        maybePromiseLike.then(()=>next(), (err)=>next(err));
    }
}
function isPromiseLike(v) {
    return typeof v === 'object' && v !== null && typeof v.then === 'function';
}
function decorateNextFn(fn) {
    let called = false;
    const _this = this;
    return function() {
        // Ensure this function can only be called once
        if (called) {
            return;
        }
        called = true;
        // Make sure to clear the stack so try/catch doesn't catch errors
        // in subsequent middleware
        return nextTick(()=>fn.apply(_this, arguments));
    };
}
const nextTick = typeof process === 'object' && process !== null && process.nextTick || function nextTick(cb) {
    setTimeout(cb, 0);
};
function isErrorHandlingMiddleware(post, numArgs) {
    if (post.errorHandler) {
        return true;
    }
    return post.fn.length === numArgs + 2;
}
module.exports = Kareem;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/permissions.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const denied = exports;
denied.distinct = function(self) {
    if (self._fields && Object.keys(self._fields).length > 0) {
        return 'field selection and slice';
    }
    const keys = Object.keys(denied.distinct);
    let err;
    keys.every(function(option) {
        if (self.options[option]) {
            err = option;
            return false;
        }
        return true;
    });
    return err;
};
denied.distinct.select = denied.distinct.slice = denied.distinct.sort = denied.distinct.limit = denied.distinct.skip = denied.distinct.batchSize = denied.distinct.hint = denied.distinct.tailable = true;
// aggregation integration
denied.findOneAndUpdate = denied.findOneAndRemove = function(self) {
    const keys = Object.keys(denied.findOneAndUpdate);
    let err;
    keys.every(function(option) {
        if (self.options[option]) {
            err = option;
            return false;
        }
        return true;
    });
    return err;
};
denied.findOneAndUpdate.limit = denied.findOneAndUpdate.skip = denied.findOneAndUpdate.batchSize = denied.findOneAndUpdate.tailable = true;
denied.count = function(self) {
    if (self._fields && Object.keys(self._fields).length > 0) {
        return 'field selection and slice';
    }
    const keys = Object.keys(denied.count);
    let err;
    keys.every(function(option) {
        if (self.options[option]) {
            err = option;
            return false;
        }
        return true;
    });
    return err;
};
denied.count.slice = denied.count.batchSize = denied.count.tailable = true;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/env.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.isNode = 'undefined' != typeof process && 'object' == ("TURBOPACK compile-time value", "object") && 'object' == ("TURBOPACK compile-time value", "object") && 'function' == typeof Buffer && process.argv;
exports.isMongo = !exports.isNode && 'function' == typeof printjson && 'function' == typeof ObjectId && 'function' == typeof rs && 'function' == typeof sh;
exports.isBrowser = !exports.isNode && !exports.isMongo && 'undefined' != "undefined";
exports.type = exports.isNode ? 'node' : exports.isMongo ? 'mongo' : exports.isBrowser ? 'browser' : 'unknown';
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/collection.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * methods a collection must implement
 */ const methods = [
    'find',
    'findOne',
    'updateMany',
    'updateOne',
    'replaceOne',
    'count',
    'distinct',
    'findOneAndDelete',
    'findOneAndUpdate',
    'aggregate',
    'findCursor',
    'deleteOne',
    'deleteMany'
];
/**
 * Collection base class from which implementations inherit
 */ function Collection() {}
for(let i = 0, len = methods.length; i < len; ++i){
    const method = methods[i];
    Collection.prototype[method] = notImplemented(method);
}
module.exports = exports = Collection;
Collection.methods = methods;
/**
 * creates a function which throws an implementation error
 */ function notImplemented(method) {
    return function() {
        throw new Error('collection.' + method + ' not implemented');
    };
}
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Module dependencies
 */ const Collection = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/collection.js [app-ssr] (ecmascript)");
class NodeCollection extends Collection {
    constructor(col){
        super();
        this.collection = col;
        this.collectionName = col.collectionName;
    }
    /**
   * find(match, options)
   */ async find(match, options) {
        const cursor = this.collection.find(match, options);
        return cursor.toArray();
    }
    /**
   * findOne(match, options)
   */ async findOne(match, options) {
        return this.collection.findOne(match, options);
    }
    /**
   * count(match, options)
   */ async count(match, options) {
        return this.collection.count(match, options);
    }
    /**
   * distinct(prop, match, options)
   */ async distinct(prop, match, options) {
        return this.collection.distinct(prop, match, options);
    }
    /**
   * updateMany(match, update, options)
   */ async updateMany(match, update, options) {
        return this.collection.updateMany(match, update, options);
    }
    /**
   * updateOne(match, update, options)
   */ async updateOne(match, update, options) {
        return this.collection.updateOne(match, update, options);
    }
    /**
   * replaceOne(match, update, options)
   */ async replaceOne(match, update, options) {
        return this.collection.replaceOne(match, update, options);
    }
    /**
   * deleteOne(match, options)
   */ async deleteOne(match, options) {
        return this.collection.deleteOne(match, options);
    }
    /**
   * deleteMany(match, options)
   */ async deleteMany(match, options) {
        return this.collection.deleteMany(match, options);
    }
    /**
   * findOneAndDelete(match, options, function(err[, result])
   */ async findOneAndDelete(match, options) {
        return this.collection.findOneAndDelete(match, options);
    }
    /**
   * findOneAndUpdate(match, update, options)
   */ async findOneAndUpdate(match, update, options) {
        return this.collection.findOneAndUpdate(match, update, options);
    }
    /**
   * var cursor = findCursor(match, options)
   */ findCursor(match, options) {
        return this.collection.find(match, options);
    }
}
/**
 * Expose
 */ module.exports = exports = NodeCollection;
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const env = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/env.js [app-ssr] (ecmascript)");
if ('unknown' == env.type) {
    throw new Error('Unknown environment');
}
module.exports = env.isNode ? __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/node.js [app-ssr] (ecmascript)") : env.isMongo ? __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/collection.js [app-ssr] (ecmascript)") : __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/collection.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * Module dependencies.
 */ const specialProperties = [
    '__proto__',
    'constructor',
    'prototype'
];
/**
 * Clones objects
 *
 * @param {Object} obj the object to clone
 * @param {Object} options
 * @return {Object} the cloned object
 * @api private
 */ const clone = exports.clone = function clone(obj, options) {
    if (obj === undefined || obj === null) return obj;
    if (Array.isArray(obj)) return exports.cloneArray(obj, options);
    if (obj.constructor) {
        if (/ObjectI[dD]$/.test(obj.constructor.name)) {
            return 'function' == typeof obj.clone ? obj.clone() : new obj.constructor(obj.id);
        }
        if (obj.constructor.name === 'ReadPreference') {
            return new obj.constructor(obj.mode, clone(obj.tags, options));
        }
        if ('Binary' == obj._bsontype && obj.buffer && obj.value) {
            return 'function' == typeof obj.clone ? obj.clone() : new obj.constructor(obj.value(true), obj.sub_type);
        }
        if ('Date' === obj.constructor.name || 'Function' === obj.constructor.name) return new obj.constructor(+obj);
        if ('RegExp' === obj.constructor.name) return new RegExp(obj);
        if ('Buffer' === obj.constructor.name) return Buffer.from(obj);
    }
    if (isObject(obj)) return exports.cloneObject(obj, options);
    if (obj.valueOf) return obj.valueOf();
};
/*!
 * ignore
 */ exports.cloneObject = function cloneObject(obj, options) {
    const minimize = options && options.minimize, ret = {}, keys = Object.keys(obj), len = keys.length;
    let hasKeys = false, val, k = '', i = 0;
    for(i = 0; i < len; ++i){
        k = keys[i];
        // Not technically prototype pollution because this wouldn't merge properties
        // onto `Object.prototype`, but avoid properties like __proto__ as a precaution.
        if (specialProperties.indexOf(k) !== -1) {
            continue;
        }
        val = clone(obj[k], options);
        if (!minimize || 'undefined' !== typeof val) {
            hasKeys || (hasKeys = true);
            ret[k] = val;
        }
    }
    return minimize ? hasKeys && ret : ret;
};
exports.cloneArray = function cloneArray(arr, options) {
    const ret = [], l = arr.length;
    let i = 0;
    for(; i < l; i++)ret.push(clone(arr[i], options));
    return ret;
};
/**
 * Merges `from` into `to` without overwriting existing properties.
 *
 * @param {Object} to
 * @param {Object} from
 * @api private
 */ exports.merge = function merge(to, from) {
    const keys = Object.keys(from);
    for (const key of keys){
        if (specialProperties.indexOf(key) !== -1) {
            continue;
        }
        if ('undefined' === typeof to[key]) {
            to[key] = from[key];
        } else {
            if (exports.isObject(from[key])) {
                merge(to[key], from[key]);
            } else {
                to[key] = from[key];
            }
        }
    }
};
/**
 * Same as merge but clones the assigned values.
 *
 * @param {Object} to
 * @param {Object} from
 * @api private
 */ exports.mergeClone = function mergeClone(to, from) {
    const keys = Object.keys(from);
    for (const key of keys){
        if (specialProperties.indexOf(key) !== -1) {
            continue;
        }
        if ('undefined' === typeof to[key]) {
            to[key] = clone(from[key]);
        } else {
            if (exports.isObject(from[key])) {
                mergeClone(to[key], from[key]);
            } else {
                to[key] = clone(from[key]);
            }
        }
    }
};
/**
 * Read pref helper (mongo 2.2 drivers support this)
 *
 * Allows using aliases instead of full preference names:
 *
 *     p   primary
 *     pp  primaryPreferred
 *     s   secondary
 *     sp  secondaryPreferred
 *     n   nearest
 *
 * @param {String} pref
 */ exports.readPref = function readPref(pref) {
    switch(pref){
        case 'p':
            pref = 'primary';
            break;
        case 'pp':
            pref = 'primaryPreferred';
            break;
        case 's':
            pref = 'secondary';
            break;
        case 'sp':
            pref = 'secondaryPreferred';
            break;
        case 'n':
            pref = 'nearest';
            break;
    }
    return pref;
};
/**
 * Read Concern helper (mongo 3.2 drivers support this)
 *
 * Allows using string to specify read concern level:
 *
 *     local          3.2+
 *     available      3.6+
 *     majority       3.2+
 *     linearizable   3.4+
 *     snapshot       4.0+
 *
 * @param {String|Object} concern
 */ exports.readConcern = function readConcern(concern) {
    if ('string' === typeof concern) {
        switch(concern){
            case 'l':
                concern = 'local';
                break;
            case 'a':
                concern = 'available';
                break;
            case 'm':
                concern = 'majority';
                break;
            case 'lz':
                concern = 'linearizable';
                break;
            case 's':
                concern = 'snapshot';
                break;
        }
        concern = {
            level: concern
        };
    }
    return concern;
};
/**
 * Object.prototype.toString.call helper
 */ const _toString = Object.prototype.toString;
exports.toString = function(arg) {
    return _toString.call(arg);
};
/**
 * Determines if `arg` is an object.
 *
 * @param {Object|Array|String|Function|RegExp|any} arg
 * @return {Boolean}
 */ const isObject = exports.isObject = function(arg) {
    return '[object Object]' == exports.toString(arg);
};
/**
 * Object.keys helper
 */ exports.keys = Object.keys;
/**
 * Basic Object.create polyfill.
 * Only one argument is supported.
 *
 * Based on https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create
 */ exports.create = 'function' == typeof Object.create ? Object.create : create;
function create(proto) {
    if (arguments.length > 1) {
        throw new Error('Adding properties is not supported');
    }
    function F() {}
    F.prototype = proto;
    return new F;
}
/**
 * inheritance
 */ exports.inherits = function(ctor, superCtor) {
    ctor.prototype = exports.create(superCtor.prototype);
    ctor.prototype.constructor = ctor;
};
/**
 * Check if this object is an arguments object
 *
 * @param {Any} v
 * @return {Boolean}
 */ exports.isArgumentsObject = function(v) {
    return Object.prototype.toString.call(v) === '[object Arguments]';
};
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/mquery.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Dependencies
 */ const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
const utils = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/utils.js [app-ssr] (ecmascript)");
const debug = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/debug/src/index.js [app-ssr] (ecmascript)")('mquery');
/**
 * Query constructor used for building queries.
 *
 * #### Example:
 *
 *     var query = new Query({ name: 'mquery' });
 *     query.setOptions({ collection: moduleCollection })
 *     await query.where('age').gte(21).exec();
 *
 * @param {Object} [criteria] criteria for the query OR the collection instance to use
 * @param {Object} [options]
 * @api public
 */ function Query(criteria, options) {
    if (!(this instanceof Query)) return new Query(criteria, options);
    const proto = this.constructor.prototype;
    this.op = proto.op || undefined;
    this.options = Object.assign({}, proto.options);
    this._conditions = proto._conditions ? utils.clone(proto._conditions) : {};
    this._fields = proto._fields ? utils.clone(proto._fields) : undefined;
    this._updateDoc = proto._updateDoc ? utils.clone(proto._updateDoc) : undefined;
    this._path = proto._path || undefined;
    this._distinctDoc = proto._distinctDoc || undefined;
    this._collection = proto._collection || undefined;
    this._traceFunction = proto._traceFunction || undefined;
    if (options) {
        this.setOptions(options);
    }
    if (criteria) {
        this.find(criteria);
    }
}
/**
 * This is a parameter that the user can set which determines if mquery
 * uses $within or $geoWithin for queries. It defaults to true which
 * means $geoWithin will be used. If using MongoDB < 2.4 you should
 * set this to false.
 *
 * @api public
 * @property use$geoWithin
 */ let $withinCmd = '$geoWithin';
Object.defineProperty(Query, 'use$geoWithin', {
    get: function() {
        return $withinCmd == '$geoWithin';
    },
    set: function(v) {
        if (true === v) {
            // mongodb >= 2.4
            $withinCmd = '$geoWithin';
        } else {
            $withinCmd = '$within';
        }
    }
});
/**
 * Converts this query to a constructor function with all arguments and options retained.
 *
 * #### Example:
 *
 *     // Create a query that will read documents with a "video" category from
 *     // `aCollection` on the primary node in the replica-set unless it is down,
 *     // in which case we'll read from a secondary node.
 *     var query = mquery({ category: 'video' })
 *     query.setOptions({ collection: aCollection, read: 'primaryPreferred' });
 *
 *     // create a constructor based off these settings
 *     var Video = query.toConstructor();
 *
 *     // Video is now a subclass of mquery() and works the same way but with the
 *     // default query parameters and options set.
 *
 *     // run a query with the previous settings but filter for movies with names
 *     // that start with "Life".
 *     Video().where({ name: /^Life/ }).exec(cb);
 *
 * @return {Query} new Query
 * @api public
 */ Query.prototype.toConstructor = function toConstructor() {
    function CustomQuery(criteria, options) {
        if (!(this instanceof CustomQuery)) return new CustomQuery(criteria, options);
        Query.call(this, criteria, options);
    }
    utils.inherits(CustomQuery, Query);
    // set inherited defaults
    const p = CustomQuery.prototype;
    p.options = {};
    p.setOptions(this.options);
    p.op = this.op;
    p._conditions = utils.clone(this._conditions);
    p._fields = utils.clone(this._fields);
    p._updateDoc = utils.clone(this._updateDoc);
    p._path = this._path;
    p._distinctDoc = this._distinctDoc;
    p._collection = this._collection;
    p._traceFunction = this._traceFunction;
    return CustomQuery;
};
/**
 * Sets query options.
 *
 * #### Options:
 *
 * - [tailable](http://www.mongodb.org/display/DOCS/Tailable+Cursors) *
 * - [sort](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bsort(\)%7D%7D) *
 * - [limit](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Blimit%28%29%7D%7D) *
 * - [skip](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bskip%28%29%7D%7D) *
 * - [maxTime](http://docs.mongodb.org/manual/reference/operator/meta/maxTimeMS/#op._S_maxTimeMS) *
 * - [batchSize](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7BbatchSize%28%29%7D%7D) *
 * - [comment](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24comment) *
 * - [hint](http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24hint) *
 * - [slaveOk](http://docs.mongodb.org/manual/applications/replication/#read-preference) *
 * - [safe](http://www.mongodb.org/display/DOCS/getLastError+Command)
 * - collection the collection to query against
 *
 * _* denotes a query helper method is also available_
 *
 * @param {Object} options
 * @api public
 */ Query.prototype.setOptions = function(options) {
    if (!(options && utils.isObject(options))) return this;
    // set arbitrary options
    const methods = utils.keys(options);
    let method;
    for(let i = 0; i < methods.length; ++i){
        method = methods[i];
        // use methods if exist (safer option manipulation)
        if ('function' == typeof this[method]) {
            const args = Array.isArray(options[method]) ? options[method] : [
                options[method]
            ];
            this[method].apply(this, args);
        } else {
            this.options[method] = options[method];
        }
    }
    return this;
};
/**
 * Sets this Querys collection.
 *
 * @param {Collection} coll
 * @return {Query} this
 */ Query.prototype.collection = function collection(coll) {
    this._collection = new Query.Collection(coll);
    return this;
};
/**
 * Adds a collation to this op (MongoDB 3.4 and up)
 *
 * #### Example:
 *
 *     query.find().collation({ locale: "en_US", strength: 1 })
 *
 * @param {Object} value
 * @return {Query} this
 * @see MongoDB docs https://docs.mongodb.com/manual/reference/method/cursor.collation/#cursor.collation
 * @api public
 */ Query.prototype.collation = function(value) {
    this.options.collation = value;
    return this;
};
/**
 * Specifies a `$where` condition
 *
 * Use `$where` when you need to select documents using a JavaScript expression.
 *
 * #### Example:
 *
 *     query.$where('this.comments.length > 10 || this.name.length > 5')
 *
 *     query.$where(function () {
 *       return this.comments.length > 10 || this.name.length > 5;
 *     })
 *
 * @param {String|Function} js javascript string or function
 * @return {Query} this
 * @memberOf Query
 * @method $where
 * @api public
 */ Query.prototype.$where = function(js) {
    this._conditions.$where = js;
    return this;
};
/**
 * Specifies a `path` for use with chaining.
 *
 * #### Example:
 *
 *     // instead of writing:
 *     await User.find({age: {$gte: 21, $lte: 65}});
 *
 *     // we can instead write:
 *     User.where('age').gte(21).lte(65);
 *
 *     // passing query conditions is permitted
 *     User.find().where({ name: 'vonderful' })
 *
 *     // chaining
 *     await User
 *       .where('age').gte(21).lte(65)
 *       .where('name', /^vonderful/i)
 *       .where('friends').slice(10)
 *       .exec()
 *
 * @param {String} [path]
 * @param {Object} [val]
 * @return {Query} this
 * @api public
 */ Query.prototype.where = function() {
    if (!arguments.length) return this;
    if (!this.op) this.op = 'find';
    const type = typeof arguments[0];
    if ('string' == type) {
        this._path = arguments[0];
        if (2 === arguments.length) {
            this._conditions[this._path] = arguments[1];
        }
        return this;
    }
    if ('object' == type && !Array.isArray(arguments[0])) {
        return this.merge(arguments[0]);
    }
    throw new TypeError('path must be a string or object');
};
/**
 * Specifies the complementary comparison value for paths specified with `where()`
 *
 * #### Example:
 *
 *     User.where('age').equals(49);
 *
 *     // is the same as
 *
 *     User.where('age', 49);
 *
 * @param {Object} val
 * @return {Query} this
 * @api public
 */ Query.prototype.equals = function equals(val) {
    this._ensurePath('equals');
    const path = this._path;
    this._conditions[path] = val;
    return this;
};
/**
 * Specifies the complementary comparison value for paths specified with `where()`
 * This is alias of `equals`
 *
 * #### Example:
 *
 *     User.where('age').eq(49);
 *
 *     // is the same as
 *
 *     User.shere('age').equals(49);
 *
 *     // is the same as
 *
 *     User.where('age', 49);
 *
 * @param {Object} val
 * @return {Query} this
 * @api public
 */ Query.prototype.eq = function eq(val) {
    this._ensurePath('eq');
    const path = this._path;
    this._conditions[path] = val;
    return this;
};
/**
 * Specifies arguments for an `$or` condition.
 *
 * #### Example:
 *
 *     query.or([{ color: 'red' }, { status: 'emergency' }])
 *
 * @param {Array} array array of conditions
 * @return {Query} this
 * @api public
 */ Query.prototype.or = function or(array) {
    const or = this._conditions.$or || (this._conditions.$or = []);
    if (!Array.isArray(array)) array = [
        array
    ];
    or.push.apply(or, array);
    return this;
};
/**
 * Specifies arguments for a `$nor` condition.
 *
 * #### Example:
 *
 *     query.nor([{ color: 'green' }, { status: 'ok' }])
 *
 * @param {Array} array array of conditions
 * @return {Query} this
 * @api public
 */ Query.prototype.nor = function nor(array) {
    const nor = this._conditions.$nor || (this._conditions.$nor = []);
    if (!Array.isArray(array)) array = [
        array
    ];
    nor.push.apply(nor, array);
    return this;
};
/**
 * Specifies arguments for a `$and` condition.
 *
 * #### Example:
 *
 *     query.and([{ color: 'green' }, { status: 'ok' }])
 *
 * @see $and http://docs.mongodb.org/manual/reference/operator/and/
 * @param {Array} array array of conditions
 * @return {Query} this
 * @api public
 */ Query.prototype.and = function and(array) {
    const and = this._conditions.$and || (this._conditions.$and = []);
    if (!Array.isArray(array)) array = [
        array
    ];
    and.push.apply(and, array);
    return this;
};
/**
 * Specifies a $gt query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * #### Example:
 *
 *     Thing.find().where('age').gt(21)
 *
 *     // or
 *     Thing.find().gt('age', 21)
 *
 * @method gt
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $gte query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method gte
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $lt query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method lt
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $lte query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method lte
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $ne query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method ne
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies an $in query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method in
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies an $nin query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method nin
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies an $all query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method all
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $size query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method size
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /**
 * Specifies a $regex query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method regex
 * @memberOf Query
 * @param {String} [path]
 * @param {String|RegExp} val
 * @api public
 */ /**
 * Specifies a $maxDistance query condition.
 *
 * When called with one argument, the most recent path passed to `where()` is used.
 *
 * @method maxDistance
 * @memberOf Query
 * @param {String} [path]
 * @param {Number} val
 * @api public
 */ /*!
 * gt, gte, lt, lte, ne, in, nin, all, regex, size, maxDistance
 *
 *     Thing.where('type').nin(array)
 */ 'gt gte lt lte ne in nin all regex size maxDistance minDistance'.split(' ').forEach(function($conditional) {
    Query.prototype[$conditional] = function() {
        let path, val;
        if (1 === arguments.length) {
            this._ensurePath($conditional);
            val = arguments[0];
            path = this._path;
        } else {
            val = arguments[1];
            path = arguments[0];
        }
        const conds = this._conditions[path] === null || typeof this._conditions[path] === 'object' ? this._conditions[path] : this._conditions[path] = {};
        conds['$' + $conditional] = val;
        return this;
    };
});
/**
 * Specifies a `$mod` condition
 *
 * @param {String} [path]
 * @param {Number} val
 * @return {Query} this
 * @api public
 */ Query.prototype.mod = function() {
    let val, path;
    if (1 === arguments.length) {
        this._ensurePath('mod');
        val = arguments[0];
        path = this._path;
    } else if (2 === arguments.length && !Array.isArray(arguments[1])) {
        this._ensurePath('mod');
        val = [
            arguments[0],
            arguments[1]
        ];
        path = this._path;
    } else if (3 === arguments.length) {
        val = [
            arguments[1],
            arguments[2]
        ];
        path = arguments[0];
    } else {
        val = arguments[1];
        path = arguments[0];
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds.$mod = val;
    return this;
};
/**
 * Specifies an `$exists` condition
 *
 * #### Example:
 *
 *     // { name: { $exists: true }}
 *     Thing.where('name').exists()
 *     Thing.where('name').exists(true)
 *     Thing.find().exists('name')
 *
 *     // { name: { $exists: false }}
 *     Thing.where('name').exists(false);
 *     Thing.find().exists('name', false);
 *
 * @param {String} [path]
 * @param {Number} val
 * @return {Query} this
 * @api public
 */ Query.prototype.exists = function() {
    let path, val;
    if (0 === arguments.length) {
        this._ensurePath('exists');
        path = this._path;
        val = true;
    } else if (1 === arguments.length) {
        if ('boolean' === typeof arguments[0]) {
            this._ensurePath('exists');
            path = this._path;
            val = arguments[0];
        } else {
            path = arguments[0];
            val = true;
        }
    } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds.$exists = val;
    return this;
};
/**
 * Specifies an `$elemMatch` condition
 *
 * #### Example:
 *
 *     query.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}})
 *
 *     query.where('comment').elemMatch({ author: 'autobot', votes: {$gte: 5}})
 *
 *     query.elemMatch('comment', function (elem) {
 *       elem.where('author').equals('autobot');
 *       elem.where('votes').gte(5);
 *     })
 *
 *     query.where('comment').elemMatch(function (elem) {
 *       elem.where({ author: 'autobot' });
 *       elem.where('votes').gte(5);
 *     })
 *
 * @param {String|Object|Function} path
 * @param {Object|Function} criteria
 * @return {Query} this
 * @api public
 */ Query.prototype.elemMatch = function() {
    if (null == arguments[0]) throw new TypeError('Invalid argument');
    let fn, path, criteria;
    if ('function' === typeof arguments[0]) {
        this._ensurePath('elemMatch');
        path = this._path;
        fn = arguments[0];
    } else if (utils.isObject(arguments[0])) {
        this._ensurePath('elemMatch');
        path = this._path;
        criteria = arguments[0];
    } else if ('function' === typeof arguments[1]) {
        path = arguments[0];
        fn = arguments[1];
    } else if (arguments[1] && utils.isObject(arguments[1])) {
        path = arguments[0];
        criteria = arguments[1];
    } else {
        throw new TypeError('Invalid argument');
    }
    if (fn) {
        criteria = new Query;
        fn(criteria);
        criteria = criteria._conditions;
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds.$elemMatch = criteria;
    return this;
};
// Spatial queries
/**
 * Sugar for geo-spatial queries.
 *
 * #### Example:
 *
 *     query.within().box()
 *     query.within().circle()
 *     query.within().geometry()
 *
 *     query.where('loc').within({ center: [50,50], radius: 10, unique: true, spherical: true });
 *     query.where('loc').within({ box: [[40.73, -73.9], [40.7, -73.988]] });
 *     query.where('loc').within({ polygon: [[],[],[],[]] });
 *
 *     query.where('loc').within([], [], []) // polygon
 *     query.where('loc').within([], []) // box
 *     query.where('loc').within({ type: 'LineString', coordinates: [...] }); // geometry
 *
 * #### Note:
 *
 * Must be used after `where()`.
 *
 * @memberOf Query
 * @return {Query} this
 * @api public
 */ Query.prototype.within = function within() {
    // opinionated, must be used after where
    this._ensurePath('within');
    this._geoComparison = $withinCmd;
    if (0 === arguments.length) {
        return this;
    }
    if (2 === arguments.length) {
        return this.box.apply(this, arguments);
    } else if (2 < arguments.length) {
        return this.polygon.apply(this, arguments);
    }
    const area = arguments[0];
    if (!area) throw new TypeError('Invalid argument');
    if (area.center) return this.circle(area);
    if (area.box) return this.box.apply(this, area.box);
    if (area.polygon) return this.polygon.apply(this, area.polygon);
    if (area.type && area.coordinates) return this.geometry(area);
    throw new TypeError('Invalid argument');
};
/**
 * Specifies a $box condition
 *
 * #### Example:
 *
 *     var lowerLeft = [40.73083, -73.99756]
 *     var upperRight= [40.741404,  -73.988135]
 *
 *     query.where('loc').within().box(lowerLeft, upperRight)
 *     query.box('loc', lowerLeft, upperRight )
 *
 * @see http://www.mongodb.org/display/DOCS/Geospatial+Indexing
 * @see Query#within #query_Query-within
 * @param {String} path
 * @param {Object} val
 * @return {Query} this
 * @api public
 */ Query.prototype.box = function() {
    let path, box;
    if (3 === arguments.length) {
        // box('loc', [], [])
        path = arguments[0];
        box = [
            arguments[1],
            arguments[2]
        ];
    } else if (2 === arguments.length) {
        // box([], [])
        this._ensurePath('box');
        path = this._path;
        box = [
            arguments[0],
            arguments[1]
        ];
    } else {
        throw new TypeError('Invalid argument');
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds[this._geoComparison || $withinCmd] = {
        $box: box
    };
    return this;
};
/**
 * Specifies a $polygon condition
 *
 * #### Example:
 *
 *     query.where('loc').within().polygon([10,20], [13, 25], [7,15])
 *     query.polygon('loc', [10,20], [13, 25], [7,15])
 *
 * @param {String|Array} [path]
 * @param {Array|Object} [val]
 * @return {Query} this
 * @see http://www.mongodb.org/display/DOCS/Geospatial+Indexing
 * @api public
 */ Query.prototype.polygon = function() {
    let val, path;
    if ('string' == typeof arguments[0]) {
        // polygon('loc', [],[],[])
        val = Array.from(arguments);
        path = val.shift();
    } else {
        // polygon([],[],[])
        this._ensurePath('polygon');
        path = this._path;
        val = Array.from(arguments);
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds[this._geoComparison || $withinCmd] = {
        $polygon: val
    };
    return this;
};
/**
 * Specifies a $center or $centerSphere condition.
 *
 * #### Example:
 *
 *     var area = { center: [50, 50], radius: 10, unique: true }
 *     query.where('loc').within().circle(area)
 *     query.center('loc', area);
 *
 *     // for spherical calculations
 *     var area = { center: [50, 50], radius: 10, unique: true, spherical: true }
 *     query.where('loc').within().circle(area)
 *     query.center('loc', area);
 *
 * @param {String} [path]
 * @param {Object} area
 * @return {Query} this
 * @see http://www.mongodb.org/display/DOCS/Geospatial+Indexing
 * @api public
 */ Query.prototype.circle = function() {
    let path, val;
    if (1 === arguments.length) {
        this._ensurePath('circle');
        path = this._path;
        val = arguments[0];
    } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
    } else {
        throw new TypeError('Invalid argument');
    }
    if (!('radius' in val && val.center)) throw new Error('center and radius are required');
    const conds = this._conditions[path] || (this._conditions[path] = {});
    const type = val.spherical ? '$centerSphere' : '$center';
    const wKey = this._geoComparison || $withinCmd;
    conds[wKey] = {};
    conds[wKey][type] = [
        val.center,
        val.radius
    ];
    if ('unique' in val) conds[wKey].$uniqueDocs = !!val.unique;
    return this;
};
/**
 * Specifies a `$near` or `$nearSphere` condition
 *
 * These operators return documents sorted by distance.
 *
 * #### Example:
 *
 *     query.where('loc').near({ center: [10, 10] });
 *     query.where('loc').near({ center: [10, 10], maxDistance: 5 });
 *     query.where('loc').near({ center: [10, 10], maxDistance: 5, spherical: true });
 *     query.near('loc', { center: [10, 10], maxDistance: 5 });
 *     query.near({ center: { type: 'Point', coordinates: [..] }})
 *     query.near().geometry({ type: 'Point', coordinates: [..] })
 *
 * @param {String} [path]
 * @param {Object} val
 * @return {Query} this
 * @see http://www.mongodb.org/display/DOCS/Geospatial+Indexing
 * @api public
 */ Query.prototype.near = function near() {
    let path, val;
    this._geoComparison = '$near';
    if (0 === arguments.length) {
        return this;
    } else if (1 === arguments.length) {
        this._ensurePath('near');
        path = this._path;
        val = arguments[0];
    } else if (2 === arguments.length) {
        path = arguments[0];
        val = arguments[1];
    } else {
        throw new TypeError('Invalid argument');
    }
    if (!val.center) {
        throw new Error('center is required');
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    const type = val.spherical ? '$nearSphere' : '$near';
    // center could be a GeoJSON object or an Array
    if (Array.isArray(val.center)) {
        conds[type] = val.center;
        const radius = 'maxDistance' in val ? val.maxDistance : null;
        if (null != radius) {
            conds.$maxDistance = radius;
        }
        if (null != val.minDistance) {
            conds.$minDistance = val.minDistance;
        }
    } else {
        // GeoJSON?
        if (val.center.type != 'Point' || !Array.isArray(val.center.coordinates)) {
            throw new Error(util.format('Invalid GeoJSON specified for %s', type));
        }
        conds[type] = {
            $geometry: val.center
        };
        // MongoDB 2.6 insists on maxDistance being in $near / $nearSphere
        if ('maxDistance' in val) {
            conds[type]['$maxDistance'] = val.maxDistance;
        }
        if ('minDistance' in val) {
            conds[type]['$minDistance'] = val.minDistance;
        }
    }
    return this;
};
/**
 * Declares an intersects query for `geometry()`.
 *
 * #### Example:
 *
 *     query.where('path').intersects().geometry({
 *         type: 'LineString'
 *       , coordinates: [[180.0, 11.0], [180, 9.0]]
 *     })
 *
 *     query.where('path').intersects({
 *         type: 'LineString'
 *       , coordinates: [[180.0, 11.0], [180, 9.0]]
 *     })
 *
 * @param {Object} [arg]
 * @return {Query} this
 * @api public
 */ Query.prototype.intersects = function intersects() {
    // opinionated, must be used after where
    this._ensurePath('intersects');
    this._geoComparison = '$geoIntersects';
    if (0 === arguments.length) {
        return this;
    }
    const area = arguments[0];
    if (null != area && area.type && area.coordinates) return this.geometry(area);
    throw new TypeError('Invalid argument');
};
/**
 * Specifies a `$geometry` condition
 *
 * #### Example:
 *
 *     var polyA = [[[ 10, 20 ], [ 10, 40 ], [ 30, 40 ], [ 30, 20 ]]]
 *     query.where('loc').within().geometry({ type: 'Polygon', coordinates: polyA })
 *
 *     // or
 *     var polyB = [[ 0, 0 ], [ 1, 1 ]]
 *     query.where('loc').within().geometry({ type: 'LineString', coordinates: polyB })
 *
 *     // or
 *     var polyC = [ 0, 0 ]
 *     query.where('loc').within().geometry({ type: 'Point', coordinates: polyC })
 *
 *     // or
 *     query.where('loc').intersects().geometry({ type: 'Point', coordinates: polyC })
 *
 * #### Note:
 *
 * `geometry()` **must** come after either `intersects()` or `within()`.
 *
 * The `object` argument must contain `type` and `coordinates` properties.
 * - type {String}
 * - coordinates {Array}
 *
 * The most recent path passed to `where()` is used.
 *
 * @param {Object} object Must contain a `type` property which is a String and a `coordinates` property which is an Array. See the examples.
 * @return {Query} this
 * @see http://docs.mongodb.org/manual/release-notes/2.4/#new-geospatial-indexes-with-geojson-and-improved-spherical-geometry
 * @see http://www.mongodb.org/display/DOCS/Geospatial+Indexing
 * @see $geometry http://docs.mongodb.org/manual/reference/operator/geometry/
 * @api public
 */ Query.prototype.geometry = function geometry() {
    if (!('$within' == this._geoComparison || '$geoWithin' == this._geoComparison || '$near' == this._geoComparison || '$geoIntersects' == this._geoComparison)) {
        throw new Error('geometry() must come after `within()`, `intersects()`, or `near()');
    }
    let val, path;
    if (1 === arguments.length) {
        this._ensurePath('geometry');
        path = this._path;
        val = arguments[0];
    } else {
        throw new TypeError('Invalid argument');
    }
    if (!(val.type && Array.isArray(val.coordinates))) {
        throw new TypeError('Invalid argument');
    }
    const conds = this._conditions[path] || (this._conditions[path] = {});
    conds[this._geoComparison] = {
        $geometry: val
    };
    return this;
};
// end spatial
/**
 * Specifies which document fields to include or exclude
 *
 * #### String syntax
 *
 * When passing a string, prefixing a path with `-` will flag that path as excluded. When a path does not have the `-` prefix, it is included.
 *
 * #### Example:
 *
 *     // include a and b, exclude c
 *     query.select('a b -c');
 *
 *     // or you may use object notation, useful when
 *     // you have keys already prefixed with a "-"
 *     query.select({a: 1, b: 1, c: 0});
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @param {Object|String} arg
 * @return {Query} this
 * @see SchemaType
 * @api public
 */ Query.prototype.select = function select() {
    let arg = arguments[0];
    if (!arg) return this;
    if (arguments.length !== 1) {
        throw new Error('Invalid select: select only takes 1 argument');
    }
    this._validate('select');
    const fields = this._fields || (this._fields = {});
    const type = typeof arg;
    let i, len;
    if (('string' == type || utils.isArgumentsObject(arg)) && 'number' == typeof arg.length || Array.isArray(arg)) {
        if ('string' == type) arg = arg.split(/\s+/);
        for(i = 0, len = arg.length; i < len; ++i){
            let field = arg[i];
            if (!field) continue;
            const include = '-' == field[0] ? 0 : 1;
            if (include === 0) field = field.substring(1);
            fields[field] = include;
        }
        return this;
    }
    if (utils.isObject(arg)) {
        const keys = utils.keys(arg);
        for(i = 0; i < keys.length; ++i){
            fields[keys[i]] = arg[keys[i]];
        }
        return this;
    }
    throw new TypeError('Invalid select() argument. Must be string or object.');
};
/**
 * Specifies a $slice condition for a `path`
 *
 * #### Example:
 *
 *     query.slice('comments', 5)
 *     query.slice('comments', -5)
 *     query.slice('comments', [10, 5])
 *     query.where('comments').slice(5)
 *     query.where('comments').slice([-10, 5])
 *
 * @param {String} [path]
 * @param {Number} val number/range of elements to slice
 * @return {Query} this
 * @see mongodb http://www.mongodb.org/display/DOCS/Retrieving+a+Subset+of+Fields#RetrievingaSubsetofFields-RetrievingaSubrangeofArrayElements
 * @api public
 */ Query.prototype.slice = function() {
    if (0 === arguments.length) return this;
    this._validate('slice');
    let path, val;
    if (1 === arguments.length) {
        const arg = arguments[0];
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            const keys = Object.keys(arg);
            const numKeys = keys.length;
            for(let i = 0; i < numKeys; ++i){
                this.slice(keys[i], arg[keys[i]]);
            }
            return this;
        }
        this._ensurePath('slice');
        path = this._path;
        val = arguments[0];
    } else if (2 === arguments.length) {
        if ('number' === typeof arguments[0]) {
            this._ensurePath('slice');
            path = this._path;
            val = [
                arguments[0],
                arguments[1]
            ];
        } else {
            path = arguments[0];
            val = arguments[1];
        }
    } else if (3 === arguments.length) {
        path = arguments[0];
        val = [
            arguments[1],
            arguments[2]
        ];
    }
    const myFields = this._fields || (this._fields = {});
    myFields[path] = {
        $slice: val
    };
    return this;
};
/**
 * Sets the sort order
 *
 * If an object is passed, values allowed are 'asc', 'desc', 'ascending', 'descending', 1, and -1.
 *
 * If a string is passed, it must be a space delimited list of path names. The sort order of each path is ascending unless the path name is prefixed with `-` which will be treated as descending.
 *
 * #### Example:
 *
 *     // these are equivalent
 *     query.sort({ field: 'asc', test: -1 });
 *     query.sort('field -test');
 *     query.sort([['field', 1], ['test', -1]]);
 *
 * #### Note:
 *
 *  - The array syntax `.sort([['field', 1], ['test', -1]])` can only be used with [mongodb driver >= 2.0.46](https://github.com/mongodb/node-mongodb-native/blob/2.1/HISTORY.md#2046-2015-10-15).
 *  - Cannot be used with `distinct()`
 *
 * @param {Object|String|Array} arg
 * @return {Query} this
 * @api public
 */ Query.prototype.sort = function(arg) {
    if (!arg) return this;
    let i, len, field;
    this._validate('sort');
    const type = typeof arg;
    // .sort([['field', 1], ['test', -1]])
    if (Array.isArray(arg)) {
        len = arg.length;
        for(i = 0; i < arg.length; ++i){
            if (!Array.isArray(arg[i])) {
                throw new Error('Invalid sort() argument, must be array of arrays');
            }
            _pushArr(this.options, arg[i][0], arg[i][1]);
        }
        return this;
    }
    // .sort('field -test')
    if (1 === arguments.length && 'string' == type) {
        arg = arg.split(/\s+/);
        len = arg.length;
        for(i = 0; i < len; ++i){
            field = arg[i];
            if (!field) continue;
            const ascend = '-' == field[0] ? -1 : 1;
            if (ascend === -1) field = field.substring(1);
            push(this.options, field, ascend);
        }
        return this;
    }
    // .sort({ field: 1, test: -1 })
    if (utils.isObject(arg)) {
        const keys = utils.keys(arg);
        for(i = 0; i < keys.length; ++i){
            field = keys[i];
            push(this.options, field, arg[field]);
        }
        return this;
    }
    if (typeof Map !== 'undefined' && arg instanceof Map) {
        _pushMap(this.options, arg);
        return this;
    }
    throw new TypeError('Invalid sort() argument. Must be a string, object, or array.');
};
/*!
 * @ignore
 */ const _validSortValue = {
    1: 1,
    '-1': -1,
    asc: 1,
    ascending: 1,
    desc: -1,
    descending: -1
};
function push(opts, field, value) {
    if (Array.isArray(opts.sort)) {
        throw new TypeError('Can\'t mix sort syntaxes. Use either array or object:' + '\n- `.sort([[\'field\', 1], [\'test\', -1]])`' + '\n- `.sort({ field: 1, test: -1 })`');
    }
    let s;
    if (value && value.$meta) {
        s = opts.sort || (opts.sort = {});
        s[field] = {
            $meta: value.$meta
        };
        return;
    }
    s = opts.sort || (opts.sort = {});
    let val = String(value || 1).toLowerCase();
    val = _validSortValue[val];
    if (!val) throw new TypeError('Invalid sort value: { ' + field + ': ' + value + ' }');
    s[field] = val;
}
function _pushArr(opts, field, value) {
    opts.sort = opts.sort || [];
    if (!Array.isArray(opts.sort)) {
        throw new TypeError('Can\'t mix sort syntaxes. Use either array or object:' + '\n- `.sort([[\'field\', 1], [\'test\', -1]])`' + '\n- `.sort({ field: 1, test: -1 })`');
    }
    let val = String(value || 1).toLowerCase();
    val = _validSortValue[val];
    if (!val) throw new TypeError('Invalid sort value: [ ' + field + ', ' + value + ' ]');
    opts.sort.push([
        field,
        val
    ]);
}
function _pushMap(opts, map) {
    opts.sort = opts.sort || new Map();
    if (!(opts.sort instanceof Map)) {
        throw new TypeError('Can\'t mix sort syntaxes. Use either array or ' + 'object or map consistently');
    }
    map.forEach(function(value, key) {
        let val = String(value || 1).toLowerCase();
        val = _validSortValue[val];
        if (!val) throw new TypeError('Invalid sort value: < ' + key + ': ' + value + ' >');
        opts.sort.set(key, val);
    });
}
/**
 * Specifies the limit option.
 *
 * #### Example:
 *
 *     query.limit(20)
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @method limit
 * @memberOf Query
 * @param {Number} val
 * @see mongodb http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Blimit%28%29%7D%7D
 * @api public
 */ /**
 * Specifies the skip option.
 *
 * #### Example:
 *
 *     query.skip(100).limit(20)
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @method skip
 * @memberOf Query
 * @param {Number} val
 * @see mongodb http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7Bskip%28%29%7D%7D
 * @api public
 */ /**
 * Specifies the batchSize option.
 *
 * #### Example:
 *
 *     query.batchSize(100)
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @method batchSize
 * @memberOf Query
 * @param {Number} val
 * @see mongodb http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%7B%7BbatchSize%28%29%7D%7D
 * @api public
 */ /**
 * Specifies the `comment` option.
 *
 * #### Example:
 *
 *     query.comment('login query')
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @method comment
 * @memberOf Query
 * @param {Number} val
 * @see mongodb http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24comment
 * @api public
 */ /*!
 * limit, skip, batchSize, comment
 *
 * Sets these associated options.
 *
 *     query.comment('feed query');
 */ [
    'limit',
    'skip',
    'batchSize',
    'comment'
].forEach(function(method) {
    Query.prototype[method] = function(v) {
        this._validate(method);
        this.options[method] = v;
        return this;
    };
});
/**
 * Specifies the maxTimeMS option.
 *
 * #### Example:
 *
 *     query.maxTime(100)
 *     query.maxTimeMS(100)
 *
 * @method maxTime
 * @memberOf Query
 * @param {Number} ms
 * @see mongodb http://docs.mongodb.org/manual/reference/operator/meta/maxTimeMS/#op._S_maxTimeMS
 * @api public
 */ Query.prototype.maxTime = Query.prototype.maxTimeMS = function(ms) {
    this._validate('maxTime');
    this.options.maxTimeMS = ms;
    return this;
};
/**
 * Sets query hints.
 *
 * #### Example:
 *
 *     query.hint({ indexA: 1, indexB: -1});
 *     query.hint('indexA_1_indexB_1');
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @param {Object|string} val a hint object or the index name
 * @return {Query} this
 * @see mongodb http://www.mongodb.org/display/DOCS/Advanced+Queries#AdvancedQueries-%24hint
 * @api public
 */ Query.prototype.hint = function() {
    if (0 === arguments.length) return this;
    this._validate('hint');
    const arg = arguments[0];
    if (utils.isObject(arg)) {
        const hint = this.options.hint || (this.options.hint = {});
        // must keep object keys in order so don't use Object.keys()
        for(const k in arg){
            hint[k] = arg[k];
        }
        return this;
    }
    if (typeof arg === 'string') {
        this.options.hint = arg;
        return this;
    }
    throw new TypeError('Invalid hint. ' + arg);
};
/**
 * Requests acknowledgement that this operation has been persisted to MongoDB's
 * on-disk journal.
 * This option is only valid for operations that write to the database:
 *
 * - `deleteOne()`
 * - `deleteMany()`
 * - `findOneAndDelete()`
 * - `findOneAndUpdate()`
 * - `updateOne()`
 * - `updateMany()`
 *
 * Defaults to the `j` value if it is specified in writeConcern options
 *
 * #### Example:
 *
 *     mquery().w(2).j(true).wtimeout(2000);
 *
 * @method j
 * @memberOf Query
 * @instance
 * @param {boolean} val
 * @see mongodb https://docs.mongodb.com/manual/reference/write-concern/#j-option
 * @return {Query} this
 * @api public
 */ Query.prototype.j = function j(val) {
    this.options.j = val;
    return this;
};
/**
 * Sets the slaveOk option. _Deprecated_ in MongoDB 2.2 in favor of read preferences.
 *
 * #### Example:
 *
 *     query.slaveOk() // true
 *     query.slaveOk(true)
 *     query.slaveOk(false)
 *
 * @deprecated use read() preferences instead if on mongodb >= 2.2
 * @param {Boolean} v defaults to true
 * @see mongodb http://docs.mongodb.org/manual/applications/replication/#read-preference
 * @see read()
 * @return {Query} this
 * @api public
 */ Query.prototype.slaveOk = function(v) {
    this.options.slaveOk = arguments.length ? !!v : true;
    return this;
};
/**
 * Sets the readPreference option for the query.
 *
 * #### Example:
 *
 *     new Query().read('primary')
 *     new Query().read('p')  // same as primary
 *
 *     new Query().read('primaryPreferred')
 *     new Query().read('pp') // same as primaryPreferred
 *
 *     new Query().read('secondary')
 *     new Query().read('s')  // same as secondary
 *
 *     new Query().read('secondaryPreferred')
 *     new Query().read('sp') // same as secondaryPreferred
 *
 *     new Query().read('nearest')
 *     new Query().read('n')  // same as nearest
 *
 *     // you can also use mongodb.ReadPreference class to also specify tags
 *     new Query().read(mongodb.ReadPreference('secondary', [{ dc:'sf', s: 1 },{ dc:'ma', s: 2 }]))
 *
 *     new Query().setReadPreference('primary') // alias of .read()
 *
 * #### Preferences:
 *
 *     primary - (default)  Read from primary only. Operations will produce an error if primary is unavailable. Cannot be combined with tags.
 *     secondary            Read from secondary if available, otherwise error.
 *     primaryPreferred     Read from primary if available, otherwise a secondary.
 *     secondaryPreferred   Read from a secondary if available, otherwise read from the primary.
 *     nearest              All operations read from among the nearest candidates, but unlike other modes, this option will include both the primary and all secondaries in the random selection.
 *
 * Aliases
 *
 *     p   primary
 *     pp  primaryPreferred
 *     s   secondary
 *     sp  secondaryPreferred
 *     n   nearest
 *
 * Read more about how to use read preferences [here](http://docs.mongodb.org/manual/applications/replication/#read-preference) and [here](http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences).
 *
 * @param {String|ReadPreference} pref one of the listed preference options or their aliases
 * @see mongodb http://docs.mongodb.org/manual/applications/replication/#read-preference
 * @see driver http://mongodb.github.com/node-mongodb-native/driver-articles/anintroductionto1_1and2_2.html#read-preferences
 * @return {Query} this
 * @api public
 */ Query.prototype.read = Query.prototype.setReadPreference = function(pref) {
    if (arguments.length > 1 && !Query.prototype.read.deprecationWarningIssued) {
        console.error('Deprecation warning: \'tags\' argument is not supported anymore in Query.read() method. Please use mongodb.ReadPreference object instead.');
        Query.prototype.read.deprecationWarningIssued = true;
    }
    this.options.readPreference = utils.readPref(pref);
    return this;
};
/**
 * Sets the readConcern option for the query.
 *
 * #### Example:
 *
 *     new Query().readConcern('local')
 *     new Query().readConcern('l')  // same as local
 *
 *     new Query().readConcern('available')
 *     new Query().readConcern('a')  // same as available
 *
 *     new Query().readConcern('majority')
 *     new Query().readConcern('m')  // same as majority
 *
 *     new Query().readConcern('linearizable')
 *     new Query().readConcern('lz') // same as linearizable
 *
 *     new Query().readConcern('snapshot')
 *     new Query().readConcern('s')  // same as snapshot
 *
 *     new Query().r('s') // r is alias of readConcern
 *
 *
 * #### Read Concern Level:
 *
 *     local         MongoDB 3.2+ The query returns from the instance with no guarantee guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back).
 *     available     MongoDB 3.6+ The query returns from the instance with no guarantee guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back).
 *     majority      MongoDB 3.2+ The query returns the data that has been acknowledged by a majority of the replica set members. The documents returned by the read operation are durable, even in the event of failure.
 *     linearizable  MongoDB 3.4+ The query returns data that reflects all successful majority-acknowledged writes that completed prior to the start of the read operation. The query may wait for concurrently executing writes to propagate to a majority of replica set members before returning results.
 *     snapshot      MongoDB 4.0+ Only available for operations within multi-document transactions. Upon transaction commit with write concern "majority", the transaction operations are guaranteed to have read from a snapshot of majority-committed data.
 *
 * Aliases
 *
 *     l   local
 *     a   available
 *     m   majority
 *     lz  linearizable
 *     s   snapshot
 *
 * Read more about how to use read concern [here](https://docs.mongodb.com/manual/reference/read-concern/).
 *
 * @param {String} level one of the listed read concern level or their aliases
 * @see mongodb https://docs.mongodb.com/manual/reference/read-concern/
 * @return {Query} this
 * @api public
 */ Query.prototype.readConcern = Query.prototype.r = function(level) {
    this.options.readConcern = utils.readConcern(level);
    return this;
};
/**
 * Sets tailable option.
 *
 * #### Example:
 *
 *     query.tailable() <== true
 *     query.tailable(true)
 *     query.tailable(false)
 *
 * #### Note:
 *
 * Cannot be used with `distinct()`
 *
 * @param {Boolean} v defaults to true
 * @see mongodb http://www.mongodb.org/display/DOCS/Tailable+Cursors
 * @api public
 */ Query.prototype.tailable = function() {
    this._validate('tailable');
    this.options.tailable = arguments.length ? !!arguments[0] : true;
    return this;
};
/**
 * Sets the specified number of `mongod` servers, or tag set of `mongod` servers,
 * that must acknowledge this write before this write is considered successful.
 * This option is only valid for operations that write to the database:
 *
 * - `deleteOne()`
 * - `deleteMany()`
 * - `findOneAndDelete()`
 * - `findOneAndUpdate()`
 * - `updateOne()`
 * - `updateMany()`
 *
 * Defaults to the `w` value if it is specified in writeConcern options
 *
 * #### Example:
 *
 *     mquery().writeConcern(0)
 *     mquery().writeConcern(1)
 *     mquery().writeConcern({ w: 1, j: true, wtimeout: 2000 })
 *     mquery().writeConcern('majority')
 *     mquery().writeConcern('m') // same as majority
 *     mquery().writeConcern('tagSetName') // if the tag set is 'm', use .writeConcern({ w: 'm' }) instead
 *     mquery().w(1) // w is alias of writeConcern
 *
 * @method writeConcern
 * @memberOf Query
 * @instance
 * @param {String|number|object} concern 0 for fire-and-forget, 1 for acknowledged by one server, 'majority' for majority of the replica set, or [any of the more advanced options](https://docs.mongodb.com/manual/reference/write-concern/#w-option).
 * @see mongodb https://docs.mongodb.com/manual/reference/write-concern/#w-option
 * @return {Query} this
 * @api public
 */ Query.prototype.writeConcern = Query.prototype.w = function writeConcern(concern) {
    if ('object' === typeof concern) {
        if ('undefined' !== typeof concern.j) this.options.j = concern.j;
        if ('undefined' !== typeof concern.w) this.options.w = concern.w;
        if ('undefined' !== typeof concern.wtimeout) this.options.wtimeout = concern.wtimeout;
    } else {
        this.options.w = 'm' === concern ? 'majority' : concern;
    }
    return this;
};
/**
 * Specifies a time limit, in milliseconds, for the write concern.
 * If `ms > 1`, it is maximum amount of time to wait for this write
 * to propagate through the replica set before this operation fails.
 * The default is `0`, which means no timeout.
 *
 * This option is only valid for operations that write to the database:
 *
 * - `deleteOne()`
 * - `deleteMany()`
 * - `findOneAndDelete()`
 * - `findOneAndUpdate()`
 * - `updateOne()`
 * - `updateMany()`
 *
 * Defaults to `wtimeout` value if it is specified in writeConcern
 *
 * #### Example:
 *
 *     mquery().w(2).j(true).wtimeout(2000)
 *
 * @method wtimeout
 * @memberOf Query
 * @instance
 * @param {number} ms number of milliseconds to wait
 * @see mongodb https://docs.mongodb.com/manual/reference/write-concern/#wtimeout
 * @return {Query} this
 * @api public
 */ Query.prototype.wtimeout = Query.prototype.wTimeout = function wtimeout(ms) {
    this.options.wtimeout = ms;
    return this;
};
/**
 * Merges another Query or conditions object into this one.
 *
 * When a Query is passed, conditions, field selection and options are merged.
 *
 * @param {Query|Object} source
 * @return {Query} this
 */ Query.prototype.merge = function(source) {
    if (!source) return this;
    if (!Query.canMerge(source)) throw new TypeError('Invalid argument. Expected instanceof mquery or plain object');
    if (source instanceof Query) {
        // if source has a feature, apply it to ourselves
        if (source._conditions) {
            utils.merge(this._conditions, source._conditions);
        }
        if (source._fields) {
            this._fields || (this._fields = {});
            utils.merge(this._fields, source._fields);
        }
        if (source.options) {
            this.options || (this.options = {});
            utils.merge(this.options, source.options);
        }
        if (source._updateDoc) {
            this._updateDoc || (this._updateDoc = {});
            utils.mergeClone(this._updateDoc, source._updateDoc);
        }
        if (source._distinctDoc) {
            this._distinctDoc = source._distinctDoc;
        }
        return this;
    }
    // plain object
    utils.merge(this._conditions, source);
    return this;
};
/**
 * Finds documents.
 *
 * #### Example:
 *
 *     query.find()
 *     await query.find()
 *     await query.find({ name: 'Burning Lights' })
 *
 * @param {Object} [criteria] mongodb selector
 * @return {Query} this
 * @api public
 */ Query.prototype.find = function(criteria) {
    this.op = 'find';
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `find` Query
 * @returns the result
 */ Query.prototype._find = async function _find() {
    const conds = this._conditions;
    const options = this._optionsForExec();
    if (this.$useProjection) {
        options.projection = this._fieldsForExec();
    } else {
        options.fields = this._fieldsForExec();
    }
    debug('_find', this._collection.collectionName, conds, options);
    return this._collection.find(conds, options);
};
/**
 * Returns the query cursor
 *
 * #### Examples:
 *
 *     query.find().cursor();
 *     query.cursor({ name: 'Burning Lights' });
 *
 * @param {Object} [criteria] mongodb selector
 * @return {Object} cursor
 * @api public
 */ Query.prototype.cursor = function cursor(criteria) {
    if (this.op) {
        if (this.op !== 'find') {
            throw new TypeError('.cursor only support .find method');
        }
    } else {
        this.find(criteria);
    }
    const conds = this._conditions;
    const options = this._optionsForExec();
    if (this.$useProjection) {
        options.projection = this._fieldsForExec();
    } else {
        options.fields = this._fieldsForExec();
    }
    debug('findCursor', this._collection.collectionName, conds, options);
    return this._collection.findCursor(conds, options);
};
/**
 * Executes the query as a findOne() operation.
 *
 * #### Example:
 *
 *     query.findOne().where('name', /^Burning/);
 *
 *     query.findOne({ name: /^Burning/ })
 *
 *     await query.findOne({ name: /^Burning/ }); // executes
 *
 * @param {Object|Query} [criteria] mongodb selector
 * @return {Query} this
 * @api public
 */ Query.prototype.findOne = function(criteria) {
    this.op = 'findOne';
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `findOne` Query
 * @returns the results
 */ Query.prototype._findOne = async function _findOne() {
    const conds = this._conditions;
    const options = this._optionsForExec();
    if (this.$useProjection) {
        options.projection = this._fieldsForExec();
    } else {
        options.fields = this._fieldsForExec();
    }
    debug('findOne', this._collection.collectionName, conds, options);
    return this._collection.findOne(conds, options);
};
/**
 * Exectues the query as a count() operation.
 *
 * #### Example:
 *
 *     query.count().where('color', 'black').exec();
 *
 *     query.count({ color: 'black' })
 *
 *     await query.count({ color: 'black' });
 *
 *     const doc = await query.where('color', 'black').count();
 *     console.log('there are %d kittens', count);
 *
 * @param {Object} [criteria] mongodb selector
 * @return {Query} this
 * @see mongodb http://www.mongodb.org/display/DOCS/Aggregation#Aggregation-Count
 * @api public
 */ Query.prototype.count = function(criteria) {
    this.op = 'count';
    this._validate();
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `count` Query
 * @returns the results
 */ Query.prototype._count = async function _count() {
    const conds = this._conditions, options = this._optionsForExec();
    debug('count', this._collection.collectionName, conds, options);
    return this._collection.count(conds, options);
};
/**
 * Declares or executes a distinct() operation.
 *
 * #### Example:
 *
 *     await distinct(criteria, field)
 *     distinct(criteria, field)
 *     await distinct(field)
 *     distinct(field)
 *     await distinct()
 *     distinct()
 *
 * @param {Object|Query} [criteria]
 * @param {String} [field]
 * @return {Query} this
 * @see mongodb http://www.mongodb.org/display/DOCS/Aggregation#Aggregation-Distinct
 * @api public
 */ Query.prototype.distinct = function(criteria, field) {
    this.op = 'distinct';
    this._validate();
    if (!field && typeof criteria === 'string') {
        field = criteria;
        criteria = undefined;
    }
    if ('string' == typeof field) {
        this._distinctDoc = field;
    }
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `distinct` Query
 * @returns the results
 */ Query.prototype._distinct = async function _distinct() {
    if (!this._distinctDoc) {
        throw new Error('No value for `distinct` has been declared');
    }
    const conds = this._conditions, options = this._optionsForExec();
    debug('distinct', this._collection.collectionName, conds, options);
    return this._collection.distinct(this._distinctDoc, conds, options);
};
/**
 * Declare and/or execute this query as an `updateMany()` operation. This function will update _all_ documents that match
 * `criteria`, rather than just the first one.
 *
 * _All paths passed that are not $atomic operations will become $set ops._
 *
 * #### Example:
 *
 *     // Update every document whose `title` contains 'test'
 *     mquery().updateMany({ title: /test/ }, { year: 2017 })
 *
 * @param {Object} [criteria]
 * @param {Object} [doc] the update command
 * @param {Object} [options]
 * @return {Query} this
 * @api public
 */ Query.prototype.updateMany = function updateMany(criteria, doc, options) {
    if (arguments.length === 1) {
        doc = criteria;
        criteria = options = undefined;
    }
    return _update(this, 'updateMany', criteria, doc, options);
};
/**
 * Executes a `updateMany` Query
 * @returns the results
 */ Query.prototype._updateMany = async function() {
    return _updateExec(this, 'updateMany');
};
/**
 * Declare and/or execute this query as an `updateOne()` operation. This function will _always_ update just one document,
 * regardless of the `multi` option.
 *
 * _All paths passed that are not $atomic operations will become $set ops._
 *
 * #### Example:
 *
 *     // Update the first document whose `title` contains 'test'
 *     mquery().updateMany({ title: /test/ }, { year: 2017 })
 *
 * @param {Object} [criteria]
 * @param {Object} [doc] the update command
 * @param {Object} [options]
 * @return {Query} this
 * @api public
 */ Query.prototype.updateOne = function updateOne(criteria, doc, options) {
    if (arguments.length === 1) {
        doc = criteria;
        criteria = options = undefined;
    }
    return _update(this, 'updateOne', criteria, doc, options);
};
/**
 * Executes a `updateOne` Query
 * @returns the results
 */ Query.prototype._updateOne = async function() {
    return _updateExec(this, 'updateOne');
};
/**
 * Declare and/or execute this query as an `replaceOne()` operation. Similar
 * to `updateOne()`, except `replaceOne()` is not allowed to use atomic
 * modifiers (`$set`, `$push`, etc.). Calling `replaceOne()` will always
 * replace the existing doc.
 *
 * #### Example:
 *
 *     // Replace the document with `_id` 1 with `{ _id: 1, year: 2017 }`
 *     mquery().replaceOne({ _id: 1 }, { year: 2017 })
 *
 * @param {Object} [criteria]
 * @param {Object} [doc] the update command
 * @param {Object} [options]
 * @return {Query} this
 * @api public
 */ Query.prototype.replaceOne = function replaceOne(criteria, doc, options) {
    if (arguments.length === 1) {
        doc = criteria;
        criteria = options = undefined;
    }
    this.setOptions({
        overwrite: true
    });
    return _update(this, 'replaceOne', criteria, doc, options);
};
/**
 * Executes a `replaceOne` Query
 * @returns the results
 */ Query.prototype._replaceOne = async function() {
    return _updateExec(this, 'replaceOne');
};
/*!
 * Internal helper for updateMany, updateOne
 */ function _update(query, op, criteria, doc, options) {
    query.op = op;
    if (Query.canMerge(criteria)) {
        query.merge(criteria);
    }
    if (doc) {
        query._mergeUpdate(doc);
    }
    if (utils.isObject(options)) {
        // { overwrite: true }
        query.setOptions(options);
    }
    return query;
}
/**
 * Helper for de-duplicating "update*" functions
 * @param {Query} query The Query Object (replacement for "this")
 * @param {String} op The Operation to be done
 * @returns the results
 */ async function _updateExec(query, op) {
    const options = query._optionsForExec();
    const criteria = query._conditions;
    const doc = query._updateForExec();
    debug('update', query._collection.collectionName, criteria, doc, options);
    return query._collection[op](criteria, doc, options);
}
/**
 * Declare and/or execute this query as a `deleteOne()` operation.
 *
 * #### Example:
 *
 *     await mquery(collection).deleteOne({ artist: 'Anne Murray' })
 *
 * @param {Object|Query} [criteria] mongodb selector
 * @return {Query} this
 * @api public
 */ Query.prototype.deleteOne = function(criteria) {
    this.op = 'deleteOne';
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `deleteOne` Query
 * @returns the results
 */ Query.prototype._deleteOne = async function() {
    const options = this._optionsForExec();
    delete options.justOne;
    const conds = this._conditions;
    debug('deleteOne', this._collection.collectionName, conds, options);
    return this._collection.deleteOne(conds, options);
};
/**
 * Declare and/or execute this query as a `deleteMany()` operation. Always deletes
 * _every_ document that matches `criteria`.
 *
 * #### Example:
 *
 *     await mquery(collection).deleteMany({ artist: 'Anne Murray' })
 *
 * @param {Object|Query} [criteria] mongodb selector
 * @return {Query} this
 * @api public
 */ Query.prototype.deleteMany = function(criteria) {
    this.op = 'deleteMany';
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    return this;
};
/**
 * Executes a `deleteMany` Query
 * @returns the results
 */ Query.prototype._deleteMany = async function() {
    const options = this._optionsForExec();
    delete options.justOne;
    const conds = this._conditions;
    debug('deleteOne', this._collection.collectionName, conds, options);
    return this._collection.deleteMany(conds, options);
};
/**
 * Issues a mongodb [findAndModify](http://www.mongodb.org/display/DOCS/findAndModify+Command) update command.
 *
 * Finds a matching document, updates it according to the `update` arg, passing any `options`, and returns the found document (if any).
 *
 * #### Available options
 *
 * - `new`: bool - true to return the modified document rather than the original. defaults to true
 * - `upsert`: bool - creates the object if it doesn't exist. defaults to false.
 * - `sort`: if multiple docs are found by the conditions, sets the sort order to choose which doc to update
 *
 * #### Examples:
 *
 *     await query.findOneAndUpdate(conditions, update, options) // executes
 *     query.findOneAndUpdate(conditions, update, options)  // returns Query
 *     await query.findOneAndUpdate(conditions, update) // executes
 *     query.findOneAndUpdate(conditions, update)           // returns Query
 *     await query.findOneAndUpdate(update)             // returns Query
 *     query.findOneAndUpdate(update)                       // returns Query
 *     await query.findOneAndUpdate()                     // executes
 *     query.findOneAndUpdate()                             // returns Query
 *
 * @param {Object|Query} [query]
 * @param {Object} [doc]
 * @param {Object} [options]
 * @see mongodb http://www.mongodb.org/display/DOCS/findAndModify+Command
 * @return {Query} this
 * @api public
 */ Query.prototype.findOneAndUpdate = function(criteria, doc, options) {
    this.op = 'findOneAndUpdate';
    this._validate();
    if (arguments.length === 1) {
        doc = criteria;
        criteria = options = undefined;
    }
    if (Query.canMerge(criteria)) {
        this.merge(criteria);
    }
    // apply doc
    if (doc) {
        this._mergeUpdate(doc);
    }
    options && this.setOptions(options);
    return this;
};
/**
 * Executes a `findOneAndUpdate` Query
 * @returns the results
 */ Query.prototype._findOneAndUpdate = async function() {
    const conds = this._conditions;
    const update = this._updateForExec();
    const options = this._optionsForExec();
    return this._collection.findOneAndUpdate(conds, update, options);
};
/**
 * Issues a mongodb [findAndModify](http://www.mongodb.org/display/DOCS/findAndModify+Command) remove command.
 *
 * Finds a matching document, removes it, returning the found document (if any).
 *
 * #### Available options
 *
 * - `sort`: if multiple docs are found by the conditions, sets the sort order to choose which doc to update
 *
 * #### Examples:
 *
 *     await A.where().findOneAndRemove(conditions, options) // executes
 *     A.where().findOneAndRemove(conditions, options)  // return Query
 *     await A.where().findOneAndRemove(conditions) // executes
 *     A.where().findOneAndRemove(conditions) // returns Query
 *     await A.where().findOneAndRemove()   // executes
 *     A.where().findOneAndRemove()           // returns Query
 *     A.where().findOneAndDelete()           // alias of .findOneAndRemove()
 *
 * @param {Object} [conditions]
 * @param {Object} [options]
 * @return {Query} this
 * @see mongodb http://www.mongodb.org/display/DOCS/findAndModify+Command
 * @api public
 */ Query.prototype.findOneAndRemove = Query.prototype.findOneAndDelete = function(conditions, options) {
    this.op = 'findOneAndRemove';
    this._validate();
    // apply conditions
    if (Query.canMerge(conditions)) {
        this.merge(conditions);
    }
    // apply options
    options && this.setOptions(options);
    return this;
};
/**
 * Executes a `findOneAndRemove` Query
 * @returns the results
 */ Query.prototype._findOneAndRemove = async function() {
    const options = this._optionsForExec();
    const conds = this._conditions;
    return this._collection.findOneAndDelete(conds, options);
};
/**
 * Add trace function that gets called when the query is executed.
 * The function will be called with (method, queryInfo, query) and
 * should return a callback function which will be called
 * with (err, result, millis) when the query is complete.
 *
 * queryInfo is an object containing: {
 *   collectionName: <name of the collection>,
 *   conditions: <query criteria>,
 *   options: <comment, fields, readPreference, etc>,
 *   doc: [document to update, if applicable]
 * }
 *
 * NOTE: Does not trace stream queries.
 *
 * @param {Function} traceFunction
 * @return {Query} this
 * @api public
 */ Query.prototype.setTraceFunction = function(traceFunction) {
    this._traceFunction = traceFunction;
    return this;
};
/**
 * Executes the query
 *
 * #### Examples:
 *
 *     query.exec();
 *     await query.exec();
 *     query.exec('update');
 *     await query.exec('find');
 *
 * @param {String|Function} [operation]
 * @api public
 */ Query.prototype.exec = async function exec(op) {
    if (typeof op === 'string') {
        this.op = op;
    }
    assert.ok(this.op, 'Missing query type: (find, etc)');
    const fnName = '_' + this.op;
    // better error, because default would list it as "this[fnName] is not a function"
    if (typeof this[fnName] !== 'function') {
        throw new TypeError(`this[${fnName}] is not a function`);
    }
    return this[fnName]();
};
/**
 * Executes the query returning a `Promise` which will be
 * resolved with either the doc(s) or rejected with the error.
 *
 * @param {Function} [resolve]
 * @param {Function} [reject]
 * @return {Promise}
 * @api public
 */ Query.prototype.then = async function(res, rej) {
    return this.exec().then(res, rej);
};
/**
 * Returns a cursor for the given `find` query.
 *
 * @throws Error if operation is not a find
 * @returns {Cursor} MongoDB driver cursor
 */ Query.prototype.cursor = function() {
    if ('find' != this.op) throw new Error('cursor() is only available for find');
    const conds = this._conditions;
    const options = this._optionsForExec();
    if (this.$useProjection) {
        options.projection = this._fieldsForExec();
    } else {
        options.fields = this._fieldsForExec();
    }
    debug('cursor', this._collection.collectionName, conds, options);
    return this._collection.findCursor(conds, options);
};
/**
 * Determines if field selection has been made.
 *
 * @return {Boolean}
 * @api public
 */ Query.prototype.selected = function selected() {
    return !!(this._fields && Object.keys(this._fields).length > 0);
};
/**
 * Determines if inclusive field selection has been made.
 *
 *     query.selectedInclusively() // false
 *     query.select('name')
 *     query.selectedInclusively() // true
 *     query.selectedExlusively() // false
 *
 * @returns {Boolean}
 */ Query.prototype.selectedInclusively = function selectedInclusively() {
    if (!this._fields) return false;
    const keys = Object.keys(this._fields);
    if (0 === keys.length) return false;
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (0 === this._fields[key]) return false;
        if (this._fields[key] && typeof this._fields[key] === 'object' && this._fields[key].$meta) {
            return false;
        }
    }
    return true;
};
/**
 * Determines if exclusive field selection has been made.
 *
 *     query.selectedExlusively() // false
 *     query.select('-name')
 *     query.selectedExlusively() // true
 *     query.selectedInclusively() // false
 *
 * @returns {Boolean}
 */ Query.prototype.selectedExclusively = function selectedExclusively() {
    if (!this._fields) return false;
    const keys = Object.keys(this._fields);
    if (0 === keys.length) return false;
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (0 === this._fields[key]) return true;
    }
    return false;
};
/**
 * Merges `doc` with the current update object.
 *
 * @param {Object} doc
 */ Query.prototype._mergeUpdate = function(doc) {
    if (!this._updateDoc) this._updateDoc = {};
    if (doc instanceof Query) {
        if (doc._updateDoc) {
            utils.mergeClone(this._updateDoc, doc._updateDoc);
        }
    } else {
        utils.mergeClone(this._updateDoc, doc);
    }
};
/**
 * Returns default options.
 *
 * @return {Object}
 * @api private
 */ Query.prototype._optionsForExec = function() {
    const options = utils.clone(this.options);
    return options;
};
/**
 * Returns fields selection for this query.
 *
 * @return {Object}
 * @api private
 */ Query.prototype._fieldsForExec = function() {
    return utils.clone(this._fields);
};
/**
 * Return an update document with corrected $set operations.
 *
 * @api private
 */ Query.prototype._updateForExec = function() {
    const update = utils.clone(this._updateDoc);
    const ops = utils.keys(update);
    const ret = {};
    for (const op of ops){
        if (this.options.overwrite) {
            ret[op] = update[op];
            continue;
        }
        if ('$' !== op[0]) {
            // fix up $set sugar
            if (!ret.$set) {
                if (update.$set) {
                    ret.$set = update.$set;
                } else {
                    ret.$set = {};
                }
            }
            ret.$set[op] = update[op];
            if (!~ops.indexOf('$set')) ops.push('$set');
        } else if ('$set' === op) {
            if (!ret.$set) {
                ret[op] = update[op];
            }
        } else {
            ret[op] = update[op];
        }
    }
    this._compiledUpdate = ret;
    return ret;
};
/**
 * Make sure _path is set.
 *
 * @parmam {String} method
 */ Query.prototype._ensurePath = function(method) {
    if (!this._path) {
        const msg = method + '() must be used after where() ' + 'when called with these arguments';
        throw new Error(msg);
    }
};
/*!
 * Permissions
 */ Query.permissions = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/permissions.js [app-ssr] (ecmascript)");
Query._isPermitted = function(a, b) {
    const denied = Query.permissions[b];
    if (!denied) return true;
    return true !== denied[a];
};
Query.prototype._validate = function(action) {
    let fail;
    let validator;
    if (undefined === action) {
        validator = Query.permissions[this.op];
        if ('function' != typeof validator) return true;
        fail = validator(this);
    } else if (!Query._isPermitted(action, this.op)) {
        fail = action;
    }
    if (fail) {
        throw new Error(fail + ' cannot be used with ' + this.op);
    }
};
/**
 * Determines if `conds` can be merged using `mquery().merge()`
 *
 * @param {Object} conds
 * @return {Boolean}
 */ Query.canMerge = function(conds) {
    return conds instanceof Query || utils.isObject(conds);
};
/**
 * Set a trace function that will get called whenever a
 * query is executed.
 *
 * See `setTraceFunction()` for details.
 *
 * @param {Object} conds
 * @return {Boolean}
 */ Query.setGlobalTraceFunction = function(traceFunction) {
    Query.traceFunction = traceFunction;
};
/*!
 * Exports.
 */ Query.utils = utils;
Query.env = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/env.js [app-ssr] (ecmascript)");
Query.Collection = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/index.js [app-ssr] (ecmascript)");
Query.BaseCollection = __turbopack_context__.r("[project]/Desktop/Smart-Engine/backend/node_modules/mquery/lib/collection/collection.js [app-ssr] (ecmascript)");
module.exports = exports = Query; // TODO
 // test utils
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/sift/es5m/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ __turbopack_context__.s([
    "$Size",
    ()=>$Size,
    "$all",
    ()=>$all,
    "$and",
    ()=>$and,
    "$elemMatch",
    ()=>$elemMatch,
    "$eq",
    ()=>$eq,
    "$exists",
    ()=>$exists,
    "$gt",
    ()=>$gt,
    "$gte",
    ()=>$gte,
    "$in",
    ()=>$in,
    "$lt",
    ()=>$lt,
    "$lte",
    ()=>$lte,
    "$mod",
    ()=>$mod,
    "$ne",
    ()=>$ne,
    "$nin",
    ()=>$nin,
    "$nor",
    ()=>$nor,
    "$not",
    ()=>$not,
    "$options",
    ()=>$options,
    "$or",
    ()=>$or,
    "$regex",
    ()=>$regex,
    "$size",
    ()=>$size,
    "$type",
    ()=>$type,
    "$where",
    ()=>$where,
    "EqualsOperation",
    ()=>EqualsOperation,
    "createDefaultQueryOperation",
    ()=>createDefaultQueryOperation,
    "createEqualsOperation",
    ()=>createEqualsOperation,
    "createOperationTester",
    ()=>createOperationTester,
    "createQueryOperation",
    ()=>createQueryOperation,
    "createQueryTester",
    ()=>createQueryTester,
    "default",
    ()=>createDefaultQueryTester
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var typeChecker = function(type) {
    var typeString = "[object " + type + "]";
    return function(value) {
        return getClassName(value) === typeString;
    };
};
var getClassName = function(value) {
    return Object.prototype.toString.call(value);
};
var comparable = function(value) {
    if (value instanceof Date) {
        return value.getTime();
    } else if (isArray(value)) {
        return value.map(comparable);
    } else if (value && typeof value.toJSON === "function") {
        return value.toJSON();
    }
    return value;
};
var coercePotentiallyNull = function(value) {
    return value == null ? null : value;
};
var isArray = typeChecker("Array");
var isObject = typeChecker("Object");
var isFunction = typeChecker("Function");
var isProperty = function(item, key) {
    return item.hasOwnProperty(key) && !isFunction(item[key]);
};
var isVanillaObject = function(value) {
    return value && (value.constructor === Object || value.constructor === Array || value.constructor.toString() === "function Object() { [native code] }" || value.constructor.toString() === "function Array() { [native code] }") && !value.toJSON;
};
var equals = function(a, b) {
    if (a == null && a == b) {
        return true;
    }
    if (a === b) {
        return true;
    }
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return false;
    }
    if (isArray(a)) {
        if (a.length !== b.length) {
            return false;
        }
        for(var i = 0, length_1 = a.length; i < length_1; i++){
            if (!equals(a[i], b[i])) return false;
        }
        return true;
    } else if (isObject(a)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for(var key in a){
            if (!equals(a[key], b[key])) return false;
        }
        return true;
    }
    return false;
};
/**
 * Walks through each value given the context - used for nested operations. E.g:
 * { "person.address": { $eq: "blarg" }}
 */ var walkKeyPathValues = function(item, keyPath, next, depth, key, owner) {
    var currentKey = keyPath[depth];
    // if array, then try matching. Might fall through for cases like:
    // { $eq: [1, 2, 3] }, [ 1, 2, 3 ].
    if (isArray(item) && isNaN(Number(currentKey)) && !isProperty(item, currentKey)) {
        for(var i = 0, length_1 = item.length; i < length_1; i++){
            // if FALSE is returned, then terminate walker. For operations, this simply
            // means that the search critera was met.
            if (!walkKeyPathValues(item[i], keyPath, next, depth, i, item)) {
                return false;
            }
        }
    }
    if (depth === keyPath.length || item == null) {
        return next(item, key, owner, depth === 0, depth === keyPath.length);
    }
    return walkKeyPathValues(item[currentKey], keyPath, next, depth + 1, currentKey, item);
};
var BaseOperation = function() {
    function BaseOperation(params, owneryQuery, options, name) {
        this.params = params;
        this.owneryQuery = owneryQuery;
        this.options = options;
        this.name = name;
        this.init();
    }
    BaseOperation.prototype.init = function() {};
    BaseOperation.prototype.reset = function() {
        this.done = false;
        this.keep = false;
    };
    return BaseOperation;
}();
var GroupOperation = function(_super) {
    __extends(GroupOperation, _super);
    function GroupOperation(params, owneryQuery, options, children) {
        var _this = _super.call(this, params, owneryQuery, options) || this;
        _this.children = children;
        return _this;
    }
    /**
     */ GroupOperation.prototype.reset = function() {
        this.keep = false;
        this.done = false;
        for(var i = 0, length_2 = this.children.length; i < length_2; i++){
            this.children[i].reset();
        }
    };
    /**
     */ GroupOperation.prototype.childrenNext = function(item, key, owner, root, leaf) {
        var done = true;
        var keep = true;
        for(var i = 0, length_3 = this.children.length; i < length_3; i++){
            var childOperation = this.children[i];
            if (!childOperation.done) {
                childOperation.next(item, key, owner, root, leaf);
            }
            if (!childOperation.keep) {
                keep = false;
            }
            if (childOperation.done) {
                if (!childOperation.keep) {
                    break;
                }
            } else {
                done = false;
            }
        }
        this.done = done;
        this.keep = keep;
    };
    return GroupOperation;
}(BaseOperation);
var NamedGroupOperation = function(_super) {
    __extends(NamedGroupOperation, _super);
    function NamedGroupOperation(params, owneryQuery, options, children, name) {
        var _this = _super.call(this, params, owneryQuery, options, children) || this;
        _this.name = name;
        return _this;
    }
    return NamedGroupOperation;
}(GroupOperation);
var QueryOperation = function(_super) {
    __extends(QueryOperation, _super);
    function QueryOperation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    /**
     */ QueryOperation.prototype.next = function(item, key, parent, root) {
        this.childrenNext(item, key, parent, root);
    };
    return QueryOperation;
}(GroupOperation);
var NestedOperation = function(_super) {
    __extends(NestedOperation, _super);
    function NestedOperation(keyPath, params, owneryQuery, options, children) {
        var _this = _super.call(this, params, owneryQuery, options, children) || this;
        _this.keyPath = keyPath;
        _this.propop = true;
        /**
         */ _this._nextNestedValue = function(value, key, owner, root, leaf) {
            _this.childrenNext(value, key, owner, root, leaf);
            return !_this.done;
        };
        return _this;
    }
    /**
     */ NestedOperation.prototype.next = function(item, key, parent) {
        walkKeyPathValues(item, this.keyPath, this._nextNestedValue, 0, key, parent);
    };
    return NestedOperation;
}(GroupOperation);
var createTester = function(a, compare) {
    if (a instanceof Function) {
        return a;
    }
    if (a instanceof RegExp) {
        return function(b) {
            var result = typeof b === "string" && a.test(b);
            a.lastIndex = 0;
            return result;
        };
    }
    var comparableA = comparable(a);
    return function(b) {
        return compare(comparableA, comparable(b));
    };
};
var EqualsOperation = function(_super) {
    __extends(EqualsOperation, _super);
    function EqualsOperation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    EqualsOperation.prototype.init = function() {
        this._test = createTester(this.params, this.options.compare);
    };
    EqualsOperation.prototype.next = function(item, key, parent) {
        if (!Array.isArray(parent) || parent.hasOwnProperty(key)) {
            if (this._test(item, key, parent)) {
                this.done = true;
                this.keep = true;
            }
        }
    };
    return EqualsOperation;
}(BaseOperation);
var createEqualsOperation = function(params, owneryQuery, options) {
    return new EqualsOperation(params, owneryQuery, options);
};
var numericalOperationCreator = function(createNumericalOperation) {
    return function(params, owneryQuery, options, name) {
        return createNumericalOperation(params, owneryQuery, options, name);
    };
};
var numericalOperation = function(createTester) {
    return numericalOperationCreator(function(params, owneryQuery, options, name) {
        var typeofParams = typeof comparable(params);
        var test = createTester(params);
        return new EqualsOperation(function(b) {
            var actualValue = coercePotentiallyNull(b);
            return typeof comparable(actualValue) === typeofParams && test(actualValue);
        }, owneryQuery, options, name);
    });
};
var createNamedOperation = function(name, params, parentQuery, options) {
    var operationCreator = options.operations[name];
    if (!operationCreator) {
        throwUnsupportedOperation(name);
    }
    return operationCreator(params, parentQuery, options, name);
};
var throwUnsupportedOperation = function(name) {
    throw new Error("Unsupported operation: ".concat(name));
};
var containsOperation = function(query, options) {
    for(var key in query){
        if (options.operations.hasOwnProperty(key) || key.charAt(0) === "$") return true;
    }
    return false;
};
var createNestedOperation = function(keyPath, nestedQuery, parentKey, owneryQuery, options) {
    if (containsOperation(nestedQuery, options)) {
        var _a = createQueryOperations(nestedQuery, parentKey, options), selfOperations = _a[0], nestedOperations = _a[1];
        if (nestedOperations.length) {
            throw new Error("Property queries must contain only operations, or exact objects.");
        }
        return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, selfOperations);
    }
    return new NestedOperation(keyPath, nestedQuery, owneryQuery, options, [
        new EqualsOperation(nestedQuery, owneryQuery, options)
    ]);
};
var createQueryOperation = function(query, owneryQuery, _a) {
    if (owneryQuery === void 0) {
        owneryQuery = null;
    }
    var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
    var options = {
        compare: compare || equals,
        operations: Object.assign({}, operations || {})
    };
    var _c = createQueryOperations(query, null, options), selfOperations = _c[0], nestedOperations = _c[1];
    var ops = [];
    if (selfOperations.length) {
        ops.push(new NestedOperation([], query, owneryQuery, options, selfOperations));
    }
    ops.push.apply(ops, nestedOperations);
    if (ops.length === 1) {
        return ops[0];
    }
    return new QueryOperation(query, owneryQuery, options, ops);
};
var createQueryOperations = function(query, parentKey, options) {
    var selfOperations = [];
    var nestedOperations = [];
    if (!isVanillaObject(query)) {
        selfOperations.push(new EqualsOperation(query, query, options));
        return [
            selfOperations,
            nestedOperations
        ];
    }
    for(var key in query){
        if (options.operations.hasOwnProperty(key)) {
            var op = createNamedOperation(key, query[key], query, options);
            if (op) {
                if (!op.propop && parentKey && !options.operations[parentKey]) {
                    throw new Error("Malformed query. ".concat(key, " cannot be matched against property."));
                }
            }
            // probably just a flag for another operation (like $options)
            if (op != null) {
                selfOperations.push(op);
            }
        } else if (key.charAt(0) === "$") {
            throwUnsupportedOperation(key);
        } else {
            nestedOperations.push(createNestedOperation(key.split("."), query[key], key, query, options));
        }
    }
    return [
        selfOperations,
        nestedOperations
    ];
};
var createOperationTester = function(operation) {
    return function(item, key, owner) {
        operation.reset();
        operation.next(item, key, owner);
        return operation.keep;
    };
};
var createQueryTester = function(query, options) {
    if (options === void 0) {
        options = {};
    }
    return createOperationTester(createQueryOperation(query, null, options));
};
var $Ne = function(_super) {
    __extends($Ne, _super);
    function $Ne() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $Ne.prototype.init = function() {
        this._test = createTester(this.params, this.options.compare);
    };
    $Ne.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this.keep = true;
    };
    $Ne.prototype.next = function(item) {
        if (this._test(item)) {
            this.done = true;
            this.keep = false;
        }
    };
    return $Ne;
}(BaseOperation);
// https://docs.mongodb.com/manual/reference/operator/query/elemMatch/
var $ElemMatch = function(_super) {
    __extends($ElemMatch, _super);
    function $ElemMatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $ElemMatch.prototype.init = function() {
        if (!this.params || typeof this.params !== "object") {
            throw new Error("Malformed query. $elemMatch must by an object.");
        }
        this._queryOperation = createQueryOperation(this.params, this.owneryQuery, this.options);
    };
    $ElemMatch.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this._queryOperation.reset();
    };
    $ElemMatch.prototype.next = function(item) {
        if (isArray(item)) {
            for(var i = 0, length_1 = item.length; i < length_1; i++){
                // reset query operation since item being tested needs to pass _all_ query
                // operations for it to be a success
                this._queryOperation.reset();
                var child = item[i];
                this._queryOperation.next(child, i, item, false);
                this.keep = this.keep || this._queryOperation.keep;
            }
            this.done = true;
        } else {
            this.done = false;
            this.keep = false;
        }
    };
    return $ElemMatch;
}(BaseOperation);
var $Not = function(_super) {
    __extends($Not, _super);
    function $Not() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $Not.prototype.init = function() {
        this._queryOperation = createQueryOperation(this.params, this.owneryQuery, this.options);
    };
    $Not.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this._queryOperation.reset();
    };
    $Not.prototype.next = function(item, key, owner, root) {
        this._queryOperation.next(item, key, owner, root);
        this.done = this._queryOperation.done;
        this.keep = !this._queryOperation.keep;
    };
    return $Not;
}(BaseOperation);
var $Size = function(_super) {
    __extends($Size, _super);
    function $Size() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $Size.prototype.init = function() {};
    $Size.prototype.next = function(item) {
        if (isArray(item) && item.length === this.params) {
            this.done = true;
            this.keep = true;
        }
    // if (parent && parent.length === this.params) {
    //   this.done = true;
    //   this.keep = true;
    // }
    };
    return $Size;
}(BaseOperation);
var assertGroupNotEmpty = function(values) {
    if (values.length === 0) {
        throw new Error("$and/$or/$nor must be a nonempty array");
    }
};
var $Or = function(_super) {
    __extends($Or, _super);
    function $Or() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = false;
        return _this;
    }
    $Or.prototype.init = function() {
        var _this = this;
        assertGroupNotEmpty(this.params);
        this._ops = this.params.map(function(op) {
            return createQueryOperation(op, null, _this.options);
        });
    };
    $Or.prototype.reset = function() {
        this.done = false;
        this.keep = false;
        for(var i = 0, length_2 = this._ops.length; i < length_2; i++){
            this._ops[i].reset();
        }
    };
    $Or.prototype.next = function(item, key, owner) {
        var done = false;
        var success = false;
        for(var i = 0, length_3 = this._ops.length; i < length_3; i++){
            var op = this._ops[i];
            op.next(item, key, owner);
            if (op.keep) {
                done = true;
                success = op.keep;
                break;
            }
        }
        this.keep = success;
        this.done = done;
    };
    return $Or;
}(BaseOperation);
var $Nor = function(_super) {
    __extends($Nor, _super);
    function $Nor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = false;
        return _this;
    }
    $Nor.prototype.next = function(item, key, owner) {
        _super.prototype.next.call(this, item, key, owner);
        this.keep = !this.keep;
    };
    return $Nor;
}($Or);
var $In = function(_super) {
    __extends($In, _super);
    function $In() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $In.prototype.init = function() {
        var _this = this;
        var params = Array.isArray(this.params) ? this.params : [
            this.params
        ];
        this._testers = params.map(function(value) {
            if (containsOperation(value, _this.options)) {
                throw new Error("cannot nest $ under ".concat(_this.name.toLowerCase()));
            }
            return createTester(value, _this.options.compare);
        });
    };
    $In.prototype.next = function(item, key, owner) {
        var done = false;
        var success = false;
        for(var i = 0, length_4 = this._testers.length; i < length_4; i++){
            var test = this._testers[i];
            if (test(item)) {
                done = true;
                success = true;
                break;
            }
        }
        this.keep = success;
        this.done = done;
    };
    return $In;
}(BaseOperation);
var $Nin = function(_super) {
    __extends($Nin, _super);
    function $Nin(params, ownerQuery, options, name) {
        var _this = _super.call(this, params, ownerQuery, options, name) || this;
        _this.propop = true;
        _this._in = new $In(params, ownerQuery, options, name);
        return _this;
    }
    $Nin.prototype.next = function(item, key, owner, root) {
        this._in.next(item, key, owner);
        if (isArray(owner) && !root) {
            if (this._in.keep) {
                this.keep = false;
                this.done = true;
            } else if (key == owner.length - 1) {
                this.keep = true;
                this.done = true;
            }
        } else {
            this.keep = !this._in.keep;
            this.done = true;
        }
    };
    $Nin.prototype.reset = function() {
        _super.prototype.reset.call(this);
        this._in.reset();
    };
    return $Nin;
}(BaseOperation);
var $Exists = function(_super) {
    __extends($Exists, _super);
    function $Exists() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.propop = true;
        return _this;
    }
    $Exists.prototype.next = function(item, key, owner, root, leaf) {
        if (!leaf) {
            this.done = true;
            this.keep = !this.params;
        } else if (owner.hasOwnProperty(key) === this.params) {
            this.done = true;
            this.keep = true;
        }
    };
    return $Exists;
}(BaseOperation);
var $And = function(_super) {
    __extends($And, _super);
    function $And(params, owneryQuery, options, name) {
        var _this = _super.call(this, params, owneryQuery, options, params.map(function(query) {
            return createQueryOperation(query, owneryQuery, options);
        }), name) || this;
        _this.propop = false;
        assertGroupNotEmpty(params);
        return _this;
    }
    $And.prototype.next = function(item, key, owner, root) {
        this.childrenNext(item, key, owner, root);
    };
    return $And;
}(NamedGroupOperation);
var $All = function(_super) {
    __extends($All, _super);
    function $All(params, owneryQuery, options, name) {
        var _this = _super.call(this, params, owneryQuery, options, params.map(function(query) {
            return createQueryOperation(query, owneryQuery, options);
        }), name) || this;
        _this.propop = true;
        return _this;
    }
    $All.prototype.next = function(item, key, owner, root) {
        this.childrenNext(item, key, owner, root);
    };
    return $All;
}(NamedGroupOperation);
var $eq = function(params, owneryQuery, options) {
    return new EqualsOperation(params, owneryQuery, options);
};
var $ne = function(params, owneryQuery, options, name) {
    return new $Ne(params, owneryQuery, options, name);
};
var $or = function(params, owneryQuery, options, name) {
    return new $Or(params, owneryQuery, options, name);
};
var $nor = function(params, owneryQuery, options, name) {
    return new $Nor(params, owneryQuery, options, name);
};
var $elemMatch = function(params, owneryQuery, options, name) {
    return new $ElemMatch(params, owneryQuery, options, name);
};
var $nin = function(params, owneryQuery, options, name) {
    return new $Nin(params, owneryQuery, options, name);
};
var $in = function(params, owneryQuery, options, name) {
    return new $In(params, owneryQuery, options, name);
};
var $lt = numericalOperation(function(params) {
    return function(b) {
        return b != null && b < params;
    };
});
var $lte = numericalOperation(function(params) {
    return function(b) {
        return b === params || b <= params;
    };
});
var $gt = numericalOperation(function(params) {
    return function(b) {
        return b != null && b > params;
    };
});
var $gte = numericalOperation(function(params) {
    return function(b) {
        return b === params || b >= params;
    };
});
var $mod = function(_a, owneryQuery, options) {
    var mod = _a[0], equalsValue = _a[1];
    return new EqualsOperation(function(b) {
        return comparable(b) % mod === equalsValue;
    }, owneryQuery, options);
};
var $exists = function(params, owneryQuery, options, name) {
    return new $Exists(params, owneryQuery, options, name);
};
var $regex = function(pattern, owneryQuery, options) {
    return new EqualsOperation(new RegExp(pattern, owneryQuery.$options), owneryQuery, options);
};
var $not = function(params, owneryQuery, options, name) {
    return new $Not(params, owneryQuery, options, name);
};
var typeAliases = {
    number: function(v) {
        return typeof v === "number";
    },
    string: function(v) {
        return typeof v === "string";
    },
    bool: function(v) {
        return typeof v === "boolean";
    },
    array: function(v) {
        return Array.isArray(v);
    },
    null: function(v) {
        return v === null;
    },
    timestamp: function(v) {
        return v instanceof Date;
    }
};
var $type = function(clazz, owneryQuery, options) {
    return new EqualsOperation(function(b) {
        if (typeof clazz === "string") {
            if (!typeAliases[clazz]) {
                throw new Error("Type alias does not exist");
            }
            return typeAliases[clazz](b);
        }
        return b != null ? b instanceof clazz || b.constructor === clazz : false;
    }, owneryQuery, options);
};
var $and = function(params, ownerQuery, options, name) {
    return new $And(params, ownerQuery, options, name);
};
var $all = function(params, ownerQuery, options, name) {
    return new $All(params, ownerQuery, options, name);
};
var $size = function(params, ownerQuery, options) {
    return new $Size(params, ownerQuery, options, "$size");
};
var $options = function() {
    return null;
};
var $where = function(params, ownerQuery, options) {
    var test;
    if (isFunction(params)) {
        test = params;
    } else if (!process.env.CSP_ENABLED) {
        test = new Function("obj", "return " + params);
    } else {
        throw new Error("In CSP mode, sift does not support strings in \"$where\" condition");
    }
    return new EqualsOperation(function(b) {
        return test.bind(b)(b);
    }, ownerQuery, options);
};
var defaultOperations = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    $Size: $Size,
    $all: $all,
    $and: $and,
    $elemMatch: $elemMatch,
    $eq: $eq,
    $exists: $exists,
    $gt: $gt,
    $gte: $gte,
    $in: $in,
    $lt: $lt,
    $lte: $lte,
    $mod: $mod,
    $ne: $ne,
    $nin: $nin,
    $nor: $nor,
    $not: $not,
    $options: $options,
    $or: $or,
    $regex: $regex,
    $size: $size,
    $type: $type,
    $where: $where
});
var createDefaultQueryOperation = function(query, ownerQuery, _a) {
    var _b = _a === void 0 ? {} : _a, compare = _b.compare, operations = _b.operations;
    return createQueryOperation(query, ownerQuery, {
        compare: compare,
        operations: Object.assign({}, defaultOperations, operations || {})
    });
};
var createDefaultQueryTester = function(query, options) {
    if (options === void 0) {
        options = {};
    }
    var op = createDefaultQueryOperation(query, null, options);
    return createOperationTester(op);
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Smart-Engine/backend/node_modules/bcryptjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 Copyright (c) 2012 Nevins Bartolomeo <nevins.bartolomeo@gmail.com>
 Copyright (c) 2012 Shane Girish <shaneGirish@gmail.com>
 Copyright (c) 2025 Daniel Wirtz <dcode@dcode.io>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ // The Node.js crypto module is used as a fallback for the Web Crypto API. When
// building for the browser, inclusion of the crypto module should be disabled,
// which the package hints at in its package.json for bundlers that support it.
__turbopack_context__.s([
    "compare",
    ()=>compare,
    "compareSync",
    ()=>compareSync,
    "decodeBase64",
    ()=>decodeBase64,
    "default",
    ()=>__TURBOPACK__default__export__,
    "encodeBase64",
    ()=>encodeBase64,
    "genSalt",
    ()=>genSalt,
    "genSaltSync",
    ()=>genSaltSync,
    "getRounds",
    ()=>getRounds,
    "getSalt",
    ()=>getSalt,
    "hash",
    ()=>hash,
    "hashSync",
    ()=>hashSync,
    "setRandomFallback",
    ()=>setRandomFallback,
    "truncates",
    ()=>truncates
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
/**
 * The random implementation to use as a fallback.
 * @type {?function(number):!Array.<number>}
 * @inner
 */ var randomFallback = null;
/**
 * Generates cryptographically secure random bytes.
 * @function
 * @param {number} len Bytes length
 * @returns {!Array.<number>} Random bytes
 * @throws {Error} If no random implementation is available
 * @inner
 */ function randomBytes(len) {
    // Web Crypto API. Globally available in the browser and in Node.js >=23.
    try {
        return crypto.getRandomValues(new Uint8Array(len));
    } catch  {}
    // Node.js crypto module for non-browser environments.
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(len);
    } catch  {}
    // Custom fallback specified with `setRandomFallback`.
    if (!randomFallback) {
        throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
    }
    return randomFallback(len);
}
function setRandomFallback(random) {
    randomFallback = random;
}
function genSaltSync(rounds, seed_length) {
    rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof rounds !== "number") throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
    if (rounds < 4) rounds = 4;
    else if (rounds > 31) rounds = 31;
    var salt = [];
    salt.push("$2b$");
    if (rounds < 10) salt.push("0");
    salt.push(rounds.toString());
    salt.push("$");
    salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN)); // May throw
    return salt.join("");
}
function genSalt(rounds, seed_length, callback) {
    if (typeof seed_length === "function") callback = seed_length, seed_length = undefined; // Not supported.
    if (typeof rounds === "function") callback = rounds, rounds = undefined;
    if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
    else if (typeof rounds !== "number") throw Error("illegal arguments: " + typeof rounds);
    function _async(callback) {
        nextTick(function() {
            // Pretty thin, but salting is fast enough
            try {
                callback(null, genSaltSync(rounds));
            } catch (err) {
                callback(err);
            }
        });
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function hashSync(password, salt) {
    if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
    if (typeof salt === "number") salt = genSaltSync(salt);
    if (typeof password !== "string" || typeof salt !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
    return _hash(password, salt);
}
function hash(password, salt, callback, progressCallback) {
    function _async(callback) {
        if (typeof password === "string" && typeof salt === "number") genSalt(salt, function(err, salt) {
            _hash(password, salt, callback, progressCallback);
        });
        else if (typeof password === "string" && typeof salt === "string") _hash(password, salt, callback, progressCallback);
        else nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof salt)));
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
/**
 * Compares two strings of the same length in constant time.
 * @param {string} known Must be of the correct length
 * @param {string} unknown Must be the same length as `known`
 * @returns {boolean}
 * @inner
 */ function safeStringCompare(known, unknown) {
    var diff = known.length ^ unknown.length;
    for(var i = 0; i < known.length; ++i){
        diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
    }
    return diff === 0;
}
function compareSync(password, hash) {
    if (typeof password !== "string" || typeof hash !== "string") throw Error("Illegal arguments: " + typeof password + ", " + typeof hash);
    if (hash.length !== 60) return false;
    return safeStringCompare(hashSync(password, hash.substring(0, hash.length - 31)), hash);
}
function compare(password, hashValue, callback, progressCallback) {
    function _async(callback) {
        if (typeof password !== "string" || typeof hashValue !== "string") {
            nextTick(callback.bind(this, Error("Illegal arguments: " + typeof password + ", " + typeof hashValue)));
            return;
        }
        if (hashValue.length !== 60) {
            nextTick(callback.bind(this, null, false));
            return;
        }
        hash(password, hashValue.substring(0, 29), function(err, comp) {
            if (err) callback(err);
            else callback(null, safeStringCompare(comp, hashValue));
        }, progressCallback);
    }
    if (callback) {
        if (typeof callback !== "function") throw Error("Illegal callback: " + typeof callback);
        _async(callback);
    } else return new Promise(function(resolve, reject) {
        _async(function(err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
}
function getRounds(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    return parseInt(hash.split("$")[2], 10);
}
function getSalt(hash) {
    if (typeof hash !== "string") throw Error("Illegal arguments: " + typeof hash);
    if (hash.length !== 60) throw Error("Illegal hash length: " + hash.length + " != 60");
    return hash.substring(0, 29);
}
function truncates(password) {
    if (typeof password !== "string") throw Error("Illegal arguments: " + typeof password);
    return utf8Length(password) > 72;
}
/**
 * Continues with the callback on the next tick.
 * @function
 * @param {function(...[*])} callback Callback to execute
 * @inner
 */ var nextTick = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
/** Calculates the byte length of a string encoded as UTF8. */ function utf8Length(string) {
    var len = 0, c = 0;
    for(var i = 0; i < string.length; ++i){
        c = string.charCodeAt(i);
        if (c < 128) len += 1;
        else if (c < 2048) len += 2;
        else if ((c & 0xfc00) === 0xd800 && (string.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            ++i;
            len += 4;
        } else len += 3;
    }
    return len;
}
/** Converts a string to an array of UTF8 bytes. */ function utf8Array(string) {
    var offset = 0, c1, c2;
    var buffer = new Array(utf8Length(string));
    for(var i = 0, k = string.length; i < k; ++i){
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 0xfc00) === 0xd800 && ((c2 = string.charCodeAt(i + 1)) & 0xfc00) === 0xdc00) {
            c1 = 0x10000 + ((c1 & 0x03ff) << 10) + (c2 & 0x03ff);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
        }
    }
    return buffer;
}
// A base64 implementation for the bcrypt algorithm. This is partly non-standard.
/**
 * bcrypt's own non-standard base64 dictionary.
 * @type {!Array.<string>}
 * @const
 * @inner
 **/ var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
/**
 * @type {!Array.<number>}
 * @const
 * @inner
 **/ var BASE64_INDEX = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    -1,
    -1,
    -1,
    -1,
    -1
];
/**
 * Encodes a byte array to base64 with up to len bytes of input.
 * @param {!Array.<number>} b Byte array
 * @param {number} len Maximum input length
 * @returns {string}
 * @inner
 */ function base64_encode(b, len) {
    var off = 0, rs = [], c1, c2;
    if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
    while(off < len){
        c1 = b[off++] & 0xff;
        rs.push(BASE64_CODE[c1 >> 2 & 0x3f]);
        c1 = (c1 & 0x03) << 4;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 4 & 0x0f;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        c1 = (c2 & 0x0f) << 2;
        if (off >= len) {
            rs.push(BASE64_CODE[c1 & 0x3f]);
            break;
        }
        c2 = b[off++] & 0xff;
        c1 |= c2 >> 6 & 0x03;
        rs.push(BASE64_CODE[c1 & 0x3f]);
        rs.push(BASE64_CODE[c2 & 0x3f]);
    }
    return rs.join("");
}
/**
 * Decodes a base64 encoded string to up to len bytes of output.
 * @param {string} s String to decode
 * @param {number} len Maximum output length
 * @returns {!Array.<number>}
 * @inner
 */ function base64_decode(s, len) {
    var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
    if (len <= 0) throw Error("Illegal len: " + len);
    while(off < slen - 1 && olen < len){
        code = s.charCodeAt(off++);
        c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        code = s.charCodeAt(off++);
        c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c1 == -1 || c2 == -1) break;
        o = c1 << 2 >>> 0;
        o |= (c2 & 0x30) >> 4;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        if (c3 == -1) break;
        o = (c2 & 0x0f) << 4 >>> 0;
        o |= (c3 & 0x3c) >> 2;
        rs.push(String.fromCharCode(o));
        if (++olen >= len || off >= slen) break;
        code = s.charCodeAt(off++);
        c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
        o = (c3 & 0x03) << 6 >>> 0;
        o |= c4;
        rs.push(String.fromCharCode(o));
        ++olen;
    }
    var res = [];
    for(off = 0; off < olen; off++)res.push(rs[off].charCodeAt(0));
    return res;
}
/**
 * @type {number}
 * @const
 * @inner
 */ var BCRYPT_SALT_LEN = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
/**
 * @type {number}
 * @const
 * @inner
 */ var BLOWFISH_NUM_ROUNDS = 16;
/**
 * @type {number}
 * @const
 * @inner
 */ var MAX_EXECUTION_TIME = 100;
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var P_ORIG = [
    0x243f6a88,
    0x85a308d3,
    0x13198a2e,
    0x03707344,
    0xa4093822,
    0x299f31d0,
    0x082efa98,
    0xec4e6c89,
    0x452821e6,
    0x38d01377,
    0xbe5466cf,
    0x34e90c6c,
    0xc0ac29b7,
    0xc97c50dd,
    0x3f84d5b5,
    0xb5470917,
    0x9216d5d9,
    0x8979fb1b
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var S_ORIG = [
    0xd1310ba6,
    0x98dfb5ac,
    0x2ffd72db,
    0xd01adfb7,
    0xb8e1afed,
    0x6a267e96,
    0xba7c9045,
    0xf12c7f99,
    0x24a19947,
    0xb3916cf7,
    0x0801f2e2,
    0x858efc16,
    0x636920d8,
    0x71574e69,
    0xa458fea3,
    0xf4933d7e,
    0x0d95748f,
    0x728eb658,
    0x718bcd58,
    0x82154aee,
    0x7b54a41d,
    0xc25a59b5,
    0x9c30d539,
    0x2af26013,
    0xc5d1b023,
    0x286085f0,
    0xca417918,
    0xb8db38ef,
    0x8e79dcb0,
    0x603a180e,
    0x6c9e0e8b,
    0xb01e8a3e,
    0xd71577c1,
    0xbd314b27,
    0x78af2fda,
    0x55605c60,
    0xe65525f3,
    0xaa55ab94,
    0x57489862,
    0x63e81440,
    0x55ca396a,
    0x2aab10b6,
    0xb4cc5c34,
    0x1141e8ce,
    0xa15486af,
    0x7c72e993,
    0xb3ee1411,
    0x636fbc2a,
    0x2ba9c55d,
    0x741831f6,
    0xce5c3e16,
    0x9b87931e,
    0xafd6ba33,
    0x6c24cf5c,
    0x7a325381,
    0x28958677,
    0x3b8f4898,
    0x6b4bb9af,
    0xc4bfe81b,
    0x66282193,
    0x61d809cc,
    0xfb21a991,
    0x487cac60,
    0x5dec8032,
    0xef845d5d,
    0xe98575b1,
    0xdc262302,
    0xeb651b88,
    0x23893e81,
    0xd396acc5,
    0x0f6d6ff3,
    0x83f44239,
    0x2e0b4482,
    0xa4842004,
    0x69c8f04a,
    0x9e1f9b5e,
    0x21c66842,
    0xf6e96c9a,
    0x670c9c61,
    0xabd388f0,
    0x6a51a0d2,
    0xd8542f68,
    0x960fa728,
    0xab5133a3,
    0x6eef0b6c,
    0x137a3be4,
    0xba3bf050,
    0x7efb2a98,
    0xa1f1651d,
    0x39af0176,
    0x66ca593e,
    0x82430e88,
    0x8cee8619,
    0x456f9fb4,
    0x7d84a5c3,
    0x3b8b5ebe,
    0xe06f75d8,
    0x85c12073,
    0x401a449f,
    0x56c16aa6,
    0x4ed3aa62,
    0x363f7706,
    0x1bfedf72,
    0x429b023d,
    0x37d0d724,
    0xd00a1248,
    0xdb0fead3,
    0x49f1c09b,
    0x075372c9,
    0x80991b7b,
    0x25d479d8,
    0xf6e8def7,
    0xe3fe501a,
    0xb6794c3b,
    0x976ce0bd,
    0x04c006ba,
    0xc1a94fb6,
    0x409f60c4,
    0x5e5c9ec2,
    0x196a2463,
    0x68fb6faf,
    0x3e6c53b5,
    0x1339b2eb,
    0x3b52ec6f,
    0x6dfc511f,
    0x9b30952c,
    0xcc814544,
    0xaf5ebd09,
    0xbee3d004,
    0xde334afd,
    0x660f2807,
    0x192e4bb3,
    0xc0cba857,
    0x45c8740f,
    0xd20b5f39,
    0xb9d3fbdb,
    0x5579c0bd,
    0x1a60320a,
    0xd6a100c6,
    0x402c7279,
    0x679f25fe,
    0xfb1fa3cc,
    0x8ea5e9f8,
    0xdb3222f8,
    0x3c7516df,
    0xfd616b15,
    0x2f501ec8,
    0xad0552ab,
    0x323db5fa,
    0xfd238760,
    0x53317b48,
    0x3e00df82,
    0x9e5c57bb,
    0xca6f8ca0,
    0x1a87562e,
    0xdf1769db,
    0xd542a8f6,
    0x287effc3,
    0xac6732c6,
    0x8c4f5573,
    0x695b27b0,
    0xbbca58c8,
    0xe1ffa35d,
    0xb8f011a0,
    0x10fa3d98,
    0xfd2183b8,
    0x4afcb56c,
    0x2dd1d35b,
    0x9a53e479,
    0xb6f84565,
    0xd28e49bc,
    0x4bfb9790,
    0xe1ddf2da,
    0xa4cb7e33,
    0x62fb1341,
    0xcee4c6e8,
    0xef20cada,
    0x36774c01,
    0xd07e9efe,
    0x2bf11fb4,
    0x95dbda4d,
    0xae909198,
    0xeaad8e71,
    0x6b93d5a0,
    0xd08ed1d0,
    0xafc725e0,
    0x8e3c5b2f,
    0x8e7594b7,
    0x8ff6e2fb,
    0xf2122b64,
    0x8888b812,
    0x900df01c,
    0x4fad5ea0,
    0x688fc31c,
    0xd1cff191,
    0xb3a8c1ad,
    0x2f2f2218,
    0xbe0e1777,
    0xea752dfe,
    0x8b021fa1,
    0xe5a0cc0f,
    0xb56f74e8,
    0x18acf3d6,
    0xce89e299,
    0xb4a84fe0,
    0xfd13e0b7,
    0x7cc43b81,
    0xd2ada8d9,
    0x165fa266,
    0x80957705,
    0x93cc7314,
    0x211a1477,
    0xe6ad2065,
    0x77b5fa86,
    0xc75442f5,
    0xfb9d35cf,
    0xebcdaf0c,
    0x7b3e89a0,
    0xd6411bd3,
    0xae1e7e49,
    0x00250e2d,
    0x2071b35e,
    0x226800bb,
    0x57b8e0af,
    0x2464369b,
    0xf009b91e,
    0x5563911d,
    0x59dfa6aa,
    0x78c14389,
    0xd95a537f,
    0x207d5ba2,
    0x02e5b9c5,
    0x83260376,
    0x6295cfa9,
    0x11c81968,
    0x4e734a41,
    0xb3472dca,
    0x7b14a94a,
    0x1b510052,
    0x9a532915,
    0xd60f573f,
    0xbc9bc6e4,
    0x2b60a476,
    0x81e67400,
    0x08ba6fb5,
    0x571be91f,
    0xf296ec6b,
    0x2a0dd915,
    0xb6636521,
    0xe7b9f9b6,
    0xff34052e,
    0xc5855664,
    0x53b02d5d,
    0xa99f8fa1,
    0x08ba4799,
    0x6e85076a,
    0x4b7a70e9,
    0xb5b32944,
    0xdb75092e,
    0xc4192623,
    0xad6ea6b0,
    0x49a7df7d,
    0x9cee60b8,
    0x8fedb266,
    0xecaa8c71,
    0x699a17ff,
    0x5664526c,
    0xc2b19ee1,
    0x193602a5,
    0x75094c29,
    0xa0591340,
    0xe4183a3e,
    0x3f54989a,
    0x5b429d65,
    0x6b8fe4d6,
    0x99f73fd6,
    0xa1d29c07,
    0xefe830f5,
    0x4d2d38e6,
    0xf0255dc1,
    0x4cdd2086,
    0x8470eb26,
    0x6382e9c6,
    0x021ecc5e,
    0x09686b3f,
    0x3ebaefc9,
    0x3c971814,
    0x6b6a70a1,
    0x687f3584,
    0x52a0e286,
    0xb79c5305,
    0xaa500737,
    0x3e07841c,
    0x7fdeae5c,
    0x8e7d44ec,
    0x5716f2b8,
    0xb03ada37,
    0xf0500c0d,
    0xf01c1f04,
    0x0200b3ff,
    0xae0cf51a,
    0x3cb574b2,
    0x25837a58,
    0xdc0921bd,
    0xd19113f9,
    0x7ca92ff6,
    0x94324773,
    0x22f54701,
    0x3ae5e581,
    0x37c2dadc,
    0xc8b57634,
    0x9af3dda7,
    0xa9446146,
    0x0fd0030e,
    0xecc8c73e,
    0xa4751e41,
    0xe238cd99,
    0x3bea0e2f,
    0x3280bba1,
    0x183eb331,
    0x4e548b38,
    0x4f6db908,
    0x6f420d03,
    0xf60a04bf,
    0x2cb81290,
    0x24977c79,
    0x5679b072,
    0xbcaf89af,
    0xde9a771f,
    0xd9930810,
    0xb38bae12,
    0xdccf3f2e,
    0x5512721f,
    0x2e6b7124,
    0x501adde6,
    0x9f84cd87,
    0x7a584718,
    0x7408da17,
    0xbc9f9abc,
    0xe94b7d8c,
    0xec7aec3a,
    0xdb851dfa,
    0x63094366,
    0xc464c3d2,
    0xef1c1847,
    0x3215d908,
    0xdd433b37,
    0x24c2ba16,
    0x12a14d43,
    0x2a65c451,
    0x50940002,
    0x133ae4dd,
    0x71dff89e,
    0x10314e55,
    0x81ac77d6,
    0x5f11199b,
    0x043556f1,
    0xd7a3c76b,
    0x3c11183b,
    0x5924a509,
    0xf28fe6ed,
    0x97f1fbfa,
    0x9ebabf2c,
    0x1e153c6e,
    0x86e34570,
    0xeae96fb1,
    0x860e5e0a,
    0x5a3e2ab3,
    0x771fe71c,
    0x4e3d06fa,
    0x2965dcb9,
    0x99e71d0f,
    0x803e89d6,
    0x5266c825,
    0x2e4cc978,
    0x9c10b36a,
    0xc6150eba,
    0x94e2ea78,
    0xa5fc3c53,
    0x1e0a2df4,
    0xf2f74ea7,
    0x361d2b3d,
    0x1939260f,
    0x19c27960,
    0x5223a708,
    0xf71312b6,
    0xebadfe6e,
    0xeac31f66,
    0xe3bc4595,
    0xa67bc883,
    0xb17f37d1,
    0x018cff28,
    0xc332ddef,
    0xbe6c5aa5,
    0x65582185,
    0x68ab9802,
    0xeecea50f,
    0xdb2f953b,
    0x2aef7dad,
    0x5b6e2f84,
    0x1521b628,
    0x29076170,
    0xecdd4775,
    0x619f1510,
    0x13cca830,
    0xeb61bd96,
    0x0334fe1e,
    0xaa0363cf,
    0xb5735c90,
    0x4c70a239,
    0xd59e9e0b,
    0xcbaade14,
    0xeecc86bc,
    0x60622ca7,
    0x9cab5cab,
    0xb2f3846e,
    0x648b1eaf,
    0x19bdf0ca,
    0xa02369b9,
    0x655abb50,
    0x40685a32,
    0x3c2ab4b3,
    0x319ee9d5,
    0xc021b8f7,
    0x9b540b19,
    0x875fa099,
    0x95f7997e,
    0x623d7da8,
    0xf837889a,
    0x97e32d77,
    0x11ed935f,
    0x16681281,
    0x0e358829,
    0xc7e61fd6,
    0x96dedfa1,
    0x7858ba99,
    0x57f584a5,
    0x1b227263,
    0x9b83c3ff,
    0x1ac24696,
    0xcdb30aeb,
    0x532e3054,
    0x8fd948e4,
    0x6dbc3128,
    0x58ebf2ef,
    0x34c6ffea,
    0xfe28ed61,
    0xee7c3c73,
    0x5d4a14d9,
    0xe864b7e3,
    0x42105d14,
    0x203e13e0,
    0x45eee2b6,
    0xa3aaabea,
    0xdb6c4f15,
    0xfacb4fd0,
    0xc742f442,
    0xef6abbb5,
    0x654f3b1d,
    0x41cd2105,
    0xd81e799e,
    0x86854dc7,
    0xe44b476a,
    0x3d816250,
    0xcf62a1f2,
    0x5b8d2646,
    0xfc8883a0,
    0xc1c7b6a3,
    0x7f1524c3,
    0x69cb7492,
    0x47848a0b,
    0x5692b285,
    0x095bbf00,
    0xad19489d,
    0x1462b174,
    0x23820e00,
    0x58428d2a,
    0x0c55f5ea,
    0x1dadf43e,
    0x233f7061,
    0x3372f092,
    0x8d937e41,
    0xd65fecf1,
    0x6c223bdb,
    0x7cde3759,
    0xcbee7460,
    0x4085f2a7,
    0xce77326e,
    0xa6078084,
    0x19f8509e,
    0xe8efd855,
    0x61d99735,
    0xa969a7aa,
    0xc50c06c2,
    0x5a04abfc,
    0x800bcadc,
    0x9e447a2e,
    0xc3453484,
    0xfdd56705,
    0x0e1e9ec9,
    0xdb73dbd3,
    0x105588cd,
    0x675fda79,
    0xe3674340,
    0xc5c43465,
    0x713e38d8,
    0x3d28f89e,
    0xf16dff20,
    0x153e21e7,
    0x8fb03d4a,
    0xe6e39f2b,
    0xdb83adf7,
    0xe93d5a68,
    0x948140f7,
    0xf64c261c,
    0x94692934,
    0x411520f7,
    0x7602d4f7,
    0xbcf46b2e,
    0xd4a20068,
    0xd4082471,
    0x3320f46a,
    0x43b7d4b7,
    0x500061af,
    0x1e39f62e,
    0x97244546,
    0x14214f74,
    0xbf8b8840,
    0x4d95fc1d,
    0x96b591af,
    0x70f4ddd3,
    0x66a02f45,
    0xbfbc09ec,
    0x03bd9785,
    0x7fac6dd0,
    0x31cb8504,
    0x96eb27b3,
    0x55fd3941,
    0xda2547e6,
    0xabca0a9a,
    0x28507825,
    0x530429f4,
    0x0a2c86da,
    0xe9b66dfb,
    0x68dc1462,
    0xd7486900,
    0x680ec0a4,
    0x27a18dee,
    0x4f3ffea2,
    0xe887ad8c,
    0xb58ce006,
    0x7af4d6b6,
    0xaace1e7c,
    0xd3375fec,
    0xce78a399,
    0x406b2a42,
    0x20fe9e35,
    0xd9f385b9,
    0xee39d7ab,
    0x3b124e8b,
    0x1dc9faf7,
    0x4b6d1856,
    0x26a36631,
    0xeae397b2,
    0x3a6efa74,
    0xdd5b4332,
    0x6841e7f7,
    0xca7820fb,
    0xfb0af54e,
    0xd8feb397,
    0x454056ac,
    0xba489527,
    0x55533a3a,
    0x20838d87,
    0xfe6ba9b7,
    0xd096954b,
    0x55a867bc,
    0xa1159a58,
    0xcca92963,
    0x99e1db33,
    0xa62a4a56,
    0x3f3125f9,
    0x5ef47e1c,
    0x9029317c,
    0xfdf8e802,
    0x04272f70,
    0x80bb155c,
    0x05282ce3,
    0x95c11548,
    0xe4c66d22,
    0x48c1133f,
    0xc70f86dc,
    0x07f9c9ee,
    0x41041f0f,
    0x404779a4,
    0x5d886e17,
    0x325f51eb,
    0xd59bc0d1,
    0xf2bcc18f,
    0x41113564,
    0x257b7834,
    0x602a9c60,
    0xdff8e8a3,
    0x1f636c1b,
    0x0e12b4c2,
    0x02e1329e,
    0xaf664fd1,
    0xcad18115,
    0x6b2395e0,
    0x333e92e1,
    0x3b240b62,
    0xeebeb922,
    0x85b2a20e,
    0xe6ba0d99,
    0xde720c8c,
    0x2da2f728,
    0xd0127845,
    0x95b794fd,
    0x647d0862,
    0xe7ccf5f0,
    0x5449a36f,
    0x877d48fa,
    0xc39dfd27,
    0xf33e8d1e,
    0x0a476341,
    0x992eff74,
    0x3a6f6eab,
    0xf4f8fd37,
    0xa812dc60,
    0xa1ebddf8,
    0x991be14c,
    0xdb6e6b0d,
    0xc67b5510,
    0x6d672c37,
    0x2765d43b,
    0xdcd0e804,
    0xf1290dc7,
    0xcc00ffa3,
    0xb5390f92,
    0x690fed0b,
    0x667b9ffb,
    0xcedb7d9c,
    0xa091cf0b,
    0xd9155ea3,
    0xbb132f88,
    0x515bad24,
    0x7b9479bf,
    0x763bd6eb,
    0x37392eb3,
    0xcc115979,
    0x8026e297,
    0xf42e312d,
    0x6842ada7,
    0xc66a2b3b,
    0x12754ccc,
    0x782ef11c,
    0x6a124237,
    0xb79251e7,
    0x06a1bbe6,
    0x4bfb6350,
    0x1a6b1018,
    0x11caedfa,
    0x3d25bdd8,
    0xe2e1c3c9,
    0x44421659,
    0x0a121386,
    0xd90cec6e,
    0xd5abea2a,
    0x64af674e,
    0xda86a85f,
    0xbebfe988,
    0x64e4c3fe,
    0x9dbc8057,
    0xf0f7c086,
    0x60787bf8,
    0x6003604d,
    0xd1fd8346,
    0xf6381fb0,
    0x7745ae04,
    0xd736fccc,
    0x83426b33,
    0xf01eab71,
    0xb0804187,
    0x3c005e5f,
    0x77a057be,
    0xbde8ae24,
    0x55464299,
    0xbf582e61,
    0x4e58f48f,
    0xf2ddfda2,
    0xf474ef38,
    0x8789bdc2,
    0x5366f9c3,
    0xc8b38e74,
    0xb475f255,
    0x46fcd9b9,
    0x7aeb2661,
    0x8b1ddf84,
    0x846a0e79,
    0x915f95e2,
    0x466e598e,
    0x20b45770,
    0x8cd55591,
    0xc902de4c,
    0xb90bace1,
    0xbb8205d0,
    0x11a86248,
    0x7574a99e,
    0xb77f19b6,
    0xe0a9dc09,
    0x662d09a1,
    0xc4324633,
    0xe85a1f02,
    0x09f0be8c,
    0x4a99a025,
    0x1d6efe10,
    0x1ab93d1d,
    0x0ba5a4df,
    0xa186f20f,
    0x2868f169,
    0xdcb7da83,
    0x573906fe,
    0xa1e2ce9b,
    0x4fcd7f52,
    0x50115e01,
    0xa70683fa,
    0xa002b5c4,
    0x0de6d027,
    0x9af88c27,
    0x773f8641,
    0xc3604c06,
    0x61a806b5,
    0xf0177a28,
    0xc0f586e0,
    0x006058aa,
    0x30dc7d62,
    0x11e69ed7,
    0x2338ea63,
    0x53c2dd94,
    0xc2c21634,
    0xbbcbee56,
    0x90bcb6de,
    0xebfc7da1,
    0xce591d76,
    0x6f05e409,
    0x4b7c0188,
    0x39720a3d,
    0x7c927c24,
    0x86e3725f,
    0x724d9db9,
    0x1ac15bb4,
    0xd39eb8fc,
    0xed545578,
    0x08fca5b5,
    0xd83d7cd3,
    0x4dad0fc4,
    0x1e50ef5e,
    0xb161e6f8,
    0xa28514d9,
    0x6c51133c,
    0x6fd5c7e7,
    0x56e14ec4,
    0x362abfce,
    0xddc6c837,
    0xd79a3234,
    0x92638212,
    0x670efa8e,
    0x406000e0,
    0x3a39ce37,
    0xd3faf5cf,
    0xabc27737,
    0x5ac52d1b,
    0x5cb0679e,
    0x4fa33742,
    0xd3822740,
    0x99bc9bbe,
    0xd5118e9d,
    0xbf0f7315,
    0xd62d1c7e,
    0xc700c47b,
    0xb78c1b6b,
    0x21a19045,
    0xb26eb1be,
    0x6a366eb4,
    0x5748ab2f,
    0xbc946e79,
    0xc6a376d2,
    0x6549c2c8,
    0x530ff8ee,
    0x468dde7d,
    0xd5730a1d,
    0x4cd04dc6,
    0x2939bbdb,
    0xa9ba4650,
    0xac9526e8,
    0xbe5ee304,
    0xa1fad5f0,
    0x6a2d519a,
    0x63ef8ce2,
    0x9a86ee22,
    0xc089c2b8,
    0x43242ef6,
    0xa51e03aa,
    0x9cf2d0a4,
    0x83c061ba,
    0x9be96a4d,
    0x8fe51550,
    0xba645bd6,
    0x2826a2f9,
    0xa73a3ae1,
    0x4ba99586,
    0xef5562e9,
    0xc72fefd3,
    0xf752f7da,
    0x3f046f69,
    0x77fa0a59,
    0x80e4a915,
    0x87b08601,
    0x9b09e6ad,
    0x3b3ee593,
    0xe990fd5a,
    0x9e34d797,
    0x2cf0b7d9,
    0x022b8b51,
    0x96d5ac3a,
    0x017da67d,
    0xd1cf3ed6,
    0x7c7d2d28,
    0x1f9f25cf,
    0xadf2b89b,
    0x5ad6b472,
    0x5a88f54c,
    0xe029ac71,
    0xe019a5e6,
    0x47b0acfd,
    0xed93fa9b,
    0xe8d3c48d,
    0x283b57cc,
    0xf8d56629,
    0x79132e28,
    0x785f0191,
    0xed756055,
    0xf7960e44,
    0xe3d35e8c,
    0x15056dd4,
    0x88f46dba,
    0x03a16125,
    0x0564f0bd,
    0xc3eb9e15,
    0x3c9057a2,
    0x97271aec,
    0xa93a072a,
    0x1b3f6d9b,
    0x1e6321f5,
    0xf59c66fb,
    0x26dcf319,
    0x7533d928,
    0xb155fdf5,
    0x03563482,
    0x8aba3cbb,
    0x28517711,
    0xc20ad9f8,
    0xabcc5167,
    0xccad925f,
    0x4de81751,
    0x3830dc8e,
    0x379d5862,
    0x9320f991,
    0xea7a90c2,
    0xfb3e7bce,
    0x5121ce64,
    0x774fbe32,
    0xa8b6e37e,
    0xc3293d46,
    0x48de5369,
    0x6413e680,
    0xa2ae0810,
    0xdd6db224,
    0x69852dfd,
    0x09072166,
    0xb39a460a,
    0x6445c0dd,
    0x586cdecf,
    0x1c20c8ae,
    0x5bbef7dd,
    0x1b588d40,
    0xccd2017f,
    0x6bb4e3bb,
    0xdda26a7e,
    0x3a59ff45,
    0x3e350a44,
    0xbcb4cdd5,
    0x72eacea8,
    0xfa6484bb,
    0x8d6612ae,
    0xbf3c6f47,
    0xd29be463,
    0x542f5d9e,
    0xaec2771b,
    0xf64e6370,
    0x740e0d8d,
    0xe75b1357,
    0xf8721671,
    0xaf537d5d,
    0x4040cb08,
    0x4eb4e2cc,
    0x34d2466a,
    0x0115af84,
    0xe1b00428,
    0x95983a1d,
    0x06b89fb4,
    0xce6ea048,
    0x6f3f3b82,
    0x3520ab82,
    0x011a1d4b,
    0x277227f8,
    0x611560b1,
    0xe7933fdc,
    0xbb3a792b,
    0x344525bd,
    0xa08839e1,
    0x51ce794b,
    0x2f32c9b7,
    0xa01fbac9,
    0xe01cc87e,
    0xbcc7d1f6,
    0xcf0111c3,
    0xa1e8aac7,
    0x1a908749,
    0xd44fbd9a,
    0xd0dadecb,
    0xd50ada38,
    0x0339c32a,
    0xc6913667,
    0x8df9317c,
    0xe0b12b4f,
    0xf79e59b7,
    0x43f5bb3a,
    0xf2d519ff,
    0x27d9459c,
    0xbf97222c,
    0x15e6fc2a,
    0x0f91fc71,
    0x9b941525,
    0xfae59361,
    0xceb69ceb,
    0xc2a86459,
    0x12baa8d1,
    0xb6c1075e,
    0xe3056a0c,
    0x10d25065,
    0xcb03a442,
    0xe0ec6e0e,
    0x1698db3b,
    0x4c98a0be,
    0x3278e964,
    0x9f1f9532,
    0xe0d392df,
    0xd3a0342b,
    0x8971f21e,
    0x1b0a7441,
    0x4ba3348c,
    0xc5be7120,
    0xc37632d8,
    0xdf359f8d,
    0x9b992f2e,
    0xe60b6f47,
    0x0fe3f11d,
    0xe54cda54,
    0x1edad891,
    0xce6279cf,
    0xcd3e7e6f,
    0x1618b166,
    0xfd2c1d05,
    0x848fd2c5,
    0xf6fb2299,
    0xf523f357,
    0xa6327623,
    0x93a83531,
    0x56cccd02,
    0xacf08162,
    0x5a75ebb5,
    0x6e163697,
    0x88d273cc,
    0xde966292,
    0x81b949d0,
    0x4c50901b,
    0x71c65614,
    0xe6c6c7bd,
    0x327a140a,
    0x45e1d006,
    0xc3f27b9a,
    0xc9aa53fd,
    0x62a80f00,
    0xbb25bfe2,
    0x35bdd2f6,
    0x71126905,
    0xb2040222,
    0xb6cbcf7c,
    0xcd769c2b,
    0x53113ec0,
    0x1640e3d3,
    0x38abbd60,
    0x2547adf0,
    0xba38209c,
    0xf746ce76,
    0x77afa1c5,
    0x20756060,
    0x85cbfe4e,
    0x8ae88dd8,
    0x7aaaf9b0,
    0x4cf9aa7e,
    0x1948c25c,
    0x02fb8a8c,
    0x01c36ae4,
    0xd6ebe1f9,
    0x90d4f869,
    0xa65cdea0,
    0x3f09252d,
    0xc208e69f,
    0xb74e6132,
    0xce77e25b,
    0x578fdfe3,
    0x3ac372e6
];
/**
 * @type {Array.<number>}
 * @const
 * @inner
 */ var C_ORIG = [
    0x4f727068,
    0x65616e42,
    0x65686f6c,
    0x64657253,
    0x63727944,
    0x6f756274
];
/**
 * @param {Array.<number>} lr
 * @param {number} off
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @returns {Array.<number>}
 * @inner
 */ function _encipher(lr, off, P, S) {
    // This is our bottleneck: 1714/1905 ticks / 90% - see profile.txt
    var n, l = lr[off], r = lr[off + 1];
    l ^= P[0];
    /*
    for (var i=0, k=BLOWFISH_NUM_ROUNDS-2; i<=k;)
        // Feistel substitution on left word
        n  = S[l >>> 24],
        n += S[0x100 | ((l >> 16) & 0xff)],
        n ^= S[0x200 | ((l >> 8) & 0xff)],
        n += S[0x300 | (l & 0xff)],
        r ^= n ^ P[++i],
        // Feistel substitution on right word
        n  = S[r >>> 24],
        n += S[0x100 | ((r >> 16) & 0xff)],
        n ^= S[0x200 | ((r >> 8) & 0xff)],
        n += S[0x300 | (r & 0xff)],
        l ^= n ^ P[++i];
    */ //The following is an unrolled version of the above loop.
    //Iteration 0
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[1];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[2];
    //Iteration 1
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[3];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[4];
    //Iteration 2
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[5];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[6];
    //Iteration 3
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[7];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[8];
    //Iteration 4
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[9];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[10];
    //Iteration 5
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[11];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[12];
    //Iteration 6
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[13];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[14];
    //Iteration 7
    n = S[l >>> 24];
    n += S[0x100 | l >> 16 & 0xff];
    n ^= S[0x200 | l >> 8 & 0xff];
    n += S[0x300 | l & 0xff];
    r ^= n ^ P[15];
    n = S[r >>> 24];
    n += S[0x100 | r >> 16 & 0xff];
    n ^= S[0x200 | r >> 8 & 0xff];
    n += S[0x300 | r & 0xff];
    l ^= n ^ P[16];
    lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
    lr[off + 1] = l;
    return lr;
}
/**
 * @param {Array.<number>} data
 * @param {number} offp
 * @returns {{key: number, offp: number}}
 * @inner
 */ function _streamtoword(data, offp) {
    for(var i = 0, word = 0; i < 4; ++i)word = word << 8 | data[offp] & 0xff, offp = (offp + 1) % data.length;
    return {
        key: word,
        offp: offp
    };
}
/**
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _key(key, P, S) {
    var offset = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
    for(i = 0; i < plen; i += 2)lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Expensive key schedule Blowfish.
 * @param {Array.<number>} data
 * @param {Array.<number>} key
 * @param {Array.<number>} P
 * @param {Array.<number>} S
 * @inner
 */ function _ekskey(data, key, P, S) {
    var offp = 0, lr = [
        0,
        0
    ], plen = P.length, slen = S.length, sw;
    for(var i = 0; i < plen; i++)sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
    offp = 0;
    for(i = 0; i < plen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
    for(i = 0; i < slen; i += 2)sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
/**
 * Internaly crypts a string.
 * @param {Array.<number>} b Bytes to crypt
 * @param {Array.<number>} salt Salt bytes to use
 * @param {number} rounds Number of rounds
 * @param {function(Error, Array.<number>=)=} callback Callback receiving the error, if any, and the resulting bytes. If
 *  omitted, the operation will be performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {!Array.<number>|undefined} Resulting bytes if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _crypt(b, salt, rounds, callback, progressCallback) {
    var cdata = C_ORIG.slice(), clen = cdata.length, err;
    // Validate
    if (rounds < 4 || rounds > 31) {
        err = Error("Illegal number of rounds (4-31): " + rounds);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.length !== BCRYPT_SALT_LEN) {
        err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    rounds = 1 << rounds >>> 0;
    var P, S, i = 0, j;
    //Use typed arrays when available - huge speedup!
    if (typeof Int32Array === "function") {
        P = new Int32Array(P_ORIG);
        S = new Int32Array(S_ORIG);
    } else {
        P = P_ORIG.slice();
        S = S_ORIG.slice();
    }
    _ekskey(salt, b, P, S);
    /**
   * Calcualtes the next round.
   * @returns {Array.<number>|undefined} Resulting array if callback has been omitted, otherwise `undefined`
   * @inner
   */ function next() {
        if (progressCallback) progressCallback(i / rounds);
        if (i < rounds) {
            var start = Date.now();
            for(; i < rounds;){
                i = i + 1;
                _key(b, P, S);
                _key(salt, P, S);
                if (Date.now() - start > MAX_EXECUTION_TIME) break;
            }
        } else {
            for(i = 0; i < 64; i++)for(j = 0; j < clen >> 1; j++)_encipher(cdata, j << 1, P, S);
            var ret = [];
            for(i = 0; i < clen; i++)ret.push((cdata[i] >> 24 & 0xff) >>> 0), ret.push((cdata[i] >> 16 & 0xff) >>> 0), ret.push((cdata[i] >> 8 & 0xff) >>> 0), ret.push((cdata[i] & 0xff) >>> 0);
            if (callback) {
                callback(null, ret);
                return;
            } else return ret;
        }
        if (callback) nextTick(next);
    }
    // Async
    if (typeof callback !== "undefined") {
        next();
    // Sync
    } else {
        var res;
        while(true)if (typeof (res = next()) !== "undefined") return res || [];
    }
}
/**
 * Internally hashes a password.
 * @param {string} password Password to hash
 * @param {?string} salt Salt to use, actually never null
 * @param {function(Error, string=)=} callback Callback receiving the error, if any, and the resulting hash. If omitted,
 *  hashing is performed synchronously.
 *  @param {function(number)=} progressCallback Callback called with the current progress
 * @returns {string|undefined} Resulting hash if callback has been omitted, otherwise `undefined`
 * @inner
 */ function _hash(password, salt, callback, progressCallback) {
    var err;
    if (typeof password !== "string" || typeof salt !== "string") {
        err = Error("Invalid string / salt: Not a string");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    // Validate the salt
    var minor, offset;
    if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
        err = Error("Invalid salt version: " + salt.substring(0, 2));
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
    else {
        minor = salt.charAt(2);
        if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
                nextTick(callback.bind(this, err));
                return;
            } else throw err;
        }
        offset = 4;
    }
    // Extract number of rounds
    if (salt.charAt(offset + 2) > "$") {
        err = Error("Missing salt rounds");
        if (callback) {
            nextTick(callback.bind(this, err));
            return;
        } else throw err;
    }
    var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
    password += minor >= "a" ? "\x00" : "";
    var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
    /**
   * Finishes hashing.
   * @param {Array.<number>} bytes Byte array
   * @returns {string}
   * @inner
   */ function finish(bytes) {
        var res = [];
        res.push("$2");
        if (minor >= "a") res.push(minor);
        res.push("$");
        if (rounds < 10) res.push("0");
        res.push(rounds.toString());
        res.push("$");
        res.push(base64_encode(saltb, saltb.length));
        res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
        return res.join("");
    }
    // Sync
    if (typeof callback == "undefined") return finish(_crypt(passwordb, saltb, rounds));
    else {
        _crypt(passwordb, saltb, rounds, function(err, bytes) {
            if (err) callback(err, null);
            else callback(null, finish(bytes));
        }, progressCallback);
    }
}
function encodeBase64(bytes, length) {
    return base64_encode(bytes, length);
}
function decodeBase64(string, length) {
    return base64_decode(string, length);
}
const __TURBOPACK__default__export__ = {
    setRandomFallback,
    genSaltSync,
    genSalt,
    hashSync,
    hash,
    compareSync,
    compare,
    getRounds,
    getSalt,
    truncates,
    encodeBase64,
    decodeBase64
};
}),
];

//# sourceMappingURL=Desktop_Smart-Engine_6818948c._.js.map