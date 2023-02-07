module.exports = (data) => {
    data.hello = "Hello World!";
    return data;
};

/*function Get_JWT(input) {
    var result = '',
        binData, i;
    var base64Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split(''); // Base is 65 in fact :-)
    if (typeof input === 'string')
        for (i = 0, input = input.split(''); i < input.length; i++) input[i] = input[i].charCodeAt(0);
    // Extreme optimization. Something like black magic.
    // Risk of breaking the brain :-)
    for (i = 0; i < input.length; i += 3) {
        // Warning, bitwise operations! :-)
        // Grabbing three bytes (octets in binary):
        binData = (input[i] & 0xFF) << 16 | // FF.00.00
            (input[i + 1] & 0xFF) << 8 | // 00.FF.00
            (input[i + 2] & 0xFF); // 00.00.FF
        // And converting them to four base64 "sixtets" (letters):
        result += base64Alphabet[(binData & 0xFC0000) >>> 18] + //11111100.00000000.00000000 = 0xFC0000 = 16515072
            base64Alphabet[(binData & 0x03F000) >>> 12] + //00000011.11110000.00000000 = 0x03F000 = 258048
            base64Alphabet[(i + 3 >= input.length && (input.length << 1) % 3 === 2 ? 64 :
                (binData & 0x000FC0) >>> 6)] + //00000000.00001111.11000000 = 0x000FC0 = 4032
            base64Alphabet[(i + 3 >= input.length && (input.length << 1) % 3 ? 64 :
                binData & 0x00003F)]; //00000000.00000000.00111111 = 0x00003F = 63
        // If we haven't last byte, or two (for complete three octets),
        // we place '=' [61] letter (or two) at the end.
    }
    return result;
}*/
