import '../event.transfer';
const onclick = async (ev: any) => {
    console.log(
        `Click! Button id: ${ev.targetId}, Button classes: ${JSON.stringify(
            ev.targetClassList
        )}`
    );
};

export { onclick };
