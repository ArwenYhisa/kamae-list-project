import React, {useEffect, useState} from 'react';
import './TrainingTable.css';
import {sortData, TrainingData, TrainingDataStatus} from "../../helpers/trainingDataHelpers";
import {TrainingRow} from "./TrainingRow/TrainingRow";

export const TrainingTable = () => {

  const [trainingData, setTrainingData] = useState<TrainingData[]>([]);

  const setSortedTrainingData = (trainingData: TrainingData[]) => {
    setTrainingData(sortData(trainingData))
  }
  const onTrainingLaunched = (index: number) => {
    const trainingDataModified = [...trainingData]
    const trainingIssue = ["Victoire", "Défaite"][Math.round(Math.random())] as TrainingDataStatus
    trainingDataModified[index].status = trainingIssue
    setSortedTrainingData(trainingDataModified)
    alert(trainingIssue === TrainingDataStatus.Victoire ? "Victoire !" : "Vous n'avez pas réussi...")
  }
  const onSeeResultClicked = (index: number) => {
    alert(`Vous êtes ressortit victorieux de l'entrainement "${trainingData[index].title}" !`)
  }

  useEffect(() => {
    setSortedTrainingData(require('../../data.json'))
  }, [])

  return (
    <table className={"training-list"}>
      <thead>
      <tr>
        <th>Titre</th>
        <th>Catégorie</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {
        trainingData.map((training: TrainingData, index: number) =>
          <TrainingRow
            trainingData={training}
            index={index}
            onTrainingLaunched={onTrainingLaunched}
            onSeeResultClicked={onSeeResultClicked}
          />
          )
      }
      </tbody>
    </table>
  )
}
