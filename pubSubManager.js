// pubSubManager.js

/**
 * A high-level, centralized manager for a simple Publish-Subscribe (event) system.
 * This decouples components by allowing them to subscribe to topics and publish data
 * without knowing about each other.
 */
class PubSubManager {
    constructor() {
        // Topic (string) -> List of callbacks (functions)
        this.subscribers = new Map();
    }

    /**
     * Subscribes a function to a specific topic.
     * @param {string} topic - The name of the event/topic.
     * @param {Function} callback - The function to execute when the topic is published.
     * @returns {Object} - An object with an 'unsubscribe' method.
     */
    subscribe(topic, callback) {
        if (!this.subscribers.has(topic)) {
            this.subscribers.set(topic, []);
        }
        this.subscribers.get(topic).push(callback);
        console.log(`Subscribed function to topic: ${topic}`);

        // High-level utility to manage the subscription life-cycle
        return {
            unsubscribe: () => {
                const callbacks = this.subscribers.get(topic);
                if (callbacks) {
                    const index = callbacks.indexOf(callback);
                    if (index > -1) {
                        callbacks.splice(index, 1);
                        console.log(`Unsubscribed function from topic: ${topic}`);
                    }
                }
            }
        };
    }

    /**
     * Publishes data to a topic, executing all subscribed callbacks.
     * @param {string} topic - The name of the event/topic.
     * @param {*} data - The data to pass to the subscribed callbacks.
     */
    publish(topic, data) {
        console.log(`Publishing data to topic: ${topic}`);
        const callbacks = this.subscribers.get(topic);
        if (callbacks) {
            callbacks.forEach(callback => {
                // Call the subscriber with the published data
                callback(data);
            });
        }
    }
}

// Export a singleton instance for application-wide use
const pubSub = new PubSubManager();
export { pubSub };
