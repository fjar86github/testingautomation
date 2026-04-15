const { recognizeFace } = require('./faceService');

function absen(image) {
    const result = recognizeFace(image);

    if (result.success) {
        return `${result.name} berhasil absen`;
    }
    return "Absen gagal";
}

module.exports = { absen };