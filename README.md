# Weekend 2 - Group 4 Project
 
## Ballot Contract Homework

### Contract deployment

```console
srene@macpro project % yarn run ts-node --files ./scripts/Ballot.ts Chocolate Strawberry Vanilla Coconut
Connected to the blocknumber 3444495
Connected to the address 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
Balance is 45846436482818548 WEI
Deploying Ballot contract
Proposals: 
Proposal N. 1: Chocolate
Proposal N. 2: Strawberry
Proposal N. 3: Vanilla
Proposal N. 4: Coconut
The ballot contract was deployed at the address 0xf0345F5c553ac4b48600c60ac4deCFAa9e98e877 at the block number 3444496
```

[Etherscan transaction](https://sepolia.etherscan.io/tx/0x6c30da18e5480ab7ee7f6997106ac0118bd7cb93cb8100d3c213caa26c10f9c9)

### Voting rights

```console
srene@macpro project % yarn run ts-node --files ./scripts/BallotRightToVote.ts       
Connected to the blocknumber 3445212
Connected to the address 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
The ballot contract was deployed at the address 0xf0345F5c553ac4b48600c60ac4deCFAa9e98e877 at the block number 3444496
The chairperson for this ballot is 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
Giving voting rights to 0x1A433dB77813FA4257452B8aCd14d98C8BecB9Fb
Transaction completed at block 3444497 with hash 0x7c9684dcd01cf1e1d87010904790c28a313f90cc988937982f4a9bb20b97ae8d
```
[Etherscan transaction](https://sepolia.etherscan.io/tx/0x0e3a76edfff8c39ecc9f22ad67949d34cf8095bce522c83468b070ae22adb119)

### Vote cast

```console
srene@macpro project % yarn run ts-node --files ./scripts/BallotVote.ts       
Connected to the blocknumber 3445212
Connected to the address 0x1A433dB77813FA4257452B8aCd14d98C8BecB9Fb
Balance is 10000000000000000 WEI
The chairperson for this ballot is 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
Voting for proposal 1
Transaction completed at block 3445213 with hash 0x4d25611315488763e583f508c0577dc8951d52e0e78f88784f08193f347a2179
```

[Etherscan transaction](https://sepolia.etherscan.io/tx/0xe5f897c3bb11c5def0916f8b69d42c63700ebc082348dd1106c1da544c4f12d5)

### Vote delegation

```console
srene@macpro project % yarn run ts-node --files ./scripts/BallotDelegate.ts 
Connected to the blocknumber 3445282
Connected to the address 0x5EE85c2890c2201Ff9E28dEDB70f38aaCC775eB4
Balance is 10000000000000000 WEI
The chairperson for this ballot is 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
Giving voting rights to 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
Transaction completed at block 3445284 with hash 0x12820abf24d4c6864cc338afdec91cccd2654571ea825795810dc5df5aa93e23
```
[Etherscan transaction](https://sepolia.etherscan.io/tx/0x66c2eb18e4fb6ea7e92898b7b50b4d2662dd8bf5079602c537ccd08293ea469d)

### Votation result

```console
srene@macpro project % yarn run ts-node --files ./scripts/BallotResult.ts  
Connected to the blocknumber 3445296
Connected to the address 0x5EE85c2890c2201Ff9E28dEDB70f38aaCC775eB4
Balance is 9916350999553872 WEI
The chairperson for this ballot is 0xbC3a67EC1664d540C17Aeb8F6Bea5bA89AdB9e15
The winning proposal is Chocolate
```
