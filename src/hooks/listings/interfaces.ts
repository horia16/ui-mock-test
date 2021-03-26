export interface AnimalOwner {
  id: number;
  name: string;
  profileThumb: string;
}

export interface Animal {
  id: number;
  name: string;
  breed: string;
  age: number;
  thumbnail: string;
  photoSets: Array<String>;
  owner: AnimalOwner;
  gender: "male" | "female";
}

export interface Listing {
  id: number;
  description: string;
  createdAt: string;
  distance: number;
  color: string;
  animal: Animal;
}
