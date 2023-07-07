const mtk = 85;
const bahasaIndonesia = 80;
const bahasaInggris = 87;
const ipa = 88;

if (mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined) {
  console.log("Semua nilai harus diisi");
} else {
  const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
  const rataRata = totalNilai / 4;
  
  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  console.log("Rata-rata = " + rataRata);
  console.log("Grade = " + grade);
}
