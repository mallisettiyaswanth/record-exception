import * as z from "zod"


const permissionSchema = z.object({
    title: z.string(),
    letter: z.string(),
    reason: z.string(),
    type: z.enum(["leave", "attendance"]),
      holder: z.enum(["individual", "group"]),
    students: z.array(z.object({
        name: z.string(),
        reg_no: z.string(),
        attendance_percentage: z.string().optional(),
        date_range: z.tuple([z.date(), z.date()]).optional()
    })),
    from_date: z.date(),
    to_date: z.date(),
    attachments: z.any().optional(),
    section: z.string(),
    department: z.string(),
    contact: z.object({
        phone: z.string(),
        email: z.string().email()
    }),
    class_representative_contact: z.string(),
    faculty: z.object({
        name: z.string().optional(),
        email: z.string().email()
    }).optional()

}) 


const addPermission = async (values: z.infer<typeof permissionSchema>) => {
    const parsedValues = permissionSchema.safeParse(values)

    if (!parsedValues.success) {
        console.log(parsedValues.error)
        return
    }

    



    try {

    } catch (error) {
        console.log(error)
    }

}


export default addPermission