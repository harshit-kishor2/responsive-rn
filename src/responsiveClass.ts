import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class ResponsiveClass {
    private dimension!: { height: number; width: number; };
    private widthBaseScale!: number;
    private heightBaseScale!: number;

    public initialize(dimension: { height: number; width: number }): void {
        this.dimension = dimension;
        this.widthBaseScale = SCREEN_WIDTH / this.dimension.width;
        this.heightBaseScale = SCREEN_HEIGHT / this.dimension.height;
    }

    private normalize(size: number, based = 'width'): number {
        const newSize = based === 'height' ? size * this.heightBaseScale : size * this.widthBaseScale;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }

    public rpWidth(size: number): number {
        return this.normalize(size, 'width');
    }

    public rpHeight(size: number): number {
        return this.normalize(size, 'height');
    }

    public rpFont(size: number): number {
        return this.normalize(size, 'height');
    }
    // Public method to expose the normalize function
    public normalizeSize(size: number, based: 'width' | 'height' = 'width'): number {
        return this.normalize(size, based);
    }
}

const rpInstance = new ResponsiveClass(); // Initial dimensions

const rpInitialize = (dimension: { height: number; width: number }) => rpInstance.initialize(dimension);
const rpFont = (size: number) => rpInstance.rpFont(size);
const rpWidth = (size: number) => rpInstance.rpWidth(size);
const rpHeight = (size: number) => rpInstance.rpHeight(size);
const rpNormalize = (size: number, based: 'width' | 'height' = 'width') => rpInstance.normalizeSize(size, based);

export { rpInstance, rpInitialize, rpFont, rpHeight, rpWidth, rpNormalize };
