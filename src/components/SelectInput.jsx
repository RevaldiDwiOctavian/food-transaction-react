export default function SelectInput(props) {
    const {data, label, id, disabled, name, value, onChange} = props;

    return (
        <div className="max-w-full">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select
                id={id}
                name={name}
                value={value}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={disabled}
                onChange={onChange}
            >
                <option value="" hidden>Choose an item</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}