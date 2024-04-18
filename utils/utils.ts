import { Player } from "@/redux/features/user/GameSlice";

export function generateGuessValue(min: number, max: number): number {
  const step = 0.25;
  const numSteps = Math.floor((max - min + 1) / step);
  const randomStep = Math.floor(Math.random() * numSteps);
  const result = min + randomStep * step;

  return result;
}

export function getRandomPoints(): number {
  const minPoints = 50;
  const maxPoints = 1000;
  const randomNumber =
    Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;
  return Math.ceil(randomNumber / 25) * 25;
}

export function PlayersGenerator(
  points: number,
  multiplier: number,
  freezValue: number
): Player[] {
  const autoPlayers: Player[] = [];

  let mainPlayerScore = 0;
  if (Math.round(multiplier) === Math.round(freezValue)) {
    mainPlayerScore = points * multiplier;
  } else {
    mainPlayerScore = -1 * points;
  }

  const mainPlayer: Player = {
    id: 0,
    playerName: "You",
    totalPoint: points,
    multiplier: multiplier,
    playerScore: mainPlayerScore,
  };

  autoPlayers.push(mainPlayer);

  // Generate data for the CPUs players
  for (let i = 1; i <= 4; i++) {
    const aiPoints = getRandomPoints();
    const aiMultiplier = +generateGuessValue(1, 10).toFixed(1);

    let scoreAi = 0;
    if (Math.round(aiMultiplier) === Math.round(freezValue)) {
      scoreAi = aiPoints * aiMultiplier;
    } else {
      scoreAi = -1 * aiPoints;
    }

    const aiData: Player = {
      id: i,
      playerName: `CPU ${i}`,
      totalPoint: aiPoints,
      multiplier: aiMultiplier,
      playerScore: scoreAi,
    };
    autoPlayers.push(aiData);
  }

  return autoPlayers;
}
