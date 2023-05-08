import { ethers } from "hardhat";
import { Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();
const ADDRESS = "0x1A433dB77813FA4257452B8aCd14d98C8BecB9Fb"

async function main() {

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");
  console.log(`Connected to the address ${wallet.address}`);

  //const provider = new ethers.providers.AlchemyProvider("goerli",process.env.ALCHEMY_API_KEY);
  const provider = new ethers.providers.InfuraProvider(
    "sepolia",
    process.env.INFURA_API_KEY
  );
  const lastBlock = await  provider?.getBlock("latest");
  console.log(`Connected to the blocknumber ${lastBlock?.number}`)

  const signer = wallet.connect(provider);
  console.log(`Connected to the address ${signer.address}`);

  const price = await provider.getGasPrice();

  const balance = await signer.getBalance();
  console.log(`Balance is ${balance} WEI`)

  //Get contract factory object
  const ballotContractFactory = new Ballot__factory(signer);
  //We get the  deployed contract
  const ballotContract =  ballotContractFactory.attach("0xf0345F5c553ac4b48600c60ac4deCFAa9e98e877");
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