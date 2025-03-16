import { differenceInYears } from "date-fns"

export const calculateAge = (dateBith: Date) => {
    return differenceInYears(new Date(), dateBith);
}