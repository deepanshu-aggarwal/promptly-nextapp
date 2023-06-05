import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const posts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Can't fetch posts", { status: 500 });
  }
};
