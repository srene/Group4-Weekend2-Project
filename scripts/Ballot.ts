
import { ethers } from "hardhat";
import { Ballot__factory } from "../typechain-types";
const ADDRESS = "0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15"
//const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

async function main() {

  //const wallet = new ethers.Wallet(process.env.);
  console.log(`Connected to the address ${wallet.address}`);
  const provider = ethers.getDefaultProvider("goerli");
  const lastBlock = await  provider?.getBlock("latest");
  console.log(`Connected to the blocknumber ${lastBlock?.number}`)

  const signer = wallet.connect(provider);
  console.log(`Connected to the address ${signer.address}`);

  const balance = await signer.getBalance();
  console.log(`Balance is ${balance} WEI`)
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  const proposals = process.argv.slice(2);
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);

  });
  // TODO
  //Get contract factory object
  const ballotContractFactory = new Ballot__factory(signer);
  //We send deploy contract transaction
  const ballotContract = await ballotContractFactory.deploy(proposals.map(ethers.utils.formatBytes32String))
  //We wait till the contract is deployed on chain
  const deployTxReceipt = await ballotContract.deployTransaction.wait();
  //console.log({deployTxReceipt});
  console.log(`The ballot contract was deployed at the address ${ballotContract.address} at the block number ${deployTxReceipt.blockNumber}`)
  const chairperson = await  ballotContract.chairperson();
  console.log(`The chairperson for this ballot is ${chairperson}`)
  console.log(`Giving voting rights to ${ADDRESS}`)
  const giveRightToVoteTx = await ballotContract.giveRightToVote(ADDRESS);
  const giveRightToVoteTxReceipt = await giveRightToVoteTx.wait();
  console.log(`Transaction completed at block ${giveRightToVoteTxReceipt.blockNumber} with hash ${giveRightToVoteTxReceipt.blockHash}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});