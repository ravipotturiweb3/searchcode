import Web3 from 'web3';

const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sbtId",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "StudentFirstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "StudentLastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "AwardName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "AwardSubCategory",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "SbtType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SoulId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SBTId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ParentSoulId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "DOB",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "emailAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "walletaddress",
                        "type": "address"
                    }
                ],
                "internalType": "struct StudentAwardSBT.studentStruct",
                "name": "_studentStruct",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "IssuedDate",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "IssuedBy",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "IssuedSchool",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SchoolAdmissionID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SchoolSoulID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "ImgUrl",
                        "type": "string"
                    }
                ],
                "internalType": "struct StudentAwardSBT.issuedStruct",
                "name": "_issuedStruct",
                "type": "tuple"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MinterAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MinterRemoved",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "SBT_ID",
                "type": "uint256"
            }
        ],
        "name": "SBT_burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "minter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "SBT_ID",
                "type": "uint256"
            }
        ],
        "name": "SBT_mint",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_sbtId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "StudentFirstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "StudentLastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "AwardName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "AwardSubCategory",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "SbtType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SoulId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SBTId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ParentSoulId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "DOB",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "emailAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "walletaddress",
                        "type": "address"
                    }
                ],
                "internalType": "struct StudentAwardSBT.studentStruct",
                "name": "_studentStruct",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "IssuedDate",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "IssuedBy",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "IssuedSchool",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SchoolAdmissionID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "SchoolSoulID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "ImgUrl",
                        "type": "string"
                    }
                ],
                "internalType": "struct StudentAwardSBT.issuedStruct",
                "name": "_issuedStruct",
                "type": "tuple"
            }
        ],
        "name": "updateSbtdata",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "burnedSbtId",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isMinter",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "issuedSbtInfo",
        "outputs": [
            {
                "internalType": "string",
                "name": "IssuedDate",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "IssuedBy",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "IssuedSchool",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "SchoolAdmissionID",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "SchoolSoulID",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "ImgUrl",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SBT_ID",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "studentSbtInfo",
        "outputs": [
            {
                "internalType": "string",
                "name": "StudentFirstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "StudentLastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "AwardName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "AwardSubCategory",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "SbtType",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "SoulId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "SBTId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ParentSoulId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "DOB",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "emailAddress",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "walletaddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const alchemyApiUrl = `https://polygon-mumbai.g.alchemy.com/v2/PrDFshdKboxw6y-oOh8A5j-jN0bhgCck`;

const web3 = new Web3(alchemyApiUrl);
const contractAddress = '0x553b758e3A9D8218e5B67Ae6B99D12624720B070';
// const contractAddress = '0x03DEF2aaF07367631FBF079190C0c16575862942';

async function user(sbtId) {
// Create an instance of the contract
const contractInstance = new web3.eth.Contract(abi, contractAddress);

// get SBTID
const studentSbtInfo = await contractInstance.methods.studentSbtInfo(sbtId).call();
const issuedSbtInfo =  await contractInstance.methods.issuedSbtInfo(sbtId).call();



console.log('studentSbtInfo:', studentSbtInfo);
console.log('issuedSbtInfo:', issuedSbtInfo);




return { studentSbtInfo, issuedSbtInfo};
}
export default user