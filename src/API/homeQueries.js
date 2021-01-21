import { gql } from '@apollo/client';

export const GET_HOMEPAGEDATA = gql`
  query homepage{
  homeKpis{
    id
    name
    avg
    data
    change
    type
  }
  notifications{
    id
    street
    type
    location { lat, lon }
    createdAt
  }
  me{
    id
    name
    photo
    email
  }
}
`;