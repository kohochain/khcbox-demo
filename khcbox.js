const port = process.env.HOST_PORT || 9090;

module.exports = {
    networks: {
        mainnet: {
            privateKey: "",
            userFeePercentage: 100,
            feeLimit: 1e8,
            fullHost: "https://scan.khchain.io/fullnode",
            network_id: "1",
        },
        testnet: {
            privateKey: "",
            userFeePercentage: 0,
            feeLimit: 1e8,
            fullHost: "https://test-scan.khchain.io/fullnode",
            network_id: "2",
        },
        development: {
            privateKey: "",
            userFeePercentage: 0,
            feeLimit: 1e8,
            fullHost: "http://127.0.0.1:" + port,
            network_id: "3",
        },
        compilers: {
            solc: {
                // version: '0.5.4'
            },
        },
    },
};
