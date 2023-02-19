const btInspection = document.querySelector(".bt-inspection");
const bgInspectionH1 = document.getElementById("bginsh1");
const bgInspectionH2 = document.getElementById("bginsh2");
const bgInspectionP1 = document.getElementById("bginsp1");
const bgInspectionP2 = document.getElementById("bginsp2");

btInspection.addEventListener("mouseover", () => {
  bgInspectionH1.style.opacity = "0.1";
  bgInspectionH2.style.opacity = "0.1";
  bgInspectionP1.style.opacity = "0.1";
  bgInspectionP2.style.opacity = "0.1";
});

btInspection.addEventListener("mouseout", () => {
  bgInspectionH1.style.opacity = "0.5";
  bgInspectionH2.style.opacity = "0.5";
  bgInspectionP1.style.opacity = "0.5";
  bgInspectionP2.style.opacity = "0.5";
});
