export type Project = {
  image: string;
  title: string;
  location: string;
  deliveryDate?: string;
  description: string;
  builtArea?: string;
  numberOfRooms?: string;
  numberOfBathrooms?: string;
  value?: string;
  images: {
    [key: string]: {
      default: string;
    };
  };
};
