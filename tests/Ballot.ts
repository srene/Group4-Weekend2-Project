import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";
import { expect } from "chai";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

function convertStringArrayToBytes32(array: string[]) {
    const bytes32Array = [];
    for (let index = 0; index < array.length; index++) {
      bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
    }
    return bytes32Array;
  }

describe("Ballot", function () {
    let ballotContract: Ballot;
    beforeEach(async function () {
        const ballotContractFactory = await ethers.getContractFactory("Ballot");
        const prop0 = ethers.utils.formatBytes32String(PROPOSALS[0]);
        const prop1 = ethers.utils.formatBytes32String(PROPOSALS[1]);
        const prop2 = ethers.utils.formatBytes32String(PROPOSALS[2]);
        ballotContract = await ballotContractFactory.deploy([prop0,prop1,prop2]);
        await ballotContract.deployed();
    });

    describe("when the contract is deployed", function(){
        it("has the provided proposals", async function(){
            for (let index = 0; index < PROPOSALS.length; index++) {
                const proposal = await ballotContract.proposals(index);
                expect(ethers.utils.parseBytes32String(proposal.name)).to.eq(
                  PROPOSALS[index]
                );
              }
        })

        it("has zero votes for all proposals", async function(){
            const proposal = await ballotContract.proposals(0);
            expect(proposal.voteCount).to.eq(0);
        });

        it("sets the depolyes address as chairperson", async function (){
            const signers = await ethers.getSigners();
            const deployer = signers[0].address;
            const chairperson = await ballotContract.chairperson();
            expect(chairperson).to.eq(deployer);
        });

        it("sets the voting weight for the chairperson as 1", async function(){
            const signers = await ethers.getSigners();
            const chairpersonVoter  = await ballotContract.voters(signers[0].address);
            //console.log(exampleVoter)
            expect(chairpersonVoter.weight).to.eq(1);
        });
    });

});