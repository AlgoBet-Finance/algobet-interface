import moment from 'moment'

export const timestampToDate = (timestamp: string): string => {
  return moment.unix(Number(timestamp)).format('MMM DD')
}
export const timestampToTime = (timestamp: string): string => {
  return moment.unix(Number(timestamp)).format('HH:mm')
}

export const timestampFormat = (timestamp: string): string => {
  return moment.unix(Number(timestamp)).format('HH:mm')
}