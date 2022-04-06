// Buffer 类 对象用于表示固定长度的字节序列。 许多 Node.js API 都支持 Buffer。
// 虽然 Buffer 类在全局作用域内可用，但仍然建议通过 import 或 require 语句显式地引用它。

// buffer 是全局变量，里面包含几个类
/**
 * {
  Blob: [class Blob],
  resolveObjectURL: [Function: resolveObjectURL],
  Buffer: [Function: Buffer] {
    poolSize: 8192,
    from: [Function: from],
    of: [Function: of],
    alloc: [Function: alloc],
    allocUnsafe: [Function: allocUnsafe],
    allocUnsafeSlow: [Function: allocUnsafeSlow],
    isBuffer: [Function: isBuffer],
    compare: [Function: compare],
    isEncoding: [Function: isEncoding],
    concat: [Function: concat],
    byteLength: [Function: byteLength],
    [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
  },
  SlowBuffer: [Function: SlowBuffer],
  transcode: [Function: transcode],
  kMaxLength: 4294967296,
  kStringMaxLength: 536870888,
  btoa: [Function: btoa],
  atob: [Function: atob],
  constants: { MAX_LENGTH: 4294967296, MAX_STRING_LENGTH: 536870888 },
  INSPECT_MAX_BYTES: [Getter/Setter]
}
 * 
 * 
 */

const { Buffer } = require('buffer');

console.log(Buffer);
/**
 * [Function: Buffer] {
  poolSize: 8192,
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
}
 * 
 */
