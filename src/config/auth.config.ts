import { getSession } from "next-auth/react";

export const axiosAuthHeader = async (req: any) => {
  const session = await getSession({ req });
  //@ts-ignore
  if (session) {
    return {
      //@ts-ignore
      headers: { Authorization: `Bearer ${session?.user?.token}` },
    };
  } else {
    return {
      headers: { Authorization: `Bearer ` },
    };
  }
};