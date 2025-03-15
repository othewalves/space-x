import { z } from 'zod';
import { isBefore, subYears } from 'date-fns';

export const formSchema = z.object({
    name: z
        .string()
        .nonempty('Nome é obrigatório')
        .min(3, 'Informe um nome válido')
        .refine((value) => value.includes(' '), 'Obrigatório o nome completo')
        .refine((value) => {
            if (!value) return false;
            const names = value.trim().split(' ')
            return names.length > 0 && names[1].length > 2
        }, 'Informe um sobrenome válido'),
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
