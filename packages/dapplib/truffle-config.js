require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remember snake idea problem bubble gentle'; 
let testAccounts = [
"0x9aa266a7cb74f031204df701ea2927ce92230c9835612ad5b3e8e3dc7371e9a5",
"0x694c8ee002aa258c1119db26b69b77e705f5239e9c0198034ae24d9798d533c8",
"0xabc074fb337acf8f2dbe27ad8b1f9bf8f7eaca1f89b25d92380f1da2b1587128",
"0x90b73bdff54d81e7c634cbc91db2a4ff829bcad79208a7b6e84dd62dbcc96ce2",
"0xa32b8cc517a984babacae8a650401f4afaab59474fc06d6df4878fdd6e2bdaaf",
"0x3d1dffaaa28fd0a4873b4b960ccc16d56c25b835cd0cf88813bd8aba16974358",
"0xca2209bf05be0e76bbc1aa1441ef2bf0f5fa2564abbd2e5744297ccada133230",
"0xf54dd0874d25c80f5f0fdec8c8728cfd475b67c876a87137c132700e57073245",
"0x47a374da478671c2f6310a1a27fd67ae969b7af8f4c37d9d7b55889004be1456",
"0x721696928ca0e9ff5d6c288cbcee9952e5d9927d0a7c56d3b2646530fc940157"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


