import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

export async function GET() {
    return NextResponse.json({ ok: process.env.OPENAI_API_KEY });
  }