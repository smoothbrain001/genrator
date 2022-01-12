const layersOrder = [
    { name: 'background', number: 10 },
    { name: 'outline', number: 1 },
    { name: 'face', number: 10 },
    { name: 'eyes', number: 11 },
    { name: 'mouth', number: 10 },
    { name: 'clothes', number: 10 },
    { name: 'headwear', number: 11 },
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 15;

module.exports = { layersOrder, format, rarity, defaultEdition };