import React from "react";
import { DrugList } from "../druglist";
import GridTable from "./gridtable";

const determineMinDose = (weightInput, minDosePerKg, maxDailyDose, freq) => {
  const minDosePerDay =
    weightInput * minDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * minDosePerKg;
  const minDose = divideDoseByFreq(freq, minDosePerDay);
  return minDose;
};

const determineMaxDose = (weightInput, maxDosePerKg, maxDailyDose, freq) => {
  const maxDosePerDay =
    weightInput * maxDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * maxDosePerKg;
  const maxDose = divideDoseByFreq(freq, maxDosePerDay);
  return maxDose;
};

const divideDoseByFreq = (freq, dose) => {
  let dividedDose = 0;
  if (freq === "BD") {
    dividedDose = (dose / 2).toFixed(2);
  } else if (freq === "TDS") {
    dividedDose = (dose / 3).toFixed(2);
  } else if (freq === "QDS") {
    dividedDose = (dose / 4).toFixed(2);
  }
  return dividedDose;
};

export const DoseCalculator = ({ selectedDrug, weightInput, ageInput }) => {
  const dose = [];
  let minDose = 0;
  let maxDose = 0;
  let freq = "";

  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]); //find drug in master drug list
    minDose = 0;
    maxDose = 0;
    freq = "";
    //if there are no age variations, no need to loop
    if (drug.ageRange.length !== 1) {
      for (let j = 0; j < drug.ageRange.length; j += 1) {
        if (ageInput >= drug.ageRange[j]) {
          freq = drug.freq[j];
          minDose = determineMinDose(
            weightInput,
            drug.minDoseMgPerKg[j],
            drug.maxDailyDose[j],
            freq
          );
          maxDose = determineMaxDose(
            weightInput,
            drug.maxDoseMgPerKg[j],
            drug.maxDailyDose[j],
            freq
          );
        }
      }
    } else {
      freq = drug.freq;
      minDose = determineMinDose(
        weightInput,
        drug.minDoseMgPerKg,
        drug.maxDailyDose,
        freq
      );
      maxDose = determineMaxDose(
        weightInput,
        drug.maxDoseMgPerKg,
        drug.maxDailyDose,
        freq
      );
    }

    const duplicateDrug = dose.find((drug) => drug.drug === selectedDrug[i]);
    !duplicateDrug &&
      dose.push({
        drug: selectedDrug[i],
        minDose: minDose,
        maxDose: maxDose,
        freq: freq,
        notes: drug.notes,
      });
    console.log(dose);
  }

  return (
    <>
      <GridTable dose={dose} />
    </>
  );
};
