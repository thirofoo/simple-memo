import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();
const cors = require('cors')

// rootDir : /users

router.get("/", async (req: Request, res:Response) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});


router.get("/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ user });
});


router.post("/", async (req: Request, res: Response) => {
  const { id, name, title, content, published } = req.body;
  const user = await prisma.user.create({
    data: {
      id : id,
      name : name,
      title : title,
      content : content,
      published : published,
    },
  });
  res.json({ user });
});


router.put("/:id", async (req: Request, res: Response) => {
  const { id, name, title, content, published } = req.body;
  const user = await prisma.user.update({
    where: { id: parseInt(req.params?.id) },
    data: { 
      id : id,
      name : name,
      title : title,
      content : content,
      published : published,
    },
  });
  res.json({ user });
});


router.delete("/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json({ user });
});


export default router