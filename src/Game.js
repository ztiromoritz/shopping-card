const ALL_CARDS = [
    "hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
    "cA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK",
    "sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK",
    "dA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK",
];

const STACK_COUNT = 7;


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


function deal() {
    const state = {
        deck: [],
        hand: [],
        stacks: [],
        slots: {
            hearts: [],
            clubs: [],
            spades: [],
            diamonds: []
        }
    }

    const cards = [...ALL_CARDS];
    shuffle(cards);
    for (let n = 0; n < STACK_COUNT; n++) {
        const stack = { open: [], close: [] };
        stack.open.push(cards.pop());
        let m = n;
        while (m--) {
            stack.close.push(cards.pop());
        }
        state.stacks.push(stack);
    }
    state.deck = [...cards];
    return state;
}


export const ShoppingCard = {
    setup: () => {
        return deal();
    },

    moves: {
        clickDeck: (G, ctx, id) => {
            if (G.deck.length + G.hand.length === 0) {
                return INVALID_MOVE;
            }else if(G.deck.length === 0){
                while(G.hand.length){
                    G.deck.push(G.hand.pop());
                }
            }else{
                G.hand.push(G.deck.pop());
            }
        }
    },
};