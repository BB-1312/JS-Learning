// simpleLogger.js

/**
 * A high-level, Singleton-pattern class for centralized application logging.
 * It controls the minimum level of messages that get displayed.
 */
class SimpleLogger {
    static instance = null;
    static LEVELS = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
    };

    constructor(minLevel = SimpleLogger.LEVELS.INFO) {
        if (SimpleLogger.instance) {
            return SimpleLogger.instance;
        }

        this.minLevel = minLevel;
        SimpleLogger.instance = this;
        console.log(`Logger initialized. Minimum level set to: ${Object.keys(SimpleLogger.LEVELS).find(key => SimpleLogger.LEVELS[key] === minLevel)}`);
    }

    /** Helper to check if a message should be logged. */
    _shouldLog(level) {
        return level >= this.minLevel;
    }

    // High-level logging methods
    info(message, context = {}) {
        if (this._shouldLog(SimpleLogger.LEVELS.INFO)) {
            console.info(`[INFO] ${new Date().toISOString()} - ${message}`, context);
        }
    }

    warn(message, context = {}) {
        if (this._shouldLog(SimpleLogger.LEVELS.WARN)) {
            console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, context);
        }
    }

    error(message, errorObject) {
        if (this._shouldLog(SimpleLogger.LEVELS.ERROR)) {
            console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, errorObject);
        }
    }

    debug(message, context = {}) {
        if (this._shouldLog(SimpleLogger.LEVELS.DEBUG)) {
            console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`, context);
        }
    }
}

// Create and export the application's single logger instance
// We can optionally set the minimum level here, e.g., new SimpleLogger(SimpleLogger.LEVELS.DEBUG)
const logger = new SimpleLogger(SimpleLogger.LEVELS.INFO); 
export { logger };
