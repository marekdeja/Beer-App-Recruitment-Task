export const SAVE_BEERS = 'SAVE_BEERS'

export const saveBeers = (beers: object) => ({
    type: SAVE_BEERS,
    beers
  });