import instruments from '../mocks/instruments.json'

export const instrumentsOptions = instruments;
type Instrument = typeof instrumentsOptions[number];