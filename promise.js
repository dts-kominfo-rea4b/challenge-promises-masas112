const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const pengecekan = (film, emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == 'marah' || emosi == 'tidak marah') {
      let jumlah = 0;
      let i = 0;
      while (film[i]) {
        if (film[i].hasil == 'marah' && emosi == 'marah') {
          jumlah++;
        } else if (film[i].hasil == 'tidak marah' && emosi == 'tidak marah') {
          jumlah++;
        }
        i++;
      }
      resolve(jumlah);
    } else {

    }
  })

}
const promiseOutput = async (x) => {
  const A = await promiseTheaterIXX();
  const B = await promiseTheaterVGC();
  const C = await pengecekan(A, x);
  const D = await pengecekan(B, x);
  let e = C + D;
  return new Promise((resolve, reject) => {
    if (e != undefined || e != "") {
      resolve(e);
    } else {
      reject('error');
    }
  })
};

module.exports = {
  promiseOutput,
};
