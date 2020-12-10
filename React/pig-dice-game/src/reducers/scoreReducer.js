export const initialState = {
    playerScore: [0, 0],
    currentPlayer: 0,
    diceScore: 0,
    roundScore: 0
}

//! function ที่ทำไรบางอยางกับ state โดย action จะเป็นตัวบอกว่าจะทำอะไร
export default (state, action) => {
    switch (action.type) {
        case "ROLL":
            const { newDiceScore } = action.payload;
            if (newDiceScore === 1) {
                return {
                    ...state,
                    roundScore: 0,
                    diceScore: newDiceScore,
                    currentPlayer: state.currentPlayer === 1 ? 0 : 1,
                };
            }
            return {
                ...state,
                diceScore: newDiceScore,
                roundScore: state.roundScore + newDiceScore
            };
        case "KEEP":
            return {
                ...state,
                roundScore: 0,
                diceScore: 0,
                currentPlayer: state.currentPlayer === 1 ? 0 : 1,
                playerScore: state.playerScore.map((score, idx) => (
                    idx === state.currentPlayer ? score + state.roundScore : score
                ))
            }
        case "RESET":
            return initialState

        default: return state;
    }
}