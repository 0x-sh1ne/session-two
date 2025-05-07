import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SolidityConstructor", function () {
    async function deploy() {
        const [account1] = await ethers.getSigners(); //to create an account
        const functionExercise = await ethers.getContractFactory("functionExercise"); //kukunin yung contract
        const INITIAL_BALANCE = 5; //kase naglagay tayo kanina ng deposit sa constructor sa ContractTwo.sol
        const dpfunctionExercise = await functionExercise.deploy(INITIAL_BALANCE); //kukunin yung contract
        return { dpfunctionExercise, account1 }; //ibabalik yung contract at account1
    }

    describe("DEPLOYMENT TEST CASE", function () {
        it("01 GETTING BALANCE", async function () {
            const { dpfunctionExercise } = await loadFixture(deploy);
            expect(dpfunctionExercise).not.to.be.undefined;
            const balance = await dpfunctionExercise.getBalance(); // Assuming you have a getBalance function in your contract
            console.log("initial balance is now:", balance);
        });

        //LESSON 3
        // it("02 ADDING BALANCE", async function () {
        //     const { dpfunctionExercise } = await loadFixture(deploy);
        //     expect(dpfunctionExercise).not.to.be.undefined;
        //     await dpfunctionExercise.addBalance(50); // Assuming you have a getBalance function in your contract
        //     const balance = await dpfunctionExercise.getBalance();
        //     console.log("initial balance is now:", balance);
        // });

        it("02 CALCULATOR", async function () {
            const { dpfunctionExercise } = await loadFixture(deploy);
            expect(dpfunctionExercise).not.to.be.undefined;
            await dpfunctionExercise.calculator(1, 50); // Assuming you have a getBalance function in your contract
            let balance = await dpfunctionExercise.getBalance();
            console.log("balance is now:", balance);

            await dpfunctionExercise.calculator(2, 50); // Assuming you have a getBalance function in your contract
            balance = await dpfunctionExercise.getBalance();
            console.log("balance is now:", balance);

            await dpfunctionExercise.calculator(3, 50); // Assuming you have a getBalance function in your contract
            balance = await dpfunctionExercise.getBalance();
            console.log("balance is now:", balance);

            await dpfunctionExercise.calculator(4, 50); // Assuming you have a getBalance function in your contract
            balance = await dpfunctionExercise.getBalance();
            console.log("balance is now:", balance);
        });
    });

});