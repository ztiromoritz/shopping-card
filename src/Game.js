

export const ShoppingCard = {
    setup: () => ({ 
        deck: ["h1","h2", "h3", "h10", "hjack", "hqueen", "hking"],
        hand: ["c1"],
        stacks : [
            {open: ["d4"], close: []},
            {open: ["squeen"], close: ["sjack"]},
            {open: ["hking"], close: ["hqueen", "hking"]},
            {open: ["s7"], close: ["hking", "h4", "h7"]},
            {open: ["h9"], close: ["h9", "h5", "h6", "h5", "h6",]},
            {open: ["c5"], close:  ["h9", "h5", "h6", "h5", "h6", "hking"]},
            {open: ["s10"], close:  ["h9", "h5", "h6", "h9", "h5", "h6", "h9"]},
        ],
        slots : {
            hearts: ["h1"],
            clubs: [],
            spades: ["s2","s1"],
            diamonds: []
        }
    }),
  
    moves: {
      clickCell: (G, ctx, id) => {
        G.cells[id] = ctx.currentPlayer;
      },
    },
  };