import log from '../lib/log'

/**
 * localStorage wrapper, prefixes automatically.
 */
class WPLF_Storage {
  prefix: string

  constructor(prefix = 'wplf') {
    this.prefix = prefix
  }

  get(key: string, defaultValue: any) {
    const data = localStorage.getItem(this.prefix + key)

    if (data !== null) {
      const value = data ? JSON.parse(data) : data

      return value
    } else {
      log.notice(
        `No value found for ${key}, falling back to default`,
        defaultValue
      )

      return defaultValue
    }
  }

  set(key: string, value: any) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value))

      return true
    } catch (e) {
      log.error(e, key, value)

      return false
    }
  }
}

const instance = new WPLF_Storage()

export { WPLF_Storage, instance }
