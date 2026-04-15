const { absen } = require('../../app');

test("fitur lama tetap jalan", () => {
    expect(absen("andi.jpg")).toBe("Andi berhasil absen");
});