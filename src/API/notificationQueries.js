import { gql } from '@apollo/client';

export const NOTIF_BYID = gql`
  query notifbyid ($id: Int!){
    notification (id:$id) {
    id
    type
    location { lat, lon }
    kpis {
      id
      name
      data
      avg
      type
    }
    measurement {
      name
      date
      value
    }
    pictures
    createdAt
  }
}
`;

export const GET_NOTIFICATIONSDATA = gql`
  query allnotifications {
    notifications {
    id
    type
    createdAt
    measurement {
      name
      date
      value
    }
    kpis {
      id
      name
      data
      avg
      type
    }
  }
}
`;