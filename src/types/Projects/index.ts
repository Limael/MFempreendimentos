export type Project = {
  image: string;
  title: string;
  location: string;
  deliveryDate?: string;
  description: string | JSX.Element;
  builtArea?: string;
  numberOfRooms?: string;
  numberOfBathrooms?: string;
  value?: string;
  category?: string;
  images: {
    [key: string]: {
      default: string;
    };
  };
};
