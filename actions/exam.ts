"use server";

import { formSchema } from "@/components/Createform";
import { deleteSchema } from "@/components/Deleteform";
import prisma from "@/lib/db";
import { z } from "zod";

export const Examprac = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const CreateStudent = await prisma.lorem.create({
        data: {
            name: values.name,
            isCompleted: false, // or any default value as required
        },
    });

    console.log(Examprac);
};

export const Examprac1 = async (values: z.infer<typeof deleteSchema>) => {
    console.log(values);

    const DeleteStudent = await prisma.lorem.deleteMany({
        where: {
            id: values.id,
        },
    });

    console.log(Examprac1);
};

