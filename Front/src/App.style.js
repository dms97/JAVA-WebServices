export default {
  '@global': {
    body: {
      backgroundColor: 'white'
    }
  },
  layout: {
    '& nav': {
      backgroundColor: '#0f1187'
    },
    '& ul': {
      padding: 0,
      margin: 0
    },
    '& li': {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 10,
      fontSize: 20,
      '&:hover': {
        backgroundColor: '#1113d6'
      },
      '& a': {
        color: 'white',
        '&:hover': {
          color: 'white',
          textDecoration: 'none'
        }
      }
    }
  },
  view: {
    padding: 15
  }
}
