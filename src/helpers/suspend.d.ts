declare const initializeDataReader: <T>(apiFn: () => Promise<T>) => {
    read(): T;
};
export default initializeDataReader;
