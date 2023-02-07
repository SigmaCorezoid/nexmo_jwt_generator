const crypto = require("crypto-js/sha1");

module.exports = (content) => return {
            content: Utf8.encode(content),
            encoding: 'utf-8',
         };

      } else if (typeof Buffer !== 'undefined' && content instanceof Buffer) {
         log('We appear to be in Node');
         return {
            content: content.toString('base64'),
            encoding: 'base64',
         };

      } else if (typeof Blob !== 'undefined' && content instanceof Blob) {
         log('We appear to be in the browser');
         return {
            content: Base64.encode(content),
            encoding: 'base64',
         };

      } else { // eslint-disable-line
         log(`Not sure what this content is: ${typeof content}, ${JSON.stringify(content)}`);
         throw new Error('Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)');
      }
   };
