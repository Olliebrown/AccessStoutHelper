import Dexie from 'dexie'

export const db = new Dexie('AccessStoutHelperDB')
db.version(1).stores({
  students: 'emplId, campusId, firstName, lastName, email, advisorEmail',
  advisors: 'firstName, lastName, email'
})
