interface CallbackArg {
    (arg: string): void;
}

export async function remoteFunc(cb: CallbackArg): Promise<void> {
    await cb('A string from a worker');
}
