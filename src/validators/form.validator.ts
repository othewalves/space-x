import { z } from 'zod';
import { isBefore, subYears } from 'date-fns';

export const formSchema = z.object({
    name: z
        .string()
        .nonempty('Nome é obrigatório')
        .refine((value) => value.includes(' '), { message: 'Obrigatório o nome completo' }),
    birthDate: z
        .coerce
        .date({
            invalid_type_error: 'Data de nascimento obrigatória',
            required_error: 'Data de nascimento é obrigatória',
        })
        .min(new Date('1900-01-01'), { message: 'Data de nascimento inválida' })
        .refine((date) => {
            return isBefore(date, subYears(new Date(), 18))
        }, "Você deve ser maior de 18 para embarcar nessa"),
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
