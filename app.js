const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

let button = document.querySelector("imc-math");
function culculatingImc() {
  let heightInput = Number.parseFloat(
    document.getElementById("imgheight").value
  );
  let weightInput = Number.parseFloat(
    document.getElementById("imgweight").value
  );

  if (isNaN(heightInput && weightInput)) {
    alert("Veuillez remplir les champs indiqué");
  } else {
    let imc = (weightInput * 10000) / (heightInput * heightInput);
    let imcTwoNumber = imc.toFixed(2);
    console.log(imcTwoNumber);
    document.getElementById("resultsinbig").innerHTML = imcTwoNumber;
    for (let i = 0; i < BMIData.length; i++) {
      const currentRange = BMIData[i].range;
      const currentName = BMIData[i].name;
      const currentColor = BMIData[i].color;
      if (imcTwoNumber >= currentRange[0] && imcTwoNumber < currentRange[1]) {
        let stateHealth = document.getElementById("state-element");
        console.log(
          `La valeur ${imcTwoNumber} est dans la catégorie "${currentName}"`
        );
        stateHealth.innerHTML = `${currentName}`;
        imcTwoNumber.style.color = currentColor;
      } else if (i === BMIData.length - 1 && imcTwoNumber >= currentRange[1]) {
        console.log("test");
        // `La valeur ${imcTwoNumber} est dans la catégorie "${currentName}"`
        stateHealth.innerHTML = `${currentName}`;
        imcTwoNumber.style.color = `${currentColor}`;
      }
    }
  }
}
document.getElementById("buttonIMC").addEventListener("click", culculatingImc);

// let imc=(weight*10000)/(height*height)
// alert(imc)
