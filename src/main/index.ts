import { hello } from './worker/hello.worker';

async function main() {
    console.log(await hello('World'));
}

main();
