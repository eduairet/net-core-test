const url: string | undefined = process.env.REACT_APP_API_URL;

interface ApiEndpoints {
    department: string,
    employee: string,
    photos: string
}

const apiEndpoints: ApiEndpoints = {
    department: `${url}/api/Department`,
    employee: `${url}/api/Employee`,
    photos: `${url}/api/Photos`
}

export default apiEndpoints;
