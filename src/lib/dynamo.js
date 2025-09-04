import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const ddb = DynamoDBDocumentClient.from(client);
const TableName = import.meta.env.VITE_DDB_TABLE;

// READ
export async function listPets() {
  const cmd = new ScanCommand({ TableName });
  const res = await ddb.send(cmd);
  return res.Items || [];
}

// CREATE
export async function addPet(pet) {
  const cmd = new PutCommand({ TableName, Item: pet });
  await ddb.send(cmd);
}

// UPDATE
export async function updatePetStatus(id, status) {
  const cmd = new UpdateCommand({
    TableName,
    Key: { id },
    UpdateExpression: "set #s = :s",
    ExpressionAttributeNames: { "#s": "status" },
    ExpressionAttributeValues: { ":s": status },
    ReturnValues: "ALL_NEW",
  });
  const res = await ddb.send(cmd);
  return res.Attributes;
}

// DELETE
export async function deletePet(id) {
  const cmd = new DeleteCommand({ TableName, Key: { id } });
  await ddb.send(cmd);
}

