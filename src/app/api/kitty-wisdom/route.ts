import { NextResponse } from 'next/server';
import {kittyWisdom} from "@/lib/kitty-wisdom";

export async function GET() {
  const wisdoms = kittyWisdom as string[];
  const random = wisdoms[Math.floor(Math.random() * wisdoms.length)];
  return NextResponse.json({ wisdom: random });
} 