import FormItem from "../formItem/FormItem.js"

function RegisterForm({ type: formType, labelText, inputText, value, onChange, onKeyUp, error }) {
    return (
        <div className="col-md-6 mb-3">
            <FormItem type={formType} labelText={labelText} inputText={inputText} value={value} onChange={onChange} onKeyUp={onKeyUp} error={error} />
        </div>
    );
}

export default RegisterForm;
