"use server"

import { deleteSchema } from "@/components/Deleteform";
import prisma from "@/lib/db";
import { z } from "zod";

export const Examprac1 = async (id: string) => {
    

    const DeleteStudent = await prisma.lorem.deleteMany({
        where: {
            id:id,
        },
    });

    console.log(Examprac1);
};