import Web3 from "web3";
import votingArtifact from "../../build/contracts/Voting.json";

let candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

const App = {
  web3: null,  account: null, voting: null,
  start: async function() {
      const { web3 } = this;
      try {
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = votingArtifact.networks[networkId];
          this.voting = new web3.eth.Contract(
              votingArtifact.abi,
              deployedNetwork.address,
          );

          const accounts = await web3.eth.getAccounts();
          this.account = accounts[0];

          this.loadCandidatesAndVotes();
      }
      catch (error) {
          console.error("Could not connect to contract or chain.");
      }
  },

  loadCandidatesAndVotes: async function() {
      const { totalVotesFor } = this.voting.methods;

      let candidateNames = Object.keys(candidates);
      for (var i = 0; i < candidateNames.length; i++) {
          let name = candidateNames[i];
          var count = await totalVotesFor(this.web3.utils.asciiToHex(name)).call();
          $("#" + candidates[name]).html(count);
      }
  },

  voteForCandidate: async function() {
      let candidateName = $("#candidate").val();
      $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.");
      $("#candidate").val("");

      const { totalVotesFor, voteForCandidate } = this.voting.methods;
    
      await voteForCandidate(this.web3.utils.asciiToHex(candidateName)).send({ gas: 140000, from: this.account });
      let div_id = candidates[candidateName];
      var count = await totalVotesFor(this.web3.utils.asciiToHex(candidateName)).call();
      $("#" + div_id).html(count);
      $("#msg").html("");

      alert("Thanks for your Voting");
  }
};

window.App = App;

window.addEventListener("load", function() {
    if (window.ethereum) {
        App.web3 = new Web3(window.ethereum); // use MetaMask's provider
        window.ethereum.enable(); // get permission to access accounts
    } else {
        console.warn("No MetaMaak's web3 provider detected. It will connect to http://127.0.0.1:8545. If you want to connect your RPC network, please check MataMask provider",);
        App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"),);  //use your local hosted blockchain node provider, ex: ganache-cli or esle.
    }

    App.start();
});

