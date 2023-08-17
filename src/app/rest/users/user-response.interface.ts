export interface UserResponse {
  email: string,
  gender: string,
  picture: {
    large: string
  },
  id: {
    value: string
  },
  name: {
    first: string,
    last: string,
    title: string
  },
  location: {
    city: string,
    country: string,
    coordinates: {
      latitude: string,
      longitude: string
    }
  }
}
