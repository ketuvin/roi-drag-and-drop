class LocalStorageService {
    static get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            localStorage.getItem(key);
        }
    }

    static set(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    static remove(key) {
        return localStorage.removeItem(key);
    }
}

export default LocalStorageService;
