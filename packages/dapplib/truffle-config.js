require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain modify give arch off gate'; 
let testAccounts = [
"0xbe5865a45b8b39b58e7fb7a5913e3bb6e3004ab234722a97a647524cd2be6881",
"0x159d757eb43a15f77cc675e5f8cf91904d11cb6e2dc97591a87508a6c20c1182",
"0x58acbb82a59f392d96de16ce6c79ff7ec38ea55b5c5fe33f3c05dd3b7ffd4697",
"0x55daf556afd507583a9b34f26611b9a24f71bb15e8b8ffd98a7caa6a583d54b9",
"0x12cfb8c92d29a8885796820568984623355474110ee1d8452d4c795d970d77c2",
"0x23685f2ac7f9b0c9ed5d3ad165d4fe2727781d357c659889b32a82195876492c",
"0x09ed60e806dd7f5ec9ce45a77c32ecdd95a7a9e142445127752a4741213e7593",
"0x39ba0e2247edbeb52295505fe55566bf8c4b6e844c91653dace866ec33d37f6c",
"0x935b27fad36286ead432bcb66e7b79f4256c65a6d1d76b3e5d435ef8a64e87d7",
"0x7acbe27930247c882ca022c785168733414e679787be6551b02b27b56eb64ddd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
