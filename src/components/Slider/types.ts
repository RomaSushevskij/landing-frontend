export type SliderImageType = { index: '1' | '2' | '3'; image: string };

export type SliderProps = {
  images: SliderImageType[];
  firstImageStyle?: string;
  secondImageStyle?: string;
  thirdImageStyle?: string;
};
