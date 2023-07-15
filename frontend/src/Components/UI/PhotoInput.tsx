import { ChangeEventHandler, useState } from "react";
import { uploadProfilePic } from "../../Services/employee-services";
import InputContainer from "./InputContainer";
import Spinner from '../UI/Spinner';

interface PhotoInputProps {
    setPhotoFileName: (name: string) => void
}

const cls = [
    'block bg-white text-appgray font-[500] border-2 border-blue-500 rounded-md my-2 w-full',
    'file:bg-blue-600 file:text-white file:hover:bg-blue-800 file:outline-none file:border-none file:rounded-l file:px-3 file:py-1 file:mr-2'
]

export default function PhotoInput({ setPhotoFileName }: PhotoInputProps) {
    const [loading, setLoading] = useState<boolean>(false),
        [requestSuccess, setRequestSuccess] = useState<string | null>(null),
        [requestError, setRequestError] = useState<string | null>(null),
        handleUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
            e.preventDefault();
            setLoading(true);
            setRequestError(null);
            setRequestSuccess(null);
            try {
                const formData: FormData = new FormData();
                formData.append('avatar', e.target.files![0], e.target.files![0].name);
                const response = await uploadProfilePic(formData);
                setRequestSuccess('Photo uploaded successfully');
                setPhotoFileName(response);
            } catch (error) {
                setRequestError("We couldn't upload your file");
            }
            setLoading(false);
        }

    return (
        <InputContainer>
            <label className="text-left text-sm" htmlFor="avatar">Choose a profile picture:</label>
            <input
                className={cls.join(' ')}
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png"
                onChange={handleUpload}
            />
            {loading && <Spinner />}
            {requestSuccess && <p className="text-right text-small text-green-500">{requestSuccess}</p>}
            {requestError && <p className="text-right text-small text-red-500">{requestError}</p>}
        </InputContainer>
    );
}