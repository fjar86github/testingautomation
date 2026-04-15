const { absen } = require('../../app');

test("wajah dikenal", () => {
    expect(absen("andi.jpg")).toBe("Andi berhasil absen");
});

test("wajah tidak dikenal", () => {
    expect(absen("x.jpg")).toBe("Absen gagal");
});