/**
 * Created by PC on 12.7.2017 г..
 */
let rgbToHexColor=require(`./p06_rgb-to-hex.js`).rgbToHexColor;
let expect=require("chai").expect;

describe("RGB to he color",()=>{
    it("should return #FF9EAA for (255, 158, 170)", ()=>{
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it("should return #0C0D0E for (12, 13, 14)", ()=>{
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });

        it("should return #000000 for (0, 0, 0)", ()=>{
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it("should return #FFFFFF for (255, 255, 255)", ()=>{
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it("should return undefined for negative values", ()=>{
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, -1, 0)).to.equal(undefined);
    });

    it("should return undefined for gerater than 255 values", ()=>{
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
    });

    it("should return undefined for fraction values", ()=>{
        expect(rgbToHexColor(3.14, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 3.14, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 3.14)).to.equal(undefined);
    });

    it("should return undefined for  values", ()=>{
        expect(rgbToHexColor("5", [3], {8:9})).to.equal(undefined);
    });

    it("should return undefined for  values", ()=>{
        expect(rgbToHexColor()).to.equal(undefined);
    });
});