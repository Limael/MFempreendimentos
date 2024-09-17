export type HouseProject = {
  images: {
    [key: string]: {
      default: string;
    };
  };
  title: string;
  location: string;
  deliveryDate: string;
  description: string | JSX.Element;
  builtArea?: string;
  numberOfRooms?: string;
  numberOfBathrooms?: string;
  value?: string;
};
