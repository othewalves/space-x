import { format } from "date-fns"

export const formatDate = (date: Date) => {
    return format(date, 'dd/mm/yyyy')
}