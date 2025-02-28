import mock from 'mockjs'

mock.mock('/api/test', 'get', () => {
  return {
    errno: 0,
    data: {
      name: `测试 ${Date.now()}`,
    },
  }
})
