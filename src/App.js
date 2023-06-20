import React, { useState,useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
// import html2canvas from "html2canvas";
// import { saveAs } from 'file-saver'
import transactionHash from './transaction';


	const abi = 
	[
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
							"name": "Gender",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "ClassGrade",
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
							"name": "IssuerName",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "ProductName",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "TechnologyProviderCompany",
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
							"internalType": "address",
							"name": "walletaddress",
							"type": "address"
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
							"name": "Gender",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "ClassGrade",
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
							"name": "IssuerName",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "ProductName",
							"type": "string"
						},
						{
							"internalType": "string",
							"name": "TechnologyProviderCompany",
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
							"internalType": "address",
							"name": "walletaddress",
							"type": "address"
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
					"name": "IssuerName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ProductName",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "TechnologyProviderCompany",
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
					"internalType": "address",
					"name": "walletaddress",
					"type": "address"
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
					"name": "Gender",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "ClassGrade",
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
	]
	const alchemyApiUrl = `https://polygon-mumbai.g.alchemy.com/v2/PrDFshdKboxw6y-oOh8A5j-jN0bhgCck`;

const web3 = new Web3(alchemyApiUrl);
const contractAddress = '0x8223e3516B1CE9186E0170eDA100E630b031d88F';
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



function App() {
 const [sbtId, setSbtId] = useState('');
  const [studentSbtInfo, setStudentSbtInfo] = useState({});
  const [issuedSbtInfo, setIssuedSbtInfo] = useState({});
  const [showMenu, setShowMenu] = useState(false);

 



  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.querySelector('.menu-icon');
	const navbarLinks = document.querySelector('.navbar-links');
	const collapsibleMenu = document.querySelector('.collapsible-menu');
  
	menuIcon.addEventListener('click', () => {
	  navbarLinks.classList.toggle('show');
	  collapsibleMenu.classList.toggle('show');
	});
  });
  



  

  const handleSearch = async () => {
	const urlParams = new URLSearchParams(window.location.search);
	let sbtId = urlParams.get('sbtid');
  
	// Retrieve input value and trim any leading/trailing spaces
	const inputBox = document.getElementById('search-input');
	const inputBoxValue = inputBox.value.trim();
  
	// If the search term in the URL doesn't match the input box value, update the URL
	if (sbtId !== inputBoxValue) {
	  const newUrl = new URL(window.location);
	  newUrl.searchParams.set('sbtid', inputBoxValue);
	  window.history.pushState(null, '', newUrl);
	  sbtId = inputBoxValue;
	}
  
	// If there is a search term, call the API and update the state
	if (sbtId) {
	  const result = await user(sbtId);
	  const transactionHash = getTransactionHash(sbtId);
	  setStudentSbtInfo(result.studentSbtInfo);
	  setIssuedSbtInfo(result.issuedSbtInfo);
	  setStudentSbtInfo(prevState => ({ ...prevState, transactionHashes: transactionHash }));
	}
  };
  
  useEffect(() => {
	// When the component mounts, set the input box value to the search term in the URL
	const urlParams = new URLSearchParams(window.location.search);
	const sbtId = urlParams.get('sbtid');
	const inputBox = document.getElementById('search-input');
	inputBox.value = sbtId || '';

  
	// When the search button is clicked, call the handleSearch function
	const searchButton = document.getElementById('search-button');
	searchButton.addEventListener('click', handleSearch);
  
	// Call handleSearch once to initialize the state and URL
	handleSearch();
  
	// Cleanup function: remove the event listener
	return () => searchButton.removeEventListener('click', handleSearch);
  },[]);
  
// const handleDownload = () => {
//   const element = document.getElementById("studentsbtinfo"); 
//   html2canvas(element).then((canvas) => {
//     const link = document.createElement("a");
//     link.download = "screenshot.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
//   });
// };

