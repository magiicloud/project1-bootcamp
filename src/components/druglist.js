export const DrugList = [
  {
    drugName: "paracetamol",
    minDoseMgPerKg: 10,
    maxDoseMgPerKg: 15,
    maxDailyDose: 4000,
    freq: "QDS",
    ageRange: [0],
    notes: "Avoid use under 3 months, neonatal pyrexia may warrant referral",
  },
  {
    drugName: "ibuprofen",
    minDoseMgPerKg: 5,
    maxDoseMgPerKg: 10,
    maxDailyDose: 1200,
    freq: "TDS",
    ageRange: [0],
    notes: "Test2",
  },
  {
    drugName: "chlorpheniramine",
    minDoseMgPerKg: [0.3, 0.3, 0.3],
    maxDoseMgPerKg: [0.3, 0.3, 0.3],
    maxDailyDose: [2, 2, 4],
    freq: ["TDS", "TDS", "TDS"],
    ageRange: [1, 2, 6],
    notes: "Test3",
  },
  {
    drugName: "cetirizine",
    minDoseMgPerKg: [0.5, 0.5, 0.5],
    maxDoseMgPerKg: [0.5, 0.5, 0.5],
    maxDailyDose: [2.5, 5, 10],
    freq: ["OD", "BD", "BD"],
    ageRange: [0.5, 1, 6],
    notes: "Test4",
  },
  {
    drugName: "amoxicillin",
    minDoseMgPerKg: [20, 25, 25],
    maxDoseMgPerKg: [30, 50, 90],
    maxDailyDose: [4000, 4000, 4000],
    freq: ["BD", "TDS", "TDS"],
    ageRange: [0, 1, 2],
    notes: "Test5",
  },
  {
    drugName: "prometazine",
    minDoseMgPerKg: 0.75,
    maxDoseMgPerKg: 1.5,
    maxDailyDose: 75,
    freq: "TDS",
    ageRange: [2],
    notes: "Test5",
  },
];
