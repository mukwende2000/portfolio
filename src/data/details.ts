interface Detail {
  property: string;
  value: string;
  textRight?: boolean;
}

const details: Detail[] = [
  {
    property: "First Name",
    value: "Mukwende",
    textRight: true,
  },
  {
    property: "Last Name",
    value: "Libimba",
  },
  {
    property: "Birthdate",
    value: "01 March 2000",
    textRight: true,
  },
  {
    property: "Nationality",
    value: "Zambia, Africa",
  },
  {
    property: "Languages",
    value: "English, Nyanja",
    textRight: true,
  },

  {
    property: "Freelance",
    value: "Available",
  },
  {
    property: "Email",
    value: "mukwende@gmail.com",
    textRight: true,
  },
  {
    property: "Github",
    value: "mukwende2000",
  },
  {
    property: "Phone",
    value: "+260 765 992534",
    textRight: true,
  },
];

export default details;
