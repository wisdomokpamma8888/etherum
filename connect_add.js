
const  address = document.querySelector(".address_hex");
async function connect() {
    if (window.ethereum) {
       await window.ethereum.request({ method: "eth_requestAccounts" });
       window.web3 = new Web3(window.ethereum);
       const account = web3.eth.accounts;
       //Get the current MetaMask selected/active wallet
       const walletAddress = account.givenProvider.selectedAddress;

       if(walletAddress!= undefined){
            address.style.display = "block";
            address.innerHTML =`<p>${walletAddress}</p>`;
       }

    //    console.log(`Wallet: ${walletAddress}`);
     
    
    } else {
     console.log("No wallet");
    }
  }

  