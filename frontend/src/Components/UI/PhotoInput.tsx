import InputContainer from "./InputContainer";

const cls = [
    'block bg-white text-appgray font-[500] border-2 border-blue-500 rounded-md my-2 w-full',
    'file:bg-blue-600 file:text-white file:hover:bg-blue-800 file:outline-none file:border-none file:rounded-l file:px-3 file:py-1 file:mr-2'
]

export default function PhotoInput() {
    return (
        <InputContainer>
            <label className="text-left text-sm" htmlFor="avatar">Choose a profile picture:</label>
            <input
                className={cls.join(' ')}
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png"
            />
            <p className="mt-2 text-sm text-right text-gray-300" id="file_input_help">PNG (MAX. 400x400px)</p>
        </InputContainer>
    );
}