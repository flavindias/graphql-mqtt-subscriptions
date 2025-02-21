import { $$asyncIterator } from 'iterall';
import { PubSubEngine } from 'graphql-subscriptions/dist/pubsub-engine';
export declare class PubSubAsyncIterator<T> implements AsyncIterator<T> {
    private pullQueue;
    private pushQueue;
    private eventsArray;
    private allSubscribed;
    private listening;
    private pubsub;
    constructor(pubsub: PubSubEngine, eventNames: string | string[]);
    next(): Promise<IteratorResult<any, any>>;
    return(): Promise<{
        value: any;
        done: boolean;
    }>;
    throw(error: any): Promise<never>;
    [$$asyncIterator](): this;
    private pushValue;
    private pullValue;
    private emptyQueue;
    private subscribeAll;
    private unsubscribeAll;
}
