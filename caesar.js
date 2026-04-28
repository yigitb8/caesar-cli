function caesarSifrele(metin, kaydirma) {
  let sonuc = "";

  for (let i = 0; i < metin.length; i++) {
    let karakter = metin[i];

    if (/[a-zA-Z]/.test(karakter)) {
      let baslangic = karakter === karakter.toUpperCase() ? 65 : 97;

      let yeniKarakter = String.fromCharCode(
        ((karakter.charCodeAt(0) - baslangic + kaydirma) % 26 + 26) % 26 + baslangic
      );

      sonuc += yeniKarakter;
    } else {
      sonuc += karakter;
    }
  }

  return sonuc;
}

function caesarCoz(metin, kaydirma) {
  return caesarSifrele(metin, -kaydirma);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// konsolda bize seçenek sunacak menü oluşturdum
function menu() {
  console.log("\n--- Caesar Şifreleme ---");
  console.log("1 - Şifrele");
  console.log("2 - Çöz");
  console.log("3 - Çıkış");

  rl.question("Seçim: ", (secim) => {
    if (secim === "1") {            // menüdeki seçim 1 ise şifreleme yapacak
      rl.question("Metin: ", (metin) => {
        rl.question("Kaydırma: ", (k) => {  //kaydırma miktarını almak için
          console.log("Sonuç:", caesarSifrele(metin, parseInt(k))); //konsola şifrelenmiş halini yazar
          menu();
        });
      });
    } else if (secim === "2") {     // menüde 2 seçildiyse şifre çözecek
      rl.question("Metin: ", (metin) => {
        rl.question("Kaydırma: ", (k) => {    // kaydrıma miktarı girilir.
          console.log("Sonuç:", caesarCoz(metin, parseInt(k)));     // şifre çözüldü
          menu();
        });
      });           
    } else if (secim === "3") {       // seçenek 3 ise konsoldan çıkış için
      console.log("Çıkılıyor...");
      rl.close();
    } else {                // başka seçim yapılırsa uyarır
      console.log("Hatalı seçim!");
      menu();
    }
  });
}

menu();