import { PrismaClient } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const prisma = new PrismaClient({ log: ['query'] })
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
