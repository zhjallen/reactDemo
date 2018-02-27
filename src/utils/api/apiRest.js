import superagent from 'superagent';

const methods = [
    'get',
    'head',
    'post',
    'put',
    'del',
    'options',
    'patch',
];

class Api {
    constructor(opts) {
        this.opts = opts || {
            headers: {},
        };
        if (!this.opts.baseURI) {
            throw new Error('baseURI option is required');
        } else {
            methods.forEach(method => {
                this[method] = (path, {
                    params,
                    data,
                } = {}) => {
                    console.log(data,'data')
                    new Promise((resolve, reject) => {
                        const url = this.opts.baseURI + path;
                        const request = superagent[method](url);
                        if (params) {
                            request.query(params);
                        }
                        if (this.opts.headers) {
                            request.set(this.opts.headers);
                        }
                        if (data) {
                            request.send(data);
                        }
                        request.end((err, res) => err ? reject({
                            body: res && res.body,
                            status: res && res.status,
                            error: err
                        }) : resolve({
                            body: res.body,
                            status: res.status
                        }));
                    });
                };
            });
        }
    }
}
export default Api;