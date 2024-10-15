export default function InputText(props) {
    const {label, id, type, name, placeholder, value, onChange} = props;
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor={id}>{label}</label>
            <input id={id} name={name} className="text-sm border rounded text-black placeholder-gray-400" type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}