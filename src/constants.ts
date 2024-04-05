export const WC_PROJECT_ID: string =
  process.env.NEXT_PUBLIC_WC_PROJECT_ID || "";
if (!WC_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_WC_PROJECT_ID is required");
}
