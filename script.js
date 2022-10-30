const MoodContractAddress = '0x63c31d050c1e1d6dae5a0cb880848d773ee98ab5';
const contractABI = [
    {inputs:[{internalType: "string", name: "_mood", type: "string"}], name: "setMood", type: "function", stateMutability: "nonpayable", outputs: []},
    {inputs: [], outputs: [{internalType: "string", name: "", type: "string"}], name: "getMood", type: "function", stateMutability: "view"}
];

let signer;
let moodContract;
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((account) => {
        signer = provider.getSigner(account[0]);
        moodContract = new ethers.Contract(MoodContractAddress, contractABI, signer);
    })
});

  async function get() {
    console.log("hey");
    const Mood = await moodContract.getMood();

    console.log(Mood);
  }

  async function set() {
    const mood = document.getElementById('mood').value;
    const setMoodPromise = await moodContract.setMood(mood);
  }
