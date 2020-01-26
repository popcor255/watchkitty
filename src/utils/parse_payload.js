function parse_payload(request){
    return JSON.parse(request);
}

module.exports = { parse_payload };