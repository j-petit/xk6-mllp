import mllp from 'k6/x/mllp';

const client = new mllp.Client({
    host: 'clio.cloud.aiqnet.org',
    port: '443'
});

export default function () {
    client.send('./sample.hl7');
}
