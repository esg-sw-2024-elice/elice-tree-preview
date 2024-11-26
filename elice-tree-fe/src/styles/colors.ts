const PALETTE = {
  MAIN_BLACK: '#1A1A1A',
  MAIN_BLUE: '#2D9CDB',
  MAIN_GREEN: '#3F7541',
  MAIN_PURPLE: '#8D44F2',
  LIGHT_BLACK: '#BABABA',
  LIGHT_GREEN: '#DFECE0',
  // LIGHT_RED: '#FFE8E4',
  GRAY: '#E0E0E0',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
} as const;

type PaletteType = typeof PALETTE;
type ValueOfPalette<PaletteType> = PaletteType[keyof PaletteType];

export { PALETTE, type PaletteType, type ValueOfPalette };
