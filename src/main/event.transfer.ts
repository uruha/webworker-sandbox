import * as Comlink from 'comlink';

const handler: Comlink.TransferHandler<any, any> = {
    // @ts-ignore
    canHandle(obj) {
        return obj instanceof Event;
    },
    serialize(obj) {
        return [
            {
                targetId: obj && obj.target && obj.target.id,
                targetClassList: obj &&
                    obj.target &&
                    obj.target.classList && [...obj.target.classList],
                detail: obj && obj.detail,
            },
            [],
        ];
    },
    deserialize(obj) {
        return obj;
    },
};

export default Comlink.transferHandlers.set('event', handler);
