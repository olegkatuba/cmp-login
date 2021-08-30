export declare enum CALL_STATE {
    ERROR = 0,
    LOADED = 1,
    LOADING = 2,
    NOT_CALLED = 3
}
export interface NetworkNotCalled {
    state: CALL_STATE.NOT_CALLED;
}
export interface NetworkLoading {
    state: CALL_STATE.LOADING;
}
export interface NetworkError {
    state: CALL_STATE.ERROR;
}
export interface NetworkSuccess<T> {
    response: T;
    state: CALL_STATE.LOADED;
}
export declare type NetworkState<T> = NetworkNotCalled | NetworkLoading | NetworkError | NetworkSuccess<T>;
