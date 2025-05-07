import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SolidityDataTypes", function () {
    async function deploy() {
        const [account1] = await ethers.getSigners();
        const SolidityDataTypes = await ethers.getContractFactory("ContractOne");
        const ctcSolidityDataTypes = await SolidityDataTypes.deploy();
        return { ctcSolidityDataTypes, account1 };
    }

    describe("DEPLOYMENT SUCCESS", function () {
        it("YEHEY SUCCESS", async function () {
            const { ctcSolidityDataTypes } = await loadFixture(deploy);
            expect(ctcSolidityDataTypes).not.to.be.undefined;
        });
    });
});


