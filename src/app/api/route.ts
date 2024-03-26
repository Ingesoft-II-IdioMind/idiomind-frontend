import { getAccounts } from "app/services/django";

export async function GET() {
  const accounts = await getAccounts();
  return Response.json({ accounts });
}