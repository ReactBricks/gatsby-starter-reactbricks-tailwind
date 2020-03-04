import { types } from 'react-bricks'

const pageTypeSchema = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    defaultLanguage: 'en',
    getDefaultContent: () => [],
  },
]

export default pageTypeSchema