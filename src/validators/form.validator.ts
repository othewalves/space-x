import { z } from 'zod';
export const formSchema = z.object({
    name: z.string().nonempty('Nome é obrigatório'),
    age: z.string()
        .nonempty('Idade é obrigatória')
        .max(2, 'Opção de idade inválida')
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 0, 'A idade não pode ser negativa')
        .refine((val) => val >= 18 && val <= 99, 'Você deve ser maior de 18 anos para embarcar nessa'),
    destiny: z.string().nonempty('Destino é obrigatório'),
    hasDisease: z.enum(['yes', 'no'], { message: 'Opção obrigatória' }),
    disease: z.string().optional()
})
    .refine((data) => {
        if (data.hasDisease === 'yes' && !data.disease) {
            return false;
        }
        return true
    }, {
        message: 'Descrição da doença é obrigatória',
        path: ['disease']
    })

export type FormSchema = z.infer<typeof formSchema>;
