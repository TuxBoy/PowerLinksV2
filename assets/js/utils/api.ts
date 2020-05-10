class APIError {

    private errors: any;

    constructor(errors: any) {
        this.errors = errors;
    }

}

export async function post (url: String, data: any) {
    // @ts-ignore
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const status = response.status
    const result = await response.json()
    if (status >= 200 && status < 300) {
        return result
    } else {
        throw new APIError(result)
    }
}

