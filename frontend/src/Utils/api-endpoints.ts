import { ApiEndpoints } from "./types";

const url: string | undefined = process.env.REACT_APP_API_URL;

const apiEndpoints: ApiEndpoints = {
    department: `${url}/api/Department`,
    employee: `${url}/api/Employee`,
    photos: (fileName) => `${url}/api/Photos/${fileName}`
}

export default apiEndpoints;
