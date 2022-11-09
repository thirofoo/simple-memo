import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// rootDir : /users
router.get("/", async (req: Request, res:Response) => {
  const origin = req.headers.origin;
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS');
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

export default router