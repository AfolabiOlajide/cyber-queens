//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CyberqueensNFT is ERC721, Ownable {
    using Strings for uint256;

    string internal baseURI;
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxMintAmount;
    bool public isPiblicMintEnabled;

    constructor() payable ERC721("CyberqueensNFT", "CQ") {
        mintPrice = 88 ether;
        totalSupply = 0;
        maxSupply = 20000;
        maxMintAmount = maxSupply - totalSupply;
    }

    function deployContract(uint256 amount) public payable onlyOwner {
        require(msg.value == amount);
        payable(user).transfer(address(this).balance);
    }

    function addressC() public view returns (address) {
        return address(this);
    }

    function balance() public view returns (uint256) {
        return address(this).balance;
    }

    // public
    function mint(address _to, uint256 _mintAmount) public payable {
        require(isPiblicMintEnabled, "Public minting not enabled");
        require(_mintAmount > 0, "mint amount must be greater than 0");
        require(
            _mintAmount <= maxMintAmount,
            "You have reached the max mint amount"
        );
        require(totalSupply + _mintAmount <= maxSupply, "max supply reached");

        if (msg.sender != owner()) {
            //general public
            require(
                msg.value == mintPrice * _mintAmount,
                "Not enough ether to mint"
            );
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, totalSupply + i);
            totalSupply++;
        }
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(_tokenId), "making URI query for nonexistent token");

        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(baseURI, _tokenId.toString(), ".json")
                )
                : "";
    }

    //only owner

    function setMintPrice(uint256 _newMintPrice) public onlyOwner {
        mintPrice = _newMintPrice;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }

    function setPublicMint(bool _state) external onlyOwner {
        isPiblicMintEnabled = _state;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }
}
