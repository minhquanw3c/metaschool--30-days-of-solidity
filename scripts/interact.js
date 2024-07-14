const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

async function main() {
	const HelloWorldFactory = await ethers.getContractFactory("HelloWorld");
	HelloWorldContract = await HelloWorldFactory.attach(CONTRACT_ADDRESS);

	const message = await HelloWorldContract.message();
	console.log("the message is " + message);

	const tx = await HelloWorldContract.update("Good Bye, World!");
	await tx.wait();

	const newMessage = await HelloWorldContract.message();
	console.log("the new message is " + newMessage);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
