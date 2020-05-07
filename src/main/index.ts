import * as Comlink from 'comlink';
import { hello } from './worker/hello.worker';
import { remoteFunc } from './worker/cb.worker';
import { RemoteClass } from './worker/cls.worker';

import './event.transfer';
import * as api from './worker/event.worker';

import { MarkdownParser } from './markdownParser';

function callback(value: string) {
    console.log(`Result: ${value}`);
}

async function main() {
    // simple
    console.log(await hello('World'));

    // callback
    await remoteFunc(Comlink.proxy(callback));

    // class
    const instance_01 = await new RemoteClass();
    const instance_02 = await new RemoteClass(24);

    console.log(`instance 01: ${await instance_01.counter}`);
    console.log(`instance 02: ${await instance_02.counter}`);

    await instance_01.increment();
    await instance_02.increment(24);

    console.log(`instance 01: ${await instance_01.counter}`);
    console.log(`instance 02: ${await instance_02.counter}`);

    // event listener
    const btn = document.querySelector('#worker-btn');
    btn && btn.addEventListener('click', api.onclick.bind(api));

    const res = await fetch('https://raw.githubusercontent.com/uruha/webworker-sandbox/master/README.md');
    const raw = await res.text();

    const markdownParser = new MarkdownParser();
    const htmlString = await markdownParser.parse(raw);

    const docs = document.getElementById('docs');
    docs && (docs.innerHTML = htmlString);
}

main();