// const downloadImage = (event) => {
// 	event.preventDefault();
// 	const downloadUrl = issuedSbtInfo.ImgUrl.replace("/view/", "/download/");
// 	saveAs(downloadUrl, 'image.jpg');
//   }
  
  function getTransactionHash(sbtId) {
	const matchingObject = transactionHash.find(obj => obj.sbtid === Number(sbtId));
	return matchingObject ? matchingObject.hash : "";
  }

  function copyToClipboard(text) {
	var input = document.createElement('textarea');
	input.value = text;
	document.body.appendChild(input);
	input.select();
	document.execCommand('copy');
	document.body.removeChild(input);
  }



  return (
    <>
  <nav class="navbar" >
  <div>
  <a href="https://prasasti.io/">
	<img src="https://prasasti.infura-ipfs.io/ipfs/QmYE8i8yUGebYRmAUN8jW5cWYGPfWCZCM3dkb1MXAX5ksa" alt="Logo" width="80" height="80"/>
	</a>
	</div>
	{/* <div><h1>Prasasti</h1></div> */}
  <div>
      <button onClick={toggleMenu}  className="menu-button" style={{ border: "none",outline: "none"}}>
	  <img src="https://prasasti.infura-ipfs.io/ipfs/QmVJFrGYTTJAvzf9Hx7P7sR9iU3zzxW4re4xH4bmnLZG8J" alt="hamburger menu icon" width="40" height="40" style={{"border":"none"}} />
        <span></span>
        <span></span>
        <span></span>
     </button>
	 <br/>
	 <br/>
	 <br/>
      {showMenu && (
        <nav className="menu">
          <ul>
            <li style={{ fontFamily: "monospace"}}><a href="https://prasasti.io/">Home</a></li>
            <li style={{ fontFamily: "monospace"}}><a href="https://in.linkedin.com/company/prasasti" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li style={{ fontFamily: "monospace"}}><a href="mailto:ravipotturi@prasasti.io" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
          </ul>
        </nav>
      )}
    </div>
	
</nav>


    <center>
   <div style={{ display: "flex", flexDirection: "column" }}>
   <h1 style={{fontFamily: "monospace"}}>Welcome to the world of Prasasti</h1>
          <h3 style={{fontFamily: "monospace"}}>View your Identity & Achievements on blockchain.</h3>
		  <h4   style={{fontFamily: "monospace"}}>We are live on Polygon testnet</h4>

          <p style={{fontFamily: "monospace"}}>Enter Your SBT ID</p>
		  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
  <form>
  <div style={{display: "flex"}}>
  <select style={{padding: "5px", fontFamily: "monospace",background: "#EFEFEF",marginRight: "10px",borderRadius: "5px",cursor:"pointer"}}>
    <option value="option1">SBT ID</option>
    <option value="option2">Soul ID</option>
    <option value="option3">School ID</option>
  </select>
  <input 
    type="text" 
    id="search-input" 
    value={sbtId} 
    onChange={(e) => {
      const value = e.target.value;
      const regex = /^[0-9\b]+$/; // regular expression to match only numbers and backspace key (\b)
      if (value === '' || regex.test(value)) {
        setSbtId(value);
      } else {
        alert('Please enter only sbtid.');
      }
    }} 
    style={{ background: "#EFEFEF", fontFamily: "monospace", borderRadius: "5px", marginRight: "10px" }} 
  />
      {/* <button type="button"  id ="search-button" onClick={handleSearch} style={{padding: "5px 10px", background: "lightblue", border: "none",borderRadius: "5px",color: "white" }} >Search</button> */}

 
  <button type="button"  id ="search-button" onClick={handleSearch} style={{padding: "5px 10px", background: "#1DA1F2", border: "none",borderRadius: "5px",color:"white" }} >Search</button>
</div>

  </form>
  {/* <button type="button" onClick={handleDownload} style={{ width: "100px", height: "20px", marginLeft: "10px",fontFamily: "monospace", background: "#ecd6c7", borderRadius: "5px", cursor: "pointer"  }}>Download</button> */}
</div>



{Object.keys(studentSbtInfo).length !== 0 && (
	
	<article class="cta">
	<img src={issuedSbtInfo.ImgUrl} alt="award" />
	
	<div class="cta__text-column">
	
        {/* <p>Hash: <a href={studentSbtInfo.transactionHashes} target="_blank" rel="noopener noreferrer">{studentSbtInfo.transactionHashes}</a></p> */}
      <p >SBT ID: {studentSbtInfo.SBTId}</p>
      <p >First Name: {studentSbtInfo.StudentFirstName}</p><br/>
	  <p >LastName: {studentSbtInfo.StudentLastName}</p><br/>
	  <p >Gender : {studentSbtInfo.Gender}</p><br/>
	  <p >Class Grade : {studentSbtInfo.ClassGrade}</p><br/>
      <p >Award : {studentSbtInfo.AwardName}</p><br/>
	  <p >Awards sub category:{studentSbtInfo.AwardSubCategory}</p><br/>
	  <p >Sbt Type : {studentSbtInfo.SbtType}</p><br/>
	  {/* <p >IssuedBy: {issuedSbtInfo.IssuedBy}</p><br/> */}
	  <p >Product Name: {issuedSbtInfo.ProductName}</p><br/>
	  <p >Soul Id : {studentSbtInfo.SoulId}</p><br/>
	  <p >SchoolAdmissionID: {issuedSbtInfo.SchoolAdmissionID}</p><br/>
	  <p >SchoolSoulID: {issuedSbtInfo.SchoolSoulID}</p><br/>
	  {/* <p >Parent Soulid : {studentSbtInfo.ParentSoulId}</p><br/> */}
	  <p >IssuedDate: {issuedSbtInfo.IssuedDate}</p><br/>
	  <p>IssuerName: {issuedSbtInfo.IssuerName}</p>
	  <p >EmailAddress: {studentSbtInfo.emailAddress}</p><br/>
	  <p >DOB : {studentSbtInfo.DOB}</p><br/>
	  <p >Walletaddress: {issuedSbtInfo.walletaddress}</p><br/>
      
		{/* <p >IssuedSchool: {issuedSbtInfo.IssuedSchool}</p><br/> */}
	  <p>Technology Provider Company:  {issuedSbtInfo.TechnologyProviderCompany}</p><br/>

    
      
	  <a href={studentSbtInfo.transactionHashes} target="_blank" rel="noopener noreferrer">Enough Words ! Show me proof</a>
	  <button onClick={() => copyToClipboard(studentSbtInfo.transactionHashes)} style={{marginLeft:"10px" ,margintop: "1rem",marginBottom:'2rem',  padding: "0.5rem 1rem", textDecoration: "none",fontweight: "700",border: "0.35rem solid",background:"#dadada", display:"inline-block",borderRadius: "0.6rem",fontWeight: "700",color:"black",cursor:"pointer", }} >Copy the link</button>
	</div>
</article>
)} 



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div style={{ position: "fixed", bottom: 0, left: 0, right:0, backgroundColor: "#204969", padding: "3px" }}>
  <div style={{ display: "flex", justifyContent: "relative", alignItems: "center" }}>
    <a href="https://twitter.com/Prasasti_io" style={{margin: "0 10px"}} target="_blank" rel="noopener noreferrer">
      <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Twitter-64.png" alt="Twitter" width="30"/>
    </a>
    <a href="https://instagram.com/prasasti.io?" style={{margin: "0 10px"}} target="_blank" rel="noopener noreferrer">
      <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="Instagram" width="30"/>
    </a>
    <a href="https://in.linkedin.com/company/prasasti" style={{margin: "0 10px"}} target="_blank" rel="noopener noreferrer">
      <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-64.png" alt="LinkedIn" width="30"/>
    </a>
    <a href="https://www.facebook.com/people/Prasasti/100091130019759/" style={{margin: "0 10px"}} target="_blank" rel="noopener noreferrer">
      <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-64.png" alt="Facebook" width="30"/>
    </a>
  </div>
  <div>
  <footer style={{ textAlign: "center"}}>
    © 2023 Prasasti. All rights reserved.
  </footer>
  </div>
 
</div>

</div>

    </center>
    </>
  )
}
export default App;