// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    campDays: ['Thursday','Friday','Saturday','Sunday'],
    marketHours: [
      {
        name: 'Thursday',
        times: ['6:00-7:00pm', '8:00-9:00pm'],
      },
      {
        name: 'Friday',
        times: ['8:00-9:00am', '12:00-1:30pm', '6:00-8:30pm'],
      },
      {
        name: 'Saturday',
        times: ['8:00-9:00am', '12:00-1:30pm'],
      }
    ],
    schedule_groups: [
      {
        name: 'Adults',
        link: '/schedules?group=adult'
      },
      {
        name: 'Pre-K, K',
        link: '/schedules?group=PreK-K'
      },
      {
        name: '1st-4th',
        link: '/schedules?group=1st-4th'
      },
      {
        name: '5th-6th',
        link: '/schedules?group=5th-6th'
      },
      {
        name: '7th-8th',
        link: '/schedules?group=7th-8th'
      },
      {
        name: '9th-10th',
        link: '/schedules?group=9th-10th'
      },
      {
        name: '11th',
        link: '/schedules?group=11th'
      },
      {
        name: '12th',
        link: '/schedules?group=12th'
      }
    ]
  }),
})
