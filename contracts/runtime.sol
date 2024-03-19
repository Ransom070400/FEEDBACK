// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract runtime {
    uint256 totalRuns;

    event NewRun(address indexed from, uint256 timestamp, string message);

    struct Run {
        address runner; // The address of the user who ran.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user ran.
    }

    Run[] runs;

    constructor() {
        console.log("na smart contract i be");
    }

    function run(string memory _message) public {
        totalRuns += 1;
        console.log("%s ran w/ message %s", msg.sender, _message);

        runs.push(Run(msg.sender, _message, block.timestamp));

        emit NewRun(msg.sender, block.timestamp, _message);
    }

    function getAllRuns() public view returns (Run[] memory) {
        return runs;
    }

    function getTotalRuns() public view returns (uint256) {
        console.log("We have %d total runs!", totalRuns);
        return totalRuns;
    }
}
