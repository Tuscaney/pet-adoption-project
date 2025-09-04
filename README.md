# Pet Adoption Project


A simple React app to manage a list of adoptable pets. MVP supports listing, adding, and toggling adoption status locally. A DynamoDB table is created for future persistence.


## Getting Started
```bash
npm install
npm run dev
Scripts

dev — start Vite dev server

build — production build

preview — preview production build

DynamoDB

Table: PetAdoptionPets

Region: <YOUR-REGION>

Keys: id (PK string)

Next Steps (optional)

Add backend (API Gateway + Lambda) to persist to DynamoDB

Replace local state with API calls

Add filtering and search EOF
