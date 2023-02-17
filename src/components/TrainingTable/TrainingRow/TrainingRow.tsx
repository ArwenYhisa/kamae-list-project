import React from 'react';
import {TrainingData, TrainingDataStatus} from "../../../helpers/trainingDataHelpers";
import {Button} from "../../Button/Button";

type TrainingRowPropsType = {
  trainingData: TrainingData
  index: number
  onTrainingLaunched: (index: number) => void
  onSeeResultClicked: (index: number) => void
}

export const TrainingRow = (props: TrainingRowPropsType) => {
  const { trainingData, index, onTrainingLaunched, onSeeResultClicked } = props
  return (
    <tr key={index}>
      <td>{trainingData.title}</td>
      <td>{trainingData.category}</td>
      <td>{trainingData.status}</td>
      <td className={"action-container"}>
        {
          trainingData.status !== TrainingDataStatus.Victoire ? (
            <Button
              type={"orange-button"}
              text={"Go !"}
              action={() => onTrainingLaunched(index)}
            />
          ) : (
            <Button
              type={"purple-button"}
              text={"See result"}
              action={() => onSeeResultClicked(index)}
            />
          )
        }
      </td>
    </tr>
  )
}
