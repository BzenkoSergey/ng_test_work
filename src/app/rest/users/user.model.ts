export class UserModel {
  id: string;
  email: string;
  gender: string;
  name: string;
  picture: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;

  constructor(d: UserModel) {
    this.id = d.id;
    this.email = d.email;
    this.gender = d.gender;
    this.name = d.name;
    this.picture = d.picture;
    this.city = d.city;
    this.country = d.country;
    this.latitude = d.latitude;
    this.longitude = d.longitude;
  }
}
