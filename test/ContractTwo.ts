import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SolidityConstructor", function () {
    async function deploy() {
        const [account1] = await ethers.getSigners(); //to create an account
        const SolidityConstructor = await ethers.getContractFactory("ContractTwo"); //kukunin yung contract
        const INITIAL_BALANCE = 500_000; //kase naglagay tayo kanina ng deposit sa constructor sa ContractTwo.sol
        const ctcSolidityConstructor = await SolidityConstructor.deploy(INITIAL_BALANCE); //kukunin yung contract
        return { ctcSolidityConstructor, account1 }; //ibabalik yung contract at account1
    }

    describe("DEPLOYMENT TEST CASE", function () {
        it("CONSTRUCTOR EXECUTED (first execution)", async function () {
            const { ctcSolidityConstructor } = await loadFixture(deploy);
            expect(ctcSolidityConstructor).not.to.be.undefined;
        });
    });

    describe("duplicate deployment", function () {
        it("CONSTRUCTOR EXECUTED", async function () {
            const { ctcSolidityConstructor } = await loadFixture(deploy);
            console.log("second deployment");
            expect(ctcSolidityConstructor).not.to.be.undefined;
        });
    });

});

