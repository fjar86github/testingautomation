const knownFaces = {
    "andi.jpg": "Andi",
    "budi.jpg": "Budi"
};

function recognizeFace(image) {
    if (knownFaces[image]) {
        return { success: true, name: knownFaces[image] };
    }
    return { success: false };
}

module.exports = { recognizeFace };