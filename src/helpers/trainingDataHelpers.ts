export enum TrainingDataStatus {
  "A commencer" = "À commencer",
  "Defaite" = "Défaite",
  "Victoire" = "Victoire"
}

export type TrainingData = {
  title: string
  category: string
  status: TrainingDataStatus
}

const trainingStatusOrder = Object.values(TrainingDataStatus)

export const sortData = (data: TrainingData[]) => {
  return data.sort((a: TrainingData, b: TrainingData) =>
    trainingStatusOrder.indexOf(a.status) - trainingStatusOrder.indexOf(b.status)
  )
}
