/* eslint-disable prettier/prettier */
import dayjs from 'dayjs'

interface DateProps {
  date: Date | string | number
}

export function formatDate({ date }: DateProps): string {
  const parsedDate = dayjs(date)
  return parsedDate.format('D/MM/YYYY')
}
