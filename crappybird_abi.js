var CrappyBirdABI = [{
        "inputs": [],
        "name": "getHighScore",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }],
        "name": "getHighScoreByAddress",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "id",
            "type": "string"
        }],
        "name": "getHighScoreById",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "id",
            "type": "string"
        }],
        "name": "register",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "score",
                "type": "uint256"
            }
        ],
        "name": "setHighScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]