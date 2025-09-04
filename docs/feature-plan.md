# Feature Plan
## Core Features (MVP)
- View a list of pets (name, age, status)
- Add a new pet
- Mark pet as adopted / available


## Nice-to-Haves (later)
- Filter by status (available/adopted)
- Edit pet details
- Search by name


## Data Model (DynamoDB)
- id (PK, string, e.g. uuid)
- name (string)
- age (number)
- status (string: "available" | "adopted")
