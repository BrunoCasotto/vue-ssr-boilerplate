
class ApiService {

  getProduct(id) {
    const productsMock = {
      '001': {
        id: '001',
        name: 'Product one',
        price: 111,
      },
      '002': {
        id: '002',
        name: 'Product Two',
        price: 2222,
      },
      '003': {
        id: '003',
        name: 'Product Three',
        price: 3333,
      },
    }

    return productsMock[id] || {}
  }
}

module.exports = new ApiService