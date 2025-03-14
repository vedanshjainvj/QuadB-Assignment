class CLogger {

    static debug(...args) {
      if (process.env.NODE_ENV === "development" || !!process.env.ENABLE_DEBUG) {
        console.log("\x1b[36m[DBG]\x1b[0m", ...args);
      }
    }
  
    static info(...args) {
      if (process.env.NODE_ENV === "development" || !!process.env.ENABLE_DEBUG) {
        console.log("\x1b[32m[INF]\x1b[0m", ...args);
      }
    }
  
    static warn(...args) {
      console.warn("\x1b[33m[WRN]\x1b[0m", ...args);
    }

    static err(...args) {
      console.error("\x1b[31m[ERR]\x1b[0m", ...args);
    }
  
    static success(...args) {
      console.log("\x1b[32m[SUCCESS]\x1b[0m", ...args);
    }
  }
  
  export default CLogger;