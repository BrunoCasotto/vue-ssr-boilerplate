
class ContextFactory {
  getContext(url, stateModule) {
    const title = 'vue page'
    const context = {
      title,
      url,
      state: {
        ...stateModule
      }
    }

    return context
  }
}

module.exports = new ContextFactory()