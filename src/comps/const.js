export const KEY = 'my-secret-key@123'
export const ROLES = [
  {
    value: 'engineering',
    label: 'Engineering',
    children: [
      {
        value: 'front-end',
        label: 'Front-end'
      },
      {
        value: 'back-end',
        label: 'Back-end'
      },
      {
        value: 'dev-ops',
        label: 'Dev-ops'
      },
      {
        value: 'data',
        label: 'Data'
      }
    ]
  },
  {
    value: 'design',
    label: 'Design',
    children: [
      {
        value: 'ui',
        label: 'UI'
      },
      {
        value: 'ux',
        label: 'UX'
      },
      {
        value: 'marketing',
        label: 'Marketing'
      },
      {
        value: 'animation',
        label: 'Animation'
      }
    ]
  }
]

export const RULES = {
  upperCaseLowerCaseAndNumber: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
  minCharacterLength: 9
}
