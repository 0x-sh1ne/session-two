// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract publicNotepad {
    struct Note {
        address author;
        string content;
        uint256 timestamp;
    }

    Note[] public notes; // dynamic array to store notes

    event NoteAdded(address indexed author, string content, uint256 timestamp);

    //walang constructor kase wala tayong gustong i-initialize sa contract

    function addNote(string memory _content) public {
        notes.push(
            Note({ //gumamit tayo ng push para i-add ang bagong note sa array
                author: msg.sender,
                content: _content,
                timestamp: block.timestamp
             })
        );
        //bawal input zero or null pag ni push
        require(bytes(_content).length > 0, "Note content cannot be empty");
        //emit event after adding a note
        emit NoteAdded(msg.sender, _content, block.timestamp);
    }

    function getAllNotes() public view returns (Note[] memory) {
        return notes; //return all notes
    }
}



