import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dunnydata = [
  {
    id: 1,
    playerName: "You",
    totalPoint: 0,
    multiplier: 0,
    playerScore: 0,
  },
  {
    id: 2,
    playerName: "CPU1",
    totalPoint: 0,
    multiplier: 0,
    playerScore: 0,
  },
  {
    id: 3,
    playerName: "CPU2",
    totalPoint: 0,
    multiplier: 0,
    playerScore: 0,
  },
  {
    id: 4,
    playerName: "CPU3",
    totalPoint: 0,
    multiplier: 0,
    playerScore: 0,
  },
  {
    id: 5,
    playerName: "CPU4",
    totalPoint: 0,
    multiplier: 0,
    playerScore: 0,
  },
];

export interface Player {
  id: number;
  playerName: string;
  multiplier: number;
  totalPoint: number;
  playerScore: number;
}

export interface GameState {
  userName: string;
  totalBalance: number;
  multiplier: number;
  points: number;
  speedLevel: number;
  rankingPlayers: Player[];
  freezValue: number;
  GameBegins: boolean;
}

const initialState: GameState = {
  userName: "",
  multiplier: 1.0,
  points: 50,
  totalBalance: 1000,
  freezValue: 0,
  speedLevel: 1,
  GameBegins: false,
  rankingPlayers: dunnydata,
};

const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setMultiplierValue: (state, action: PayloadAction<number>) => {
      state.multiplier = action.payload;
    },
    setUpdateBalanceValue: (state, action: PayloadAction<number>) => {
      state.totalBalance = action.payload;
    },
    setSpeedLevel: (state, action: PayloadAction<number>) => {
      state.speedLevel = action.payload;
    },
    setUsersRanking: (state, action: PayloadAction<Player[]>) => {
      state.rankingPlayers = action.payload;
    },
    setStatusGame: (state, action: PayloadAction<boolean>) => {
      state.GameBegins = action.payload;
    },
    setPointsValue: (state, action: PayloadAction<number>) => {
      state.points = action.payload;
    },
    setfreezValue: (state, action: PayloadAction<number>) => {
      state.freezValue = action.payload;
    },
  },
});

export const {
  setUserName,
  setMultiplierValue,
  setUpdateBalanceValue,
  setSpeedLevel,
  setStatusGame,
  setUsersRanking,
  setPointsValue,
  setfreezValue,
} = GameSlice.actions;

export default GameSlice.reducer;
