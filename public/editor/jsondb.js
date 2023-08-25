jsondb = {
    api_url: "https://defidata.link/api/",
    get_url: "https://defidata.link/api/get/",
    /*get_url: "https://json.defidata.link/",*/
    load: async (filepath) => {
        return await jsondb.api.get(jsondb.get_url + filepath.toLowerCase());
    },
    save: async (filepath, data) => { 
        return await jsondb.api.post(jsondb.api_url + filepath.toLowerCase(), data);
    },
    add: async (filepath, data) => { 
        return await jsondb.api.put(jsondb.api_url + filepath.toLowerCase(), data);
    },
    key: async () => {
        return await jsondb.api.get(jsondb.api_url + "key");
    },
    api: {
        get: async (url) => {
            try {
                req = await fetch(url);
                if (req.status == 200) {
                    res = await req.json();
                    return res;
                }
                return {"error":req.status};
                    
            } catch (error) {
                return {"error":error};
            }
        },
        post: async (url, data, method) => { 
            if (!method) { method = "POST"; }
            try {
                data = JSON.stringify(data);
                req = await fetch(url, {
                    method: method,
                    mode: "cors",
                    body: data,
                    headers: {"Content-type": "application/json; charset=UTF-8", "X-Ref": "1"}
                });
                if (req.status == 200) {
                    res = await req.json();
                    return res;
                }
                return {"error":req.status};        
            } catch (error) {
                return {"error":error};
            }
        },
        put: async (url, data) => { jsondb.api.post(url, data, "PUT"); }
    }
}